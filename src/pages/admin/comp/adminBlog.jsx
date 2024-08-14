import React, { useEffect, useState, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import { imageDownloadUrl, formatDate } from "../../../utilities/utilities";
import AddCircleBtn from "../../components/buttons/AddCircleBtn";
import MinusCircleBtn from "../../components/buttons/MinusCircleBtn";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import XCirlceIcon from "@heroicons/react/24/solid/XCircleIcon";
import WorkingModal from "../../components/WorkingModal";
import BlogEditor from "./blog/BlogEditor";
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
	});

	const [imageInputs, setImageInputs] = useState([1]);

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
			blogContent: "",
		});
	};

	const handleUpload = async (e) => {
		e.preventDefault();
		try {
			const colRef = collection(getFirestore(), "blogData");
			console.log(colRef);
			await addDoc(colRef, {
				date: blogData.date,
				title: blogData.title,
				author: blogData.author,
				podcastUrl: blogData.podcastUrl,
				tags: blogData.tags,
				blog: blogData.blogContent,
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
	const handleTitleImageOnChange = async (e) => {
		e.preventDefault();
		setState({ ...state, loading: true });
		const newImage = e.target.files[0];
		try {
			const imageUrl = await imageDownloadUrl(newImage);
			setBlogData({ ...blogData, titleImage: imageUrl });
			setState({ ...state, loading: false });
		} catch (error) {
			console.error("Error uploading image:", error);
			setState({ ...state, loading: false, error: true, message: error.message });
		}
	};

	const handleImageUploadOnchange = async (e) => {
		e.preventDefault();
		setState({ ...state, loading: true });
		const newImage = e.target.files[0];
		try {
			const imageUrl = await imageDownloadUrl(newImage);
			setBlogData({
				...blogData,
				images: [...blogData.images, imageUrl],
			});
			setState({ ...state, loading: false });
		} catch (error) {
			console.error("Error uploading image:", error);
			setState({ ...state, loading: false, error: true, message: error.message });
		}
	};

	const handleRestClick = () => {
		initializeState();
	};

	const handleImageRemove = (e, index) => {
		const newImages = [...blogData.images];
		newImages.splice(index, 1);
		setBlogData({ ...blogData, images: newImages });
	};

	const handleBlogSubmission = (blog) => {
		console.log(blog);
		setBlogData({ ...blogData, blogContent: blog });
	};

	return (
		<div className='w-fit h-fit mx-auto space-x-12'>
			<h1 className='text-3xl font-bold text-red-500 mb-2 text-center py-2'>This Tool is not active</h1>

			{/* <WorkingModal open={state.loading} />
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
			<div className='w-full h-fit flex-row flex justify-around'>
				<div className='grid grid-cols-1 w-fit h-[950px] mx-auto justify-between bg-char-900 p-4  overflow-y-scroll'>
					<div className='w-fit h-fit mx-auto'>
						<div className=' h-fit w-full   pb-4 grid grid-cols-1 text-right gap-2'>
							<p className='text-sm text-white  uppercase font-semibold  w-fit h-fit '>BlogPost Date</p>
							<input
								onChange={(e) => setBlogData({ ...blogData, date: formatDate(e.target.value) })}
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
							<p className='text-sm text-white  uppercase font-semibold  text-center w-full h-fit py-2px'>Blog Title Image</p>

							{blogData.titleImage && blogData.titleImage && <img src={blogData.titleImage} className='w-36 h-auto  py-4 px-2 mx-auto ' />}
							<input
								onChange={handleTitleImageOnChange}
								className='w-full h-fit bg-gray-200 focus:outline-1 focus:outline-blue-500  py-2 px-8 text-sm text-center hover:cursor-pointer '
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
													{blogData.images.length > 0 ? (
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
												{blogData.images[index] && <img src={blogData.images[index]} className='w-36 h-auto py-2 px-6' />}
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
					<div className='w-3/4 mx-auto mt-2'>
						<p className='text-center text-white'>Image List</p>
						<p className='text-white text-center'> Be sure to copy image URL when adding to the blog editor</p>
					</div>
					<div className='w-full mx-auto border border-white py-2'>
						<h1 className='text-center text-white'>Title Image</h1>
						{blogData.titleImage && blogData.titleImage && (
							<div title='titleImage'>
								<div className='relative w-full h-full flex justify-center animate-fadeOut z-60'></div>
								<img src={blogData.titleImage} className='w-48 h-auto mx-auto' />
								<p className='text-white text-center px-4 my-2'>{blogData.titleImage}</p>
							</div>
						)}
					</div>
					<div className='space-y-2'>
						{blogData.images.map((image, index) => (
							<div key={index}>
								<img src={image} className='w-48 h-auto mx-auto hover:border' />
								<p className='text-white text-center px-4 my-2'>{image}</p>
							</div>
						))}
					</div>
				</div>
				<div className='w-fit h-full flex flex-col'>
					<BlogEditor blogSubmission={handleBlogSubmission} />
				</div>
			</div> */}
		</div>
	);
};

export default AdminBlog;
