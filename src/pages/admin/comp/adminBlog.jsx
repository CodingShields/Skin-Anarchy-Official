import React, { useEffect, useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import AddCircleBtn from "../../components/buttons/AddCircleBtn";
import MinusCircleBtn from "../../components/buttons/MinusCircleBtn";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import XCirlceIcon from "@heroicons/react/24/solid/XCircleIcon";
import WorkingModal from "../../components/WorkingModal";

const AdminBlog = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		message: "",
		preview: false,
	});

	const [blogData, setBlogData] = useState({
		date: "",
		title: "",
		author: "",
		podcastUrl: "",
		tags: "",
		images: [],
		titleImage: null,
		titleImageBlob: null, // Reset titleImage
	});

	const [imageInputs, setImageInputs] = useState([1]);
	const [imageUrls, setImageUrls] = useState([]);
	const [selectedImage, setSelectedImage] = useState(null); // New state for selected image
	const textareaRef = useRef(null);
	const titleImageRef = useRef(null);
	const [blogMessage, setBlogMessage] = useState("");

	const initializeState = () => {
		setImageInputs([1]);
		setBlogData({
			date: "",
			title: "",
			author: "",
			podcastUrl: "",
			tags: "",
			images: [],
			titleImage: null,
			titleImageBlob: null, // Reset titleImage
		});
		setImageUrls([]);
		setSelectedImage(null);
		setBlogMessage("");
	};
	const formatDate = (date) => {
		const dateArray = date.split("-");
		const year = dateArray[0];
		const month = dateArray[1];
		const day = dateArray[2];
		return `${month}-${day}-${year}`;
	};

	useEffect(() => {
		const handleFireStoreUpload = async () => {
			if (blogData.images.length === 0) return;

			try {
				setState((prevState) => ({ ...prevState, loading: true }));
				const urls = [];

				for (let i = 0; i < blogData.images.length; i++) {
					const image = blogData.images[i].image;
					const imageRef = ref(storage, `blogImages/${image.name + v4()}`);

					await uploadBytes(imageRef, image).then(async (snapshot) => {
						const url = await getDownloadURL(snapshot.ref);
						urls.push(url);
					});
				}

				setImageUrls(urls);
				setState((prevState) => ({ ...prevState, loading: false }));
			} catch (error) {
				console.error(error);
				setState((prevState) => ({ ...prevState, loading: false }));
			}
		};

		handleFireStoreUpload();
	}, [blogData.images]);

	useEffect(() => {
		const handleFireStoreUpload = async () => {
			if (!blogData.titleImage) return;

			try {
				setState((prevState) => ({ ...prevState, loading: true }));

				const image = blogData.titleImage.image;
				const imageRef = ref(storage, `blogImages/${image.name + v4()}`);

				await uploadBytes(imageRef, image).then(async (snapshot) => {
					const url = await getDownloadURL(snapshot.ref);
					console.log(url);
					setBlogData((prevData) => ({
						...prevData,
						titleImageBlob: url,
					}));
					setState((prevState) => ({ ...prevState, loading: false }));
				});
			} catch (error) {
				console.error(error);
				setState((prevState) => ({ ...prevState, loading: false }));
			}
		};

		handleFireStoreUpload();
	}, [blogData.titleImage]);
	const handleUpload = async () => {
		try {
			const colRef = collection(getFirestore(), "blogData");
			console.log(colRef);
			await addDoc(colRef, {
				date: blogData.date,
				title: blogData.title,
				author: blogData.author,
				podcastUrl: blogData.podcastUrl,
				tags: blogData.tags,
				blog: blogMessage,
				stars: 0,
				comments: [
					{
						user: "",
						comment: "",
					},
				],
				totalShares: 0,
				totalBookmarks: 0,
			});
			console.log("success");
		} catch (error) {
			console.error(error);
		}
	};
	const handleImageInputAdd = () => {
		const newImageInputs = [...imageInputs, imageInputs.length + 1]; // Add a new input
		setImageInputs(newImageInputs);
	};

	const handleImageInputRemove = () => {
		const newImageInputs = [...imageInputs];
		if (imageInputs.length <= 1) {
			return;
		} else {
			newImageInputs.pop(); // Remove the last input
			setImageInputs(newImageInputs);
		}
	};
	const handleTitleImageOnChange = (e) => {
		setState({ ...state, loading: true });
		const titleImage = e.target.files[0];
		const imageLocation = e.target.name;
		const imageUrl = URL.createObjectURL(titleImage);
		console.log(imageUrl);
		setBlogData({
			...blogData,
			titleImage: { imageName: imageLocation, imageUrl: imageUrl, image: titleImage }, // Set titleImage as an object
		});
		setState({ ...state, loading: false });
	};

	const handleImageUploadOnchange = (e) => {
		setState({ ...state, loading: true });
		const newImage = e.target.files[0];
		const imageLocation = e.target.name;
		const imageUrl = URL.createObjectURL(newImage);
		console.log(imageUrl);
		setBlogData({
			...blogData,
			images: [...blogData.images, { imageLocation: imageLocation, imageUrl: imageUrl, image: newImage }],
		});
		setState({ ...state, loading: false });
	};

	const errorReset = () => {
		setTimeout(() => {
			setState({ error: false, errorMessage: "" });
		}, 3000);
	};

	const handleDateChange = (e) => {
		const date = formatDate(e.target.value);
		setBlogData({ ...blogData, date: date });
	};

	const handleRestClick = () => {
		initializeState();
	};

	const handleBlogMessageDownload = () => {
		const blob = new Blob([blogMessage], { type: "text/plain;charset=utf-8" });
		const url = window.URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", "blogMessage.txt");
		document.body.appendChild(link);
		link.click();
		// Cleanup
		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	};

	const handleImageRemove = (e, index) => {
		const newImages = [...blogData.images];
		newImages.splice(index, 1);
		setBlogData({ ...blogData, images: newImages });
	};

	const insertImageAtCursor = () => {
		if (selectedImage.type === "titleImage") {
			const cursorPosition = textareaRef.current.selectionStart;
			const newText = `${blogMessage.substring(0, cursorPosition)}[TITLE:${selectedImage.imageUrl}]${blogMessage.substring(cursorPosition)}`;
			setBlogMessage(newText);
			setSelectedImage(null);
		} else {
			const cursorPosition = textareaRef.current.selectionStart;
			const newText = `${blogMessage.substring(0, cursorPosition)}[IMAGE:${selectedImage.imageUrl}]${blogMessage.substring(cursorPosition)}`;
			setBlogMessage(newText);
			setSelectedImage(null);
		}
	};

	const updateBlogMessage = (newMessage) => {
		setHistory([...history, blogMessage]);
		setBlogMessage(newMessage);
	};
	const [history, setHistory] = useState([]);

	const insertTextAtCursor = (prefix, suffix) => {
		const textarea = textareaRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = blogMessage.substring(start, end);
		const newText = blogMessage.substring(0, start) + prefix + selectedText + suffix + blogMessage.substring(end);
		updateBlogMessage(newText);
		textarea.setSelectionRange(start + prefix.length, end + prefix.length);
		textarea.focus();
	};

	const insertBoldText = () => {
		const textarea = textareaRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = blogMessage.substring(start, end);

		if (selectedText.includes("\n")) {
			const boldedText = selectedText
				.split("\n")
				.map((line) => line.replace(/^(\s*\d*\.\s*)(\w+)/, "$1**$2**"))
				.join("\n");

			const newText = blogMessage.substring(0, start) + boldedText + blogMessage.substring(end);
			updateBlogMessage(newText);
			textarea.setSelectionRange(start, start + boldedText.length);
			textarea.focus();
		} else {
			insertTextAtCursor("**", "**");
		}
		toolTimeout();
	};

	const insertUnderlineText = () => {
		const textarea = textareaRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = blogMessage.substring(start, end);

		if (selectedText.includes("\n")) {
			const underlinedText = selectedText
				.split("\n")
				.map((line) => line.replace(/^(\s*\d*\.\s*)(\w+)/, "$1__$2__"))
				.join("\n");

			const newText = blogMessage.substring(0, start) + underlinedText + blogMessage.substring(end);
			updateBlogMessage(newText);
			textarea.setSelectionRange(start, start + underlinedText.length);
			textarea.focus();
		} else {
			insertTextAtCursor("__", "__");
		}
		toolTimeout();
	};

	const insertListItem = () => {
		const textarea = textareaRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = blogMessage.substring(start, end);

		const numberedText = selectedText
			.split("\n")
			.map((line, index) => `${index + 1}. ${line}`)
			.join("\n");

		const newText = blogMessage.substring(0, start) + numberedText + blogMessage.substring(end);
		updateBlogMessage(newText);
		textarea.setSelectionRange(start, start + numberedText.length);
		textarea.focus();
		toolTimeout();
	};

	const insertNewLine = ({ title }) => {
		setActiveMarkDown(title);
		insertTextAtCursor("\n", "");
		toolTimeout();
	};

	const [activeMarkDown, setActiveMarkDown] = useState("");
	const insertIndent = ({ title }) => {
		setActiveMarkDown(title);
		const textarea = textareaRef.current;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const selectedText = blogMessage.substring(start, end);

		const indentedText = selectedText
			.split("\n")
			.map((line) => {
				const match = line.match(/^(\s*\d+\.\s*)(.*)/);
				if (match) {
					// Indent the text after the list number
					return `${match[1]}\t${match[2]}`;
				} else {
					// Indent the entire line
					return `\t${line}`;
				}
			})
			.join("\n");

		const newText = blogMessage.substring(0, start) + indentedText + blogMessage.substring(end);
		updateBlogMessage(newText);

		textarea.setSelectionRange(start, start + indentedText.length);
		textarea.focus();
		toolTimeout();
	};

	const undoLastAction = () => {
		if (history.length > 0) {
			const lastMessage = history.pop();
			setBlogMessage(lastMessage);
			setHistory([...history]);
		}
	};

	const renderBlogMessage = (message) => {
		const htmlMessage = message
			.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>") // Bold
			.replace(/__(.*?)__/g, "<u>$1</u>") // Underline
			.replace(/\t/g, "&emsp;") // Tabs to spaces
			.replace(/\n/g, "<br />"); // New lines to <br>
		return { __html: htmlMessage };
	};

	const toolTimeout = () => {
		setTimeout(() => {
			setActiveMarkDown("");
		}, 2000);
	};

	console.log(selectedImage);

	return (
		<div className='w-fit h-fit mx-auto space-x-12'>
			<WorkingModal open={state.loading} />
			<div className='w-full h-fit pb-2 inline-flex justify-center space-x-12 '>
				<div className='w-full flex flex-col justify-start items-center'>
					<p className='text-2xl font-bold text-black w-full  text-center py-2'>Admin Blog Upload and Update Tool</p>
					<a href='https://youtu.be/OWFajYNd3KY' target='_blank' rel='noreferrer'>
						<p className='text-sm italic text-black underline w-full  text-center hover:font-bold hover:text-blue-600 '>
							Click here for a video tutorial on how to use this tool
						</p>
					</a>
					<div className='w-1/4 inline-flex justify-center items-center gap-12 py-2'>
						<button
							onClick={handleUpload}
							className=' rounded-lg text-sm shadow-lg shadow-black text-white p-2 h-fit w-fit hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400'
						>
							Upload
						</button>
						<button
							onClick={handleRestClick}
							className=' rounded-lg text-sm shadow-lg shadow-black text-white p-2 h-fit w-fit hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400'
						>
							Reset
						</button>
					</div>
				</div>
			</div>
			{/* Main Container */}
			<div className='w-full h-fit flex-row flex justify-around'>
				<div className='grid grid-cols-1 w-fit h-[950px] mx-auto justify-between bg-char-900 p-4  overflow-y-scroll'>
					<div className='w-fit h-fit mx-auto'>
						<div className=' h-fit w-full   pb-4 grid grid-cols-1 text-right gap-2'>
							<p className='text-sm text-white  uppercase font-semibold  w-fit h-fit '>BlogPost Date</p>
							<input
								onChange={handleDateChange}
								className='w-full h-fit focus:outline-1 focus:outline-blue-500  text-xs text-center rounded-md '
								type='date'
								name='date'
								id='date'
							/>
							<p className='text-sm text-white  uppercase font-semibold   w-fit h-fit '>Blog Post Title</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
								className='w-full h-fit placeholder:text-left placeholder:italic focus:outline-1 focus:outline-blue-500  text-xs text-center rounded-md '
								type='text'
								name='title'
								id='title'
								placeholder='Blog Post Title'
							/>

							<p className='text-sm text-white  uppercase font-semibold   text-center w-fit h-fit py-2px'>Blog Author</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}
								className='w-full h-fit placeholder:text-left placeholder:italic focus:outline-1 focus:outline-blue-500  text-xs text-center rounded-md '
								type='text'
								name='author'
								id='author'
								placeholder='Blog Author'
							/>
							<p className='text-sm text-white  uppercase font-semibold  text-center w-fit h-fit py-2px'>Blog Title Image</p>

							{blogData.titleImage && blogData.titleImage.imageUrl && (
								<img src={blogData.titleImage.imageUrl} className='w-72 h-auto  py-4 px-2 mx-auto ' />
							)}
							<input
								onChange={handleTitleImageOnChange}
								className='w-fit h-fit bg-gray-200 focus:outline-1 focus:outline-blue-500  py-2 px-8 text-sm text-center hover:cursor-pointer '
								type='file'
								name='titleImage'
								id='titleImage'
								accept='image/*'
								placeholder='Blog Title Image'
							/>
						</div>
						<div className='h-fit w-full pb-4'>
							<p className='text-md text-white uppercase font-semibold  italic text-center underline underline-offset-8 py-2'>
								Add #tags for data user searches{" "}
							</p>
							<p className='text-sm text-white uppercase  italic text-center'>Separate each tag with a comma, the more the better.</p>
							<textarea
								placeholder='Example: #guestName, #product, #topic,  etc..'
								onChange={(e) => setBlogData({ ...blogData, tags: e.target.value })}
								className='w-full h-auto py-2 focus:outline-1 focus:outline-blue-500 text-lg text-center placeholder:text-sm placeholder:italic placeholder:text-left'
								type='text'
								name='tags'
								id='tags'
							/>
							<input
								onChange={(e) =>
									setBlogData({
										...blogData,
										podcastUrl: e.target.value,
									})
								}
								className='w-full h-6  text-lg text-center mb-4 placeholder:text-sm placeholder:italic placeholder:text-left focus:outline-1 focus:outline-blue-500 '
								type='text'
								name='podcastUrl'
								id='podcastUrl'
								placeholder='Enter Spotify Podcast URL'
							/>
						</div>
						<div className='w-full h-64'>
							<p className='text-md text-gray-100 w-full text-center  mb-4 '>Add Additional Image Uploads</p>
							<div className='flex flex-row items-center justify-center w-full h-fit mb-2 space-x-2'>
								<AddCircleBtn onClick={handleImageInputAdd} />
								<p className='text-md text-white  w-fit'>Add </p>
								<MinusCircleBtn onClick={handleImageInputRemove} />
								<p className='text-md  text-white  w-fit'>Remove </p>
							</div>
							<div className='flex flex-col items-center justify-start w-full h-48 overflow-y-scroll pb-12 '>
								{imageInputs.length >= 1 ? (
									<div className='flex flex-col items-center justify-center w-full  h-fit px-2'>
										{imageInputs.map((inputNumber, index) => (
											<div
												key={inputNumber}
												className='flex flex-col items-center justify-start w-full h-full  bg-zinc-300  text-start shadow-lg shadow-black rounded-lg mb-2 '
											>
												<div className='inline-flex w-full justify-between items-center  border-b border-black'>
													{" "}
													<p className='text-md text-black w-fit pl-2 whitespace-nowrap'>Extra Image {inputNumber}</p>
													{imageUrls.length > 0 ? (
														<div className='inline-flex w-fit justify-evenly items-center h-full hover:'>
															<button className='inline-flex w-32 h-full justify-evenly items-center group hover:bg-green-500 bg-green-300 px-2'>
																Saved
																<CheckIcon className='w-8 h-8 text-black group-hover:animate-bounce' />
															</button>

															<button
																onClick={(e) => handleImageRemove(e, index)}
																className=' w-32 hover:font-semibold text-black uppercase px-2 text-left inline-flex justify-center items-center bg-red-200 hover:bg-red-300'
															>
																Remove <XCirlceIcon className='w-8 h-8 text-red-500' />
															</button>
														</div>
													) : (
														<h1 className='text-red-500 whitespace-nowrap w-fit pr-4'>No Image Uploaded</h1>
													)}
												</div>
												{blogData.images[index] && <img src={blogData.images[index].imageUrl} className='w-72 h-auto py-2 px-6' />}
												<div className='flex flex-row items-center justify-end w-full h-fit'>
													<input
														onChange={handleImageUploadOnchange}
														className='w-full h-fit focus:outline-4 focus:outline-blue-500 pl-10 text-sm text-center'
														type='file'
														name={`image${inputNumber}`}
													/>
												</div>
											</div>
										))}
									</div>
								) : (
									""
								)}
							</div>
						</div>
					</div>{" "}
				</div>
				<div className='w-[500px] mx-auto bg-black space-y-2 overflow-y-scroll h-[950px]'>
					<div className='w-3/4 border-b mx-auto mt-2'>
						<h1 className='text-center text-white'>Image List</h1>
						<h1 className='text-center text-white'> Click Image You Want To Set</h1>
						<h1 className='text-center text-white font-bold tracking-wider uppercase'> DO NOT forget the Title Image</h1>
					</div>
					<div className='w-full mx-auto border border-white py-2'>
						<h1 className='text-center text-white'>Title Image</h1>
						{blogData.titleImage && blogData.titleImage.imageUrl && (
							<div
								ref={titleImageRef}
								title='titleImage'
								onClick={() =>
									setSelectedImage({
										type: "titleImage",
										imageUrl: blogData.titleImageBlob,
									})
								}
							>
								<div
									className={
										selectedImage && selectedImage.imageUrl === blogData.titleImageBlob
											? "relative w-full h-full flex justify-center cursor-pointer animate-fadeIn z-60 "
											: "relative w-full h-full flex justify-center animate-fadeOut z-60"
									}
								>
									{" "}
									<h1 className='text-green-500 text-2xl absolute w-10/12 bg-white rounded-2xl text-center h-fit underline underline-offset-6 decoration-1 mt-4 uppercase z-60'>
										Image Selected
									</h1>
								</div>{" "}
								<img
									src={blogData.titleImage.imageUrl}
									className={
										selectedImage && selectedImage.imageUrl === blogData.titleImageBlob
											? "w-72 h-auto mx-auto border-2 border-white shadow-xl shadow-white"
											: "w-64 h-auto mx-auto "
									}
								/>
							</div>
						)}
					</div>
					<div className='space-y-2'>
						{imageUrls.map((image, index) => (
							<div
								key={index}
								onClick={() =>
									setSelectedImage({
										type: "image",
										imageUrl: image,
									})
								}
							>
								<div
									className={
										selectedImage && selectedImage.imageUrl === image
											? "relative w-full h-full flex justify-center cursor-pointer animate-fadeIn"
											: "relative w-full h-full flex justify-center animate-fadeOut "
									}
								>
									<h1 className=' text-green-500 text-2xl absolute w-10/12 bg-white rounded-2xl text-center h-fit underline underline-offset-6 decoration-1 mt-4 uppercase z-60'>
										Image Selected
									</h1>{" "}
								</div>
								<img
									src={image}
									className={
										selectedImage && selectedImage.imageUrl === image
											? "w-72 h-auto mx-auto border-2 border-white shadow-xl shadow-white"
											: "w-64 h-auto mx-auto hover:border"
									}
								/>
							</div>
						))}
					</div>
				</div>
				<div className='w-fit h-full flex flex-col'>
					<div className='inline-flex w-fit justify-center items-center mx-auto shadow-xl shadow-black/30 rounded-lg border-b border-black pt-2'>
						<button
							onClick={() => insertBoldText({ title: "bold" })}
							className={
								activeMarkDown === "bold"
									? "w-24 text-sm font-bold text-black px-2 py-2 bg-green-500 border-black border-[.5px]  uppercase translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
									: "w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 active:translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
							}
						>
							Bold
						</button>
						<button
							onClick={() => insertUnderlineText({ title: "underline" })}
							className={
								activeMarkDown === "underline"
									? "w-24 text-sm font-bold text-black px-2 py-2 bg-green-500 border-black border-[.5px]  uppercase translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
									: "w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 active:translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
							}
						>
							Underline
						</button>
						<button
							onClick={() => insertListItem({ title: "listItem" })}
							className={
								activeMarkDown === "listItem"
									? "w-24 text-sm font-bold text-black px-2 py-2 bg-green-500 border-black border-[.5px]  uppercase translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
									: "w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 active:translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
							}
						>
							List Item
						</button>
						<button
							onClick={() => insertNewLine({ title: "newLine" })}
							className={
								activeMarkDown === "newLine"
									? "w-24 text-sm font-bold text-black px-2 py-2 bg-green-500 border-black border-[.5px]  uppercase translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
									: "w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 active:translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
							}
						>
							New Line
						</button>

						<button
							onClick={() => insertIndent({ title: "indent" })}
							className={
								activeMarkDown === "indent"
									? "w-24 text-sm font-bold text-black px-2 py-2 bg-green-500 border-black border-[.5px]  uppercase translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
									: "w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 active:translate-y-2 hover:text-black hover:bg-blue-200 transition-all ease-in-out duration-300"
							}
						>
							Indent
						</button>
						<button
							onClick={undoLastAction}
							className='w-24 text-sm font-bold text-black px-2 py-2 bg-gray-300 rounded-tr-lg   active:translate-y-2 hover:text-black hover:bg-blue-200'
						>
							Undo
						</button>
					</div>

					<div className='inline-flex w-fit justify-center items-center mx-auto shadow-xl shadow-black/30 rounded-lg hover:bg-blue-200'>
						<button
							onClick={insertImageAtCursor}
							className='w-48 text-md font-bold text-black px-4 py-2 bg-green-400 rounded-bl-lg  active:translate-y-2 hover:text-black hover:bg-blue-200'
						>
							Insert Image
						</button>
						<button
							onClick={() => setState({ ...state, preview: !state.preview })}
							className='w-48 text-md font-bold text-black px-8 py-2 bg-yellow-300   active:translate-y-2 hover:text-black hover:bg-blue-200'
						>
							Preview
						</button>
						<button
							onClick={handleUpload}
							className='w-48 text-md font-bold text-black px-8 py-2 bg-blue-400 rounded-br-lg active:translate-y-2 hover:text-black hover:bg-blue-200'
						>
							Upload Data
						</button>
					</div>
					<div className='w-full h-[800px] overflow-y-scroll'>
						<textarea
							className='w-[800px] h-[800px] whitespace-pre-wrap'
							ref={textareaRef}
							value={blogMessage}
							onChange={(e) => setBlogMessage(e.target.value)}
						/>
					</div>
				</div>
			</div>
			<div
				className={
					state.preview
						? "w-full h-fit overflow-y-scroll absolute top-1/4 -right-1/4 z-60 animate-fadeIn"
						: "animate-fadeOut w-full h-fit overflow-y-scroll top-1/4 -right-1/4 z-60"
				}
			>
				<button
					className='bg-white relative px-6 shadow-2xl shadow-black border-2 border-black h-fit w-fit text-black'
					onClick={() => setState({ ...state, preview: !state.preview })}
				>
					Close Preview
				</button>
				<div
					className=' bg-white w-[800px] h-11/12 relative p-6 shadow-2xl shadow-black border-8 border-black'
					dangerouslySetInnerHTML={renderBlogMessage(blogMessage)}
				/>
			</div>
		</div>
	);
};

export default AdminBlog;
