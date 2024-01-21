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
import AdjustImageButtons from "../../../components/buttons/AdjustImageButtons";
const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		success: false,
		successMessage: "",
	});

	const [formState, setFormState] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		brandLogoImage: [],
		productName: "",
		productDescription: "",
		productImage: [],
		productLink: "",
		podcastLink: "",
		images: [],
		imageUrls: [],
		awardImage: null,
		awardBG: [
			{
				name: "background1",
				selected: false,
			},
			{
				name: "background2",
				selected: false,
			},
			{
				name: "background3",
				selected: false,
			},
		],
		stepsToCompletion: 0,
		stepsToCompletionBtnText: ["Set Background Image", "Adjust Year Text", "Adjust Award Image", "Adjust Product Image", "Submit"],
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
				[name]: [{ files: newImage }, { imageUrl: imageUrl }],
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

	const handleBackgroundImageChange = (e) => {
		e.preventDefault();
		const selectedBG = e.target.value;
		setFormState({ ...formState, awardBG: selectedBG });
		console.log(selectedBG);
	};

	const handleCompletionSteps = () => {
		setFormState({ ...formState, stepsToCompletion: formState.stepsToCompletion + 1 });
	};

	return (
		// Tab Window
		<div className='flex w-full h-full '>
			{/* Error Modal */}
			{/* {state.uploading ? (
				<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-10 top-0 left-0'>
					<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
						<h1 className='w-full text-2xl font-bold animate-pulse text-white text-center '>
							Uploading... <img src={hourGlass} className='w-32 h-32 mx-auto' />
						</h1>
					</div>
				</div>
			) : (
				""
			)} */}

			{/* Main Container */}
			<div className='flex flex-row w-fit h-fit bg-zinc-800 rounded-lg  shadow-xl shadow-gray-500 space-x-8 py-4'>
				{/* Left Container */}
				<div className=' flex flex-col w-full h-fit items-start justify-center text-xl space-y-2 px-4'>
					<div className='group w-1/2 flex flex-col'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
						<select
							onChange={(e) => setFormState({ ...formState, year: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
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
					<div className='group w-3/4 flex flex-col'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Select Product Category</h1>
						<select
							onChange={(e) => setFormState({ ...formState, category: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
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

					<div className='group w-full flex flex-col'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Name</h1>
						<input
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
							className='border-2  border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>

					<div className='group w-full flex flex-col'>
						{" "}
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400 w-96 h-24'
							type='text'
						/>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, productLink: e.target.value })}
							className='border-2 border-black rounded-md group-hover:font-bold text-black shadow-lg hover:shadow-white focus:shadow-blue-400 focus:font-bold'
							type='url'
						/>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Podcast Episode Link</h1>
						<input
							onChange={(e) => setFormState({ ...formState, podcastLink: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='url'
						/>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className=' text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
						<input
							onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							type='text'
						/>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Brand Description</h1>
						<textarea
							spellCheck='true'
							onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
							className='border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400 w-96 h-24'
							type='text'
						/>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white text-center p-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Brand Logo</h1>
						<input name='brandLogoImage' className='text-white truncate mx-auto' onChange={handleImageOnChange} type='file' />
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center p-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Product Image</h1>
						<input className='text-white' name='productImage' onChange={handleImageOnChange} type='file' />
					</div>
				</div>

				{/* Middle Container */}
				<div className='flex flex-col w-full h-full justify-between text-xl space-y-2 px-4 my-auto'>
					{formState.brandLogoImage.length > 0 && (
						<img className='w-fit h-96 py-4 px-2 mx-auto hover:border-2 hover:border-white ' src={formState.brandLogoImage[1].imageUrl} />
					)}
					{formState.productImage.length > 0 && (
						<img className='w-fit h-96 py-4 px-2 mx-auto hover:border-2 hover:border-white' src={formState.productImage[1].imageUrl} />
					)}
				</div>

				{/* Right Container */}
				<div className=' flex flex-col w-fit h-fit items-start justify-center text-xl text-center text-white px-4'>
					<h1 className='text-center w-full text-2xl font-semibold pb-4 underline'>Science Of Skin Award Image</h1>
					<div onClick={(e) => handleImageSelection(e)} id='html2Image' className='w-112 h-112 bg-white relative object-center'>
						{/* Award Image Background */}
						<img src={!state.awardImageApproved ? scienceOfSkinAwardTemplate : water} />
						{/* Template Award Image */}
						<img id='productImage' className='absolute bottom-0 right-0' src={formState.images.length > 0 && formState.images[0].imageUrl} />
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

					<div className='flex flex-col w-full items-center justify-center text-xl h-fit   hover:font-semi-bold  '>
						<div className='bg-gray-700 px-4 py-2 mt-2 rounded-xl hover:border-2 hover:border-white shadow-gray-500 hover:shadow-lg'>
							<AdjustImageButtons setDirection={handleDirection} />
						</div>
						<div className='flex flex-row w-full h-fit justify-between items-center mt-2'>
							<div className='w-full space-y-2'>
								<h1 className='text-white'>Select BackGround</h1>
								<select onChange={(e) => handleBackgroundImageChange(e)} className='text-black'>
									<option value='background1'>Background</option>
									<option value='background2'>Background2</option>
									<option value='background3'>Background3</option>
								</select>
							</div>
							<div className='w-fulL space-y-2'>
								<h1 className='text-white whitespace-nowrap'>Select Image To Adjust</h1>
								<select className='text-black'>
									<option>Background</option>
									<option>Award</option>
									<option>Product</option>
								</select>
							</div>
						</div>

						<button
							type='submit'
							className='mx-auto bottom-0 bg-red-700 text-white text-lg px-4 py-2 w-64 rounded-md hover:bg-blue-400 hover:font-bold active:translate-y-2 mt-2'
							onClick={handleCompletionSteps}
						>
							{formState.stepsToCompletionBtnText[formState.stepsToCompletion]}
						</button>
					</div>
				</div>
				<div
				className="flex flex-col w-full h-full items-end justify-center text-xl my-auto text-white px-4"
				>
					{formState.stepsToCompletionBtnText.map((step, index) => {
						return (
							<div key={index} className='flex flex-row w-max px-2 h-full my-auto '>
								<CircleCheckIcon />
								<h1 className='text-white text-start w-48 whitespace-nowrap my-auto  '>{step}</h1>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
