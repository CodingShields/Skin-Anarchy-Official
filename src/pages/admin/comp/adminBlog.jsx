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

	return (
		<div className='w-full h-lvh mx-auto relative'>
			<div className='w-full h-fit pb-2 inline-flex justify-center space-x-12'>
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
							onClick={handleUpload}
							className=' rounded-lg text-sm shadow-lg shadow-black text-white p-2 h-fit w-fit hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400'
						>
							Reset
						</button>
					</div>
				</div>
			</div>
			{/* Main Container */}
			<div className='flex flex-col w-full h-full mx-auto justify-between bg-zinc-600 p-4 '>
				<div className='w-1/3 h-full'>
					<div className=' h-fit w-full   pb-4 grid grid-cols-1 text-right gap-2'>
						<p className='text-sm text-white w-fit h-fit '>BlogPost Date</p>
						<input
							onChange={handleDateChange}
							className='w-full h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md '
							type='date'
							name='date'
							id='date'
						/>
						<p className='text-sm text-white   w-fit h-fit '>Blog Post Title</p>
						<input
							onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
							className='w-full h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md '
							type='text'
							name='title'
							id='title'
							placeholder='Blog Post Title'
						/>

						<p className='text-sm text-white  text-center w-fit h-fit py-2px'>Blog Author</p>
						<input
							onChange={(e) => setBlogData({ ...blogData, author: e.target.value })}
							className='w-full h-fit focus:outline-1 focus:outline-gold-500 text-xs text-center rounded-md '
							type='text'
							name='author'
							id='author'
						/>
						<p className='text-sm text-white  text-center w-fit h-fit py-2px'>Blog Title Image</p>

						{blogData.images.length > 0 && <img src={blogData.images[0].imageUrl} className='w-24 h-auto hover:w-72 py-4 px-2 mx-auto ' />}
						<input
							onChange={handleImageUploadOnchange}
							className='w-fit h-fit focus:outline-1 focus:outline-gold-500 py-2 px-8 text-sm text-center hover:cursor-pointer '
							type='file'
							name='titleImage'
							id='titleImage'
						/>
					</div>
					<div className='h-full w-full pb-4'>
						<p className='text-sm italic text-white italic '>Add #tags for data user searches </p>
						<p className='text-sm text-white italic '>Separate each tag with a comma</p>
						<textarea
							placeholder='Example: #guestName, #product, #topic,  etc..'
							onChange={(e) => setBlogData({ ...blogData, tags: e.target.value })}
							className='w-full h-auto focus:outline-4 focus:outline-blue-500 text-lg text-center placeholder:text-sm'
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
							className='w-full h-6  text-lg text-center mb-4'
							type='text'
							name='podcastUrl'
							id='podcastUrl'
							placeholder='Podcast URL'
						/>
					</div>
					{/* Middle Container */}
					<p className='text-md text-gray-100 w-full text-center  mb-4 '>Add Additional Image Uploads</p>
					<div className='flex flex-row items-center justify-center w-full h-fit mb-2 space-x-2'>
						<AddCircleBtn onClick={handleImageInputAdd} />
						<p className='text-md text-white  w-fit'>Add </p>
						<MinusCircleBtn onClick={handleImageInputRemove} />
						<p className='text-md  text-white  w-fit'>Remove </p>
					</div>
					<div className='flex flex-col items-center justify-start w-full h-auto overflow-y-scroll '>
						{imageInputs.length >= 1 ? (
							<div className='flex flex-col items-center justify-center w-full  h-fit px-2'>
								{imageInputs.map((inputNumber, index) => (
									<div
										key={inputNumber}
										className='flex flex-col items-center justify-start w-full h-full  bg-zinc-300 py-2 text-start shadow-lg shadow-black rounded-lg mb-2 '
									>
										<p className='text-md text-black w-11/12 text-center underline py-2'>Extra Image {inputNumber}</p>
										{blogData.images[index + 1] && <img src={blogData.images[index + 1].imageUrl} className='w-72 h-auto py-6 px-6' />}
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
					<div className='block h-1/2 w-full px-4 pb-4'>
						{/* Right Container */}
						<p className='text-md text-gray-100 text-center w-full  py-3 mb-4'>Add Titles and Contents</p>
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
											className='flex flex-col items-center justify-center w-full h-fit mb-2 space-y-1 
										 bg-zinc-300  pb-4 text-start shadow-lg shadow-black rounded-lg px-2'
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
			</div>{" "}
		</div>
	);
};

export default AdminBlog;
