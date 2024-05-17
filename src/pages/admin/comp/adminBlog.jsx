import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, setDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import AddCircleBtn from "../../components/buttons/AddCircleBtn";
import MinusCircleBtn from "../../components/buttons/MinusCircleBtn";
import CommitBtn from "../../components/buttons/commitBtn";

const AdminBlog = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		commitClicked: false,
	});

	const [blogData, setBlogData] = useState({
		date: "",
		title: "",
		podcastUrl: "",
		tags: "",
		images: [],
		content: [],
	});
	const [contentTitle, setContentTitle] = useState("");
	const [content, setContent] = useState("");

	//Image Input States
	const [imageInputs, setImageInputs] = useState([1]);
	const [contentInputs, setContentInputs] = useState([1]);
	const [imageUrls, setImageUrls] = useState([]);

	const initializeState = () => {
		setImageInputs([1]);
		setContentInputs([1]);
		setBlogData({
			date: "",
			title: "",
			author: "",
			podcastUrl: "",
			tags: "",
			images: [],
			content: [],
		});
		setContentTitle("");
		setContent("");
		setImageUrls([]);
	};

	useEffect(() => {
		initializeState();
	}, []);

	const formatDate = (date) => {
		const dateArray = date.split("-");
		const year = dateArray[0];
		const month = dateArray[1];
		const day = dateArray[2];
		const formattedDate = `${month}-${day}-${year}`;
		return formattedDate;
	};
	console.log(imageUrls);
	useEffect(() => {
		const handleFireStoreUpload = async () => {
			try {
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
			} catch (error) {
				console.error(error);
			}
		};

		handleFireStoreUpload();
	}, [blogData.images]);

	const handleUpload = async () => {
		try {
			const colRef = collection(getFirestore(), "blogData");
			console.log("colRef: ", colRef);
			await addDoc(colRef, {
				date: blogData.date,
				title: blogData.title,
				author: blogData.author,
				podcastUrl: blogData.podcastUrl,
				tags: blogData.tags,
				images: [...imageUrls, imageUrls[0]],
				content: blogData.content,
			});
			console.log("success");
		} catch (error) {
			console.error(error);
		}
	};
	const handleTitleContentInputs = () => {
		const newContentInputs = [...contentInputs, contentInputs.length + 1]; // Add a new input
		setContentInputs(newContentInputs);
	};

	const onClick = () => {
		setBlogData({
			...blogData,
			content: [
				...blogData.content,
				{
					title: contentTitle,
					content: content,
				},
			],
		});
	};

	const handleTitleContentInputsRemove = () => {
		const newContentInputs = [...contentInputs];
		if (contentInputs <= 1) {
		} else {
			newContentInputs.pop();
			setContentInputs(newContentInputs);
		}
	};
	const handleImageInputAdd = () => {
		const newImageInputs = [...imageInputs, imageInputs.length + 1]; // Add a new input
		setImageInputs(newImageInputs);
	};
	const handleImageInputRemove = () => {
		const newImageInputs = [...imageInputs];
		if (imageInputs <= 1) {
		} else {
			newImageInputs.pop(); // Remove the last input
			setImageInputs(newImageInputs);
		}
	};
	// On Change Functions
	const handleImageUploadOnchange = (e) => {
		const newImage = e.target.files[0];
		const imageLocation = e.target.name;
		const imageUrl = URL.createObjectURL(newImage);
		console.log(newImage);
		setBlogData({
			...blogData,
			images: [...blogData.images, { imageLocation: imageLocation, imageUrl: imageUrl, image: newImage }],
		});
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

	// const handleCommit = (value) => {
	//   if (value === "main") {
	//     setState({ ...state, commitMain: true });
	//   } else if (value === "images") {
	//     setState({ ...state, commitImages: true });
	//   } else if (value === "content") {
	//     setState({ ...state, commitContent: true });
	//   } else {
	//     return;
	//   }
	// };

	const [medium, setMedium] = useState([]);
	const [newMedium, setNewMedium] = useState([]);
	const handleMediumOnChange = (e) => {
		const files = e.target.files;
		const mediumArray = [];

		// Define a function to handle file extraction
		const handleFileExtraction = async (file) => {
			try {
				const fileData = await handleMediumExtract(file);
				const fileName = file.name;
				const date = fileName.substring(0, 10);
				console.log(date); // Extract first 10 characters
				mediumArray.push({ name: date, data: fileData });

				// If all files have been processed, update the state with the new medium array
				if (mediumArray.length === files.length) {
					setMedium(mediumArray);
					setNewMedium(mediumArray);
					console.log(medium);
				}
			} catch (error) {
				console.error("Error handling file extraction:", error);
				// Handle error
			}
		};

		// Process each file
		for (let i = 0; i < files.length; i++) {
			handleFileExtraction(files[i]);
		}
	};

	const handleMediumExtract = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const fileContents = event.target.result;
				const htmlContent = extractHTMLContent(fileContents);
				resolve(htmlContent);
			};
			reader.onerror = (error) => {
				reject(error);
			};
			reader.readAsText(file);
		});
	};

	const extractHTMLContent = (fileContents) => {
		// Assuming the file contains HTML content directly
		return fileContents;
	};
	const [mediumUrls, setMediumUrls] = useState([]);
	const NewFunction = async () => {
		// const handleFireStoreUpload = async () => {
		try {
			const urls = [];

			for (let i = 0; i < medium.length; i++) {
				const name = medium[i].name;
				const data = medium[i].data;
				const file = {
					name: name,
					data: data,
				};
				console.log(file);
				const imageRef = ref(storage, `mediumData/${name}`);
				console.log(imageRef);
				await uploadBytes(imageRef, file).then(async (snapshot) => {
					const url = await getDownloadURL(snapshot.ref);
					urls.push(url);
					setMediumUrls([
						...mediumUrls,
						{
							name: name,
							dataUrl: url,
						},
					]);
				});
			}
		} catch (error) {
			console.error(error);
		}
		// try {
		// 	const colRef = collection(getFirestore(), "mediumData");
		// 	console.log(colRef);
		// 	await addDoc(colRef, {
		// 		newMedium: newMedium,
		// 	});
		// 	console.log("success");
		// } catch (error) {
		// 	console.error(error);
		// }
	};

	const dbUpload = async () => {
		try {
			const colRef = collection(getFirestore(), "mediumData");
			console.log(colRef);
			await addDoc(colRef, {
				mediumData: medium,
			});
			console.log("success");
		} catch (error) {
			console.error(error);
		}
	};

	console.log(mediumUrls);
	console.log(medium);
	return (
		<div className='w-full h-full '>
			<div>
				<p className='text-xl font-bold text-black w-full  text-center py-2'>Admin Blog Upload and Update Tool</p>
				<a href='https://youtu.be/OWFajYNd3KY' target='_blank' rel='noreferrer'>
					<p className='text-sm italic text-black underline w-full  text-center hover:font-bold hover:text-blue-600 '>
						Click here for a video tutorial on how to use this tool
					</p>
				</a>
			</div>
			{/* Main Container */}
			<div className='flex items-start justify-center w-fit h-fit bg-zinc-600 border-black border-2 '>
				<div className='flex flex-col items-center justify-center w-full min-h-full'>
					<input type='file' id='fileInput' multiple directory webkitdirectory onChange={handleMediumOnChange} />

					<button className='text-white bg-black px-6 py-2 my-4' onClick={NewFunction}>
						{" "}
						New Function
					</button>
					<button className='text-white bg-black px-6 py-2 my-4' onClick={dbUpload}>
						{" "}
						dbUpload
					</button>
				</div>
				{/* Left Container Under Main */}
				<div className='flex flex-col items-center justify-center w-full border-r-2 min-h-full hover:bg-zinc-700 px-4 pb-4'>
					<p className='text-sm text-white w-full h-fit text-center py-3 border-b-2'>Main Blog Data</p>
					<div className='flex flex-row items-center justify-center w-fit h-fit space-x-4'>
						<div className='flex flex-col items-center justify-center w-fit h-fit'>
							<p className='text-sm text-white w-fit h-fit text-center py-[2px]'>BlogPost Date</p>
							<input
								onChange={handleDateChange}
								className='w-fit h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md '
								type='date'
								name='date'
								id='date'
							/>
						</div>
						<div className='flex flex-col items-center justify-start w-fit h-fit'>
							<p className='text-sm text-white  text-center w-fit h-fit py-[2px]'>Blog Post Title</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
								className='w-fit h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md placeholder:text-white caret-white accent-white'
								type='text'
								name='title'
								id='title'
							/>
						</div>
					</div>

					<div className='flex flex-col items-center justify-start w-fit mt-2 h-fit'>
						<div className='flex flex-col items-center justify-start w-fit h-fit'>
							<p className='text-sm text-white  text-center w-fit h-fit py-2px'>Blog Author</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}
								className='w-fit h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md placeholder:text-white caret-white accent-white'
								type='text'
								name='author'
								id='author'
							/>
						</div>
						<div className='flex flex-col items-center justify-center w-full h-fit  py-2'>
							<p className='text-md text-white '>Blog Title Image</p>

							{blogData.images.length > 0 && <img src={blogData.images[0].imageUrl} className='w-fit h-fit py-4 px-2' />}
							<input
								onChange={handleImageUploadOnchange}
								className='w-fit h-fit focus:outline-1 focus:outline-gold-500 py-2 px-8 text-sm text-center hover:cursor-pointer '
								type='file'
								name='titleImage'
								id='titleImage'
							/>
						</div>
						<div className='flex flex-col items-center justify-start w-full h-fit px-2 '>
							<p className='text-md text-white font-bold underline text-center'>Add #tags for data user searches</p>
							<p className='text-sm text-white italic text-center '>Separate each tag with a comma</p>
							<p className='text-sm text-white italic text-center py-2'>
								<span className='text-sm text-blackfont-semibold text-center py-2'>Example: </span>#guestName, #product, #topic etc...
							</p>
							<textarea
								onChange={(e) => setBlogData({ ...blogData, tags: e.target.value })}
								className='w-full h-auto focus:outline-4 focus:outline-blue-500 text-lg text-center'
								type='text'
								name='tags'
								id='tags'
							/>
						</div>
						<div>
							<p className='text-xl text-black font-bold border-black text-center'>Podcast URL</p>
							<input
								onChange={(e) =>
									setBlogData({
										...blogData,
										podcastUrl: e.target.value,
									})
								}
								className='w-fit h-fit focus:outline-4 focus:outline-blue-500 text-lg text-center mb-4'
								type='text'
								name='podcastUrl'
								id='podcastUrl'
							/>
						</div>
						{/* <CommitBtn
              value="main"
              onClick={() => handleCommit("main")} // Pass the desired value here
            /> */}
					</div>
				</div>
				<div className='flex flex-col items-center justify-center w-full  hover:bg-zinc-500 bg-gray-600 px-4 grow-0'>
					{/* Middle Container */}
					<p className='text-md text-gray-100 w-full py-3 text-center border-b-2 border-white mb-4 '>Add Additional Image Uploads</p>
					<div className='flex flex-row items-center justify-center w-full h-fit mb-2 space-x-2'>
						<AddCircleBtn onClick={handleImageInputAdd} />
						<p className='text-md text-white  w-fit'>Add </p>
						<MinusCircleBtn onClick={handleImageInputRemove} />
						<p className='text-md  text-white  w-fit'>Remove </p>
					</div>
					<div className='flex flex-col items-center justify-start w-full h-104 overscroll-y-auto overflow-y-scroll grow-0'>
						{imageInputs.length >= 1 ? (
							<div className='flex flex-col items-center justify-center w-full  h-fit px-2'>
								{imageInputs.map((inputNumber, index) => (
									<div
										key={inputNumber}
										className='flex flex-col items-center justify-start w-full h-full  bg-zinc-300 py-2 text-start shadow-lg shadow-black rounded-lg mb-2 border-2 border-black'
									>
										<p className='text-md text-black w-11/12 text-center underline py-2'>Extra Image {inputNumber}</p>
										{blogData.images[index + 1] && <img src={blogData.images[index + 1].imageUrl} className='w-fit h-fit py-6 px-6' />}
										<div className='flex flex-col items-center justify-end w-full h-fit'>
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
				<div className='flex flex-col items-center justify-start w-full  hover:bg-zinc-500 bg-gray-600 border-l-2 border-white rounded-r-xl'>
					{/* Right Container */}
					<p className='text-md text-gray-100 text-center w-full border-b-2 border-white py-3 mb-4'>Add Titles and Contents</p>
					<div className='flex flex-row items-center justify-center w-full h-fit mb-4 space-x-2 '>
						<AddCircleBtn onClick={handleTitleContentInputs} />
						<p className='text-md  text-white  w-fit '>Add</p>
						<MinusCircleBtn onClick={handleTitleContentInputsRemove} />
						<p className='text-md  text-white  w-fit'>Remove</p>
					</div>
					<div className='flex flex-col items-center justify-start w-full h-104 overscroll-y-auto overflow-y-scroll grow-0'>
						{contentInputs.length >= 1 ? (
							<div className='flex flex-col  w-full h-fit  px-4'>
								{contentInputs.map((inputNumber) => (
									<div
										key={inputNumber}
										className='flex flex-col items-center justify-center w-full h-fit mb-2 space-y-1 border-2 bg-zinc-300 border-zinc-900 pb-4 text-start shadow-lg shadow-black rounded-lg px-2'
									>
										<p className='text-md font-bold text-black text-center w-full '>Content Title {inputNumber}</p>
										<input
											onChange={(e) => setContentTitle(e.target.value)}
											className='w-96 h-fit focus:outline-4 focus:outline-blue-500 shadow-md shadow-black rounded-lg'
											type='text'
											name={`contentTitle${inputNumber}`}
										/>
										<p className='text-md font-bold text-black text-center w-full'>Content {inputNumber}</p>
										<textarea
											onChange={(e) => setContent(e.target.value)}
											className='w-96 h-24 focus:outline-4 focus:outline-blue-500 shadow-md shadow-black rounded-lg'
											type='text'
											name={`content${inputNumber}`}
										/>
										<CommitBtn onClick={onClick} />
									</div>
								))}
							</div>
						) : (
							""
						)}
					</div>
				</div>
			</div>{" "}
			<button
				onClick={handleUpload}
				className=' border-4 border-gray-700 rounded-lg text-sm shadow-lg shadow-black text-white p-2 hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400'
			>
				Upload
			</button>
		</div>
	);
};

export default AdminBlog;
