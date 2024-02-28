import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
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

	useEffect(() => {
		const handleFireStoreUpload = async () => {
			try {
				const urls = [];

				for (let i = 0; i < blogData.images.length; i++) {
					const image = blogData.images[i].image;
					const imageRef = ref(storage, `blogImages/${image.name + v4()}`);

					await uploadBytes(imageRef, image).then((snapshot) => {
						return getDownloadURL(snapshot.ref).then((url) => {
							urls.push(url);
						});
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
			await addDoc(colRef, {
				date: blogData.date,
				title: blogData.title,
				podcastUrl: blogData.podcastUrl,
				tags: blogData.tags,
				images: [...imageUrls, imageUrls[0]],
				content: blogData.content,
			});
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

	return (
		<div className=' flex-nowrap  w-full h-fit'>
			<p className='text-2xl font-bold text-black w-full  text-center py-2'>Admin Blog Upload and Update Tool</p>
			<a href='https://youtu.be/OWFajYNd3KY' target='_blank' rel='noreferrer'>
				<p className='text-lg font-bold text-blue underline w-full  text-center py-2'>Click here for a video tutorial on how to use this tool</p>
			</a>
			{/* Main Container */}
			<div className='flex items-start justify-center w-fit h-124 shadow-black shadow-2xl bg-zinc-600 rounded-2xl mx-auto'>
				{/* Left Container Under Main */}
				<div className='flex flex-col items-center justify-center w-full border-r-2 h-full rounded-l-2xl overflow-y-scroll hover:bg-zinc-500 px-4 pb-4'>
					<p className='text-lg text-white font-bold w-full h-fit text-center py-3 border-b-2'>Main Blog Data</p>
					<div className='flex flex-row items-center justify-center w-fit h-fit space-x-4'>
						<div className='flex flex-col items-center justify-center w-fit h-fit'>
							<p className='text-md text-white font-bold w-fit h-fit text-center '>BlogPost Date</p>
							<input
								onChange={handleDateChange}
								className='w-fit h-fit focus:outline-4 focus:outline-blue-500 text-sm text-center rounded-md border-2 border-black'
								type='date'
								name='date'
								id='date'
							/>
						</div>
						<div className='flex flex-col items-center justify-start w-fit h-fit'>
							<p className='text-md text-white font-bold text-center w-fit h-fit'>Blog Post Title</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
								className='w-fit h-fit focus:outline-4 focus:outline-blue-500 text-sm text-center rounded-md border-2 border-black'
								type='text'
								name='title'
								id='title'
							/>
						</div>
					</div>

					<div className='flex flex-col items-center justify-start w-fit mt-2 h-fit  bg-zinc-300 text-start rounded-md border-2 border-black'>
						<p className='text-xl text-black font-bold w-fit border-b-2 border-black text-center py-2'>Blog Title Image</p>
						<div className='flex flex-col items-center justify-center w-full h-fit '>
							{blogData.images.length > 0 && <img src={blogData.images[0].imageUrl} className='w-fit h-fit py-4 px-2' />}
							<input
								onChange={handleImageUploadOnchange}
								className='w-fit h-fit focus:outline-4 focus:outline-blue-500 py-2 px-8 text-sm text-center rounded-lg cursor-pointer '
								type='file'
								name='titleImage'
								id='titleImage'
							/>
						</div>
						<div className='flex flex-col items-center justify-start w-full h-fit px-2'>
							<p className='text-lg text-black font-bold border-t-2 border-black text-center'>Add #tags for data user searches</p>
							<p className='text-sm text-gray-600 font-italic text-center '>Separate each tag with a comma</p>
							<p className='text-sm text-gray-600 font-italic text-center py-2'>
								<span className='text-sm text-gray-600 font-semibold text-center py-2'>Example: </span>#guestName, #product, #topic etc...
							</p>
							<textarea
								onChange={(e) => setBlogData({ ...blogData, tags: e.target.value })}
								className='w-full h-fit  focus:outline-4 focus:outline-blue-500 text-lg text-center'
								type='text'
								name='tags'
								id='tags'
							/>
							I think we should add mandatory tags for each blog post.
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
				<div className='flex flex-col items-center justify-center w-full max-h-124 hover:bg-zinc-500 bg-gray-600 px-4 grow-0'>
					{/* Middle Container */}
					<p className='text-lg font-bold text-gray-100 w-full py-3 text-center border-b-2 border-white mb-4 '>Add Additional Image Uploads</p>
					<div className='flex flex-row items-center justify-center w-full h-fit mb-2 space-x-4'>
						<AddCircleBtn onClick={handleImageInputAdd} />
						<p className='text-xl text-white font-bold w-fit'>Add </p>
						<MinusCircleBtn onClick={handleImageInputRemove} />
						<p className='text-xl  text-white font-bold w-fit'>Remove </p>
					</div>
					<div className='flex flex-col items-center justify-start w-full h-104 overscroll-y-auto overflow-y-scroll grow-0'>
						{imageInputs.length >= 1 ? (
							<div className='flex flex-col items-center justify-center w-full  h-fit px-2'>
								{imageInputs.map((inputNumber, index) => (
									<div
										key={inputNumber}
										className='flex flex-col items-center justify-start w-full h-full  bg-zinc-300 py-2 text-start shadow-lg shadow-black rounded-lg mb-2 border-2 border-black'
									>
										<p className='text-lg font-bold text-black w-11/12 text-center border-b-2 border-black'>Extra Image {inputNumber}</p>
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
				<div className='flex flex-col items-center justify-start w-full max-h-124 hover:bg-zinc-500 bg-gray-600 border-l-2 border-white rounded-r-xl'>
					{/* Right Container */}
					<p className='text-xl font-bold text-gray-100 text-center w-full border-b-2 border-white py-3 mb-4'>Add Titles and Contents</p>
					<div className='flex flex-row items-center justify-center w-full h-fit mb-4 space-x-4 '>
						<AddCircleBtn onClick={handleTitleContentInputs} />
						<p className='text-xl  text-white font-bold w-fit '>Add</p>
						<MinusCircleBtn onClick={handleTitleContentInputsRemove} />

						<p className='text-xl  text-white font-bold w-fit'>Remove</p>
					</div>
					<div className='flex flex-col items-center justify-start w-full h-104 overscroll-y-auto overflow-y-scroll grow-0'>
						{contentInputs.length >= 1 ? (
							<div className='flex flex-col  w-full h-fit  px-4'>
								{contentInputs.map((inputNumber) => (
									<div
										key={inputNumber}
										className='flex flex-col items-center justify-center w-full h-fit mb-2 space-y-1 border-2 bg-zinc-300 border-zinc-900 pb-4 text-start shadow-lg shadow-black rounded-lg px-2'
									>
										<p className='text-lg font-bold text-black text-center w-full '>Content Title {inputNumber}</p>
										<input
											onChange={(e) => setContentTitle(e.target.value)}
											className='w-96 h-fit focus:outline-4 focus:outline-blue-500 shadow-md shadow-black rounded-lg'
											type='text'
											name={`contentTitle${inputNumber}`}
										/>
										<p className='text-lg font-bold text-black text-center w-full'>Content {inputNumber}</p>
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
			<div className='flex flex-row w-full justify-center items-center py-10'>
				<button
					onClick={handleUpload}
					className=' border-4 border-gray-700 rounded-lg text-xl shadow-lg shadow-black text-white font-bold px-8 py-4 hover:bg-zinc-500 bg-gray-600 hover:shadow-blue-400'
				>
					Upload
				</button>
			</div>
		</div>
	);
};

export default AdminBlog;
