import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import hourGlass from "../../../../assets/iconsAnimated/hourGlass.svg";
import ScienceOfSkinAwardsCategoriesArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/scienceOfSkinAwardsCategoriesArray";
import scienceOfSkinAwardTemplate from "../../../../assets/images/logos/scienceOfSkinAwardTemplate.svg";
import productOne from "../../../../assets/images/logos/productOne.png";
import html2canvas from "html2canvas";
import water from "../../../../assets/images/logos/water.jpg";
import CircleCheckIcon from "../../../components/CircleCheckIcon";
import isURL from "validator/lib/isURL";
import AdjustImageButtons from "./AdjustImageButtons";
const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		success: false,
		successMessage: "",
		awardImageApproved: false,
		awardImage: null,
		finalImageApproved: false,
		finalImage: null,
	});

	const [formState, setFormState] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		productName: "",
		productDescription: "",
		productLink: "",
		podcastLink: "",
		brandImage: null,
		productImage: null,
		images: [],
		imageUrls: [],
		awardImage: null,
	});

	// const resetForm = () => {
	// 	setFormState({
	// 		year: "",
	// 		category: "",
	// 		brandName: "",
	// 		brandDescription: "",
	// 		productName: "",
	// 		productDescription: "",
	// 		productLink: "",
	// 		podcastLink: "",
	// 		brandLogo: null,
	// 		productImage: null,
	// 		images: [],
	// 		imageUrls: [],
	// 		awardImage: [],
	// 	});
	// };

	// useEffect(() => {
	// 	resetForm();
	// }, []);

	// const handleUrlChange = (value) => {
	// 	e.preventDefault();
	// 	if (isURL(value)) {
	// 		console.log("Valid URL");
	// 	} else {
	// 		console.log("Invalid URL");
	// 	}
	// 	return value;
	// };

	const handleFormSubmit = async () => {
		try {
			setState({ ...state, uploading: true });
			const colRef = collection(getFirestore(), "scienceOfSkinAwards");
			await addDoc(colRef, {
				uploadDate: new Date(),
				year: formState.year,
				category: formState.category,
				brandName: formState.brandName,
				brandDescription: formState.brandDescription,
				productName: formState.productName,
				productDescription: formState.productDescription,
				productLink: formState.productLink,
				podcastLink: formState.podcastLink,
				images: formState.imageUrls,
				id: v4(),
			});
			setTimeout(() => {
				setState({ ...state, uploading: false });
			}, 3000);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const imageDownloadUrl = async () => {
			try {
				const urls = [];
				const images = formState.images;

				for (let i = 0; i < images.length; i++) {
					// Fixed the loop condition
					const image = images[i];
					const storageRef = ref(storage, `scienceOfSkinAwards/${image.name}`);
					await uploadBytes(storageRef, image.image);
					const url = await getDownloadURL(storageRef);
					urls.push(url);
				}
				setFormState({ ...formState, imageUrls: urls });
				// Do something with the URLs, e.g., set them in the state or call another function
			} catch (error) {
				console.error(error);
			}
		};

		imageDownloadUrl();
	}, [formState.images]);

	const yearList = () => {
		let years = [];
		const currentYear = new Date().getFullYear();
		for (let i = 2018; i < currentYear; i++) {
			years.push(i);
		}
		return years;
	};

	const handleImageOnChange = async (e) => {
		e.preventDefault();
		const newImage = e.target.files[0]; // Access the first file in the FileList
		const name = e.target.name;
		if (newImage) {
			const imageUrl = URL.createObjectURL(newImage);
			setFormState({
				...formState,
				images: [
					...formState.images,
					{
						name: name,
						image: newImage,
						imageUrl: imageUrl,
					},
				],
			});
		} else {
			console.error("No file selected");
		}
	};
	const handleImageConvert = async () => {
		const elementToCapture = document.getElementById("html2Image");
		html2canvas(elementToCapture).then((canvas) => {
			const imageDataURL = canvas.toDataURL("image/png");
			const downloadLink = document.createElement("a");
			downloadLink.href = imageDataURL;
			downloadLink.download = "captured-image.png";
			console.log(imageDataURL);
			// Trigger a click event to download the image
			downloadLink.click();
		});
	};
	// This is the start of adding an image alignment tool
	const [selectedElement, setSelectedElement] = useState(null);
	const [activeImage, setActiveImage] = useState(null);

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	const [position, setPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleDirection = (name) => {
		if (name === "up") {
			setPosition({ ...position, y: position.y - 10 });
		} else if (name === "down") {
			setPosition({ ...position, y: position.y + 10 });
		} else if (name === "left") {
			setPosition({ ...position, x: position.x - 10 });
		} else if (name === "right") {
			setPosition({ ...position, x: position.x + 10 });
		}
	};

	return (
		<div className='flex w-full h-full justify-center bg-zinc-700 py-6 px-12 rounded-lg  space-x-6 mx-auto my-8 shadow-xl shadow-gray-500 '>
			<div className='flex flex-col items-center justify-start w-fit h-fit  py-6 px-8 space-y-2 '>
				{state.uploading ? (
					<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-10 top-0 left-0'>
						<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
							<h1 className='w-full text-4xl font-bold animate-pulse text-white text-center '>
								Uploading... <img src={hourGlass} className='w-32 h-32 mx-auto' />
							</h1>
						</div>
					</div>
				) : (
					""
				)}

				<div className='group'>
					<h1 className='text-2xl text-center h-12 w-full group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
					<select
						onChange={(e) => setFormState({ ...formState, year: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{yearList().map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
				</div>
				<div className='group'>
					<h1 className='text-2xl text-center h-12 w-full group-hover:text-blue-500 group-hover:font-bold text-white'>Select Category</h1>
					<select
						onChange={(e) => setFormState({ ...formState, category: e.target.value })}
						className='w-48 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
					>
						{ScienceOfSkinAwardsCategoriesArray.map((year, index) => {
							return (
								<option key={index} value={year}>
									{year}
								</option>
							);
						})}
					</select>
				</div>
				<div className='flex flex-col items-center justify-start w-fit h-fit  py-6 px-8 space-y-8'>
					<div className='flex flex-col w-fit h-fit items-center justify-center group '>
						<h1 className='text-2xl  text-center h-fit w-full text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
						<input
							onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
							className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='flex flex-col w-fit h-fit items-center justify-center group'>
						{" "}
						<h1 className='text-2xl group-hover:font-bold text-center h-fit w-full text-white group-hover:text-blue-400 '>Brand Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
							className='w-72 h-24 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='flex flex-col w-fit h-fit items-center justify-center group'>
						{" "}
						<h1 className='text-2xl text-center h-fit w-full text-white group-hover:text-blue-500 group-hover:font-bold '>Product Name</h1>
						<input
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
							className='w-72 h-12 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='flex flex-col w-fit h-fit items-center justify-center group '>
						{" "}
						<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Product Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
							className='w-72 h-24 border-2 border-black rounded-md group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='flex flex-col w-fit h-fit items-center justify-center group '>
						<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Product Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, productLink: e.target.value })}
							className='w-72 h-12 border-2 border-black rounded-md group-hover:font-bold text-black shadow-lg hover:shadow-white focus:shadow-blue-400 focus:font-bold'
							type='url'
						/>
					</div>
					<div className='flex flex-col w-fit h-fit items-center justify-center group'>
						<h1 className='text-2xl group-hover:text-blue-500 group-hover:font-bold text-center h-fit w-full text-white '>Podcast Episode Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, podcastLink: e.target.value })}
							className='w-72 h-12 border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='url'
						/>
					</div>
				</div>
			</div>
			x
			<div className='flex flex-col items-center justify-evenly w-fit h-full  py-6 px-8 space-y-8'>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					<h1 className='text-2xl text-center h-fit w-full'>Brand Logo</h1>
					<input className='w-fit h-fit py-4 px-2 text-white' onChange={handleImageOnChange} type='file' />
					{formState.images.length > 0 && <img className='w-fit h-fit py-4 px-2 ' src={formState.images[0].imageUrl} />}
				</div>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					{" "}
					<h1 className='text-2xl text-center h-fit w-full text-white'>Product Image</h1>
					<input className='w-fit h-fit py-4 px-2 text-white' onChange={handleImageOnChange} type='file' />
					{formState.images.length > 1 && <img className='w-fit h-fit py-4 px-2' src={formState.images[1].imageUrl} />}
				</div>
			</div>
			<div className='flex flex-col items-center justify-evenly w-fit h-full  py-6 px-8 space-y-8'>
				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold'>
					<h1 className='text-2xl text-center h-fit w-full'>Science Of Skin Award Iamge</h1>
					<div onClick={(e) => handleImageSelection(e)} id='html2Image' className='w-112 h-112 bg-white relative object-center'>
						<img src={!state.awardImageApproved ? scienceOfSkinAwardTemplate : water} alt='backgroundImage' />
						<img id='productIamge' className='absolute bottom-0 right-0' src={formState.images.length > 0 && formState.images[0].imageUrl} />
						{/* Template Image */}
						<div className='flex flex-col justify-center items-center w-full h-full absolute bottom-0 ml-4 mb-4 rounded-full'>
							<img id='award' className='w-fit h-fit ' src={formState.awardImage ? formState.awardImage : ""} />
							<h1
								style={{
									left: 200 + position.x + "px",
									top: 325 + position.y + "px",
								}}
								id='awardYearText'
								className='text-2xl text-black font-bold absolute'
							>
								{formState.year}
							</h1>
						</div>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center text-white hover:text-blue-400 hover:font-semi-bold space-y-8'>
					<AdjustImageButtons setDirection={handleDirection} />
					<h1>Select </h1>
					<select>
						<option>Top Pick</option>
						<option>Best Value</option>
						<option>Best Newcomer</option>
					</select>
					<button
						onClick={handleImageConvert}
						className={classNames(
							!state.imageApproved
								? "bg-red-700 text-white font-semibold text-lg  px-4 py-2 w-fit  hover:text-white hover:bg-red-500 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white"
								: "bg-blue-600 text-white font-semibold text-lg  px-4 py-2 w-fit  hover:text-white hover:bg-blue-400 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white"
						)}
					>
						Approve Award Image
					</button>
					{state.awardImageApproved ? (
						<button
							onClick={handleImageConvert}
							type='submit'
							className={classNames(
								!state.templateApproved
									? "bg-red-700 text-white font-semibold text-lg  px-4 py-2 w-fit  hover:text-white hover:bg-red-500 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white"
									: "bg-blue-600 text-white font-semibold text-lg  px-4 py-2 w-fit  hover:text-white hover:bg-blue-400 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white"
							)}
						>
							Approve Top Pick Image
						</button>
					) : (
						""
					)}
					Would you like an image download button??????? Add image directional butttons
					{state.imageApproved ? (
						<button
							onClick={handleImageConvert}
							type='submit'
							className='bg-blue-600 text-white font-semibold text-lg  px-4 py-2 w-48  hover:text-white hover:bg-blue-400 hover:font-bold active:translate-y-2 rounded-lg shadow-lg hover:shadow-md shadow-gray-600 hover:shadow-white'
						>
							Submit
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
