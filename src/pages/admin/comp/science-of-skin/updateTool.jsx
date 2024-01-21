import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import ScienceOfSkinAwardsCategoriesArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/scienceOfSkinAwardsCategoriesArray";
import awardTemplateArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardTemplateArray";
import html2canvas from "html2canvas";
import isURL from "validator/lib/isURL";
import AdjustImageButtons from "../../../components/buttons/AdjustImageButtons";
import greenCheck from "../../../../assets/icons/greenCheck.svg";
import emptyCircle from "../../../../assets/icons/emptyCircle.svg";
import awardBGArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardBackgroundArray";
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
		finalImage: null,
		selectedBackground: awardBGArray[0].image,
		selectedAwardTemplate: awardTemplateArray[0].image,
		backgroundImageArray: [awardBGArray],
		awardTemplateArray: [awardTemplateArray],
		stepsToCompletion: 0,
		stepsArr: [
			{ id: 0, name: "Set Background Image", completed: false },
			{ id: 1, name: "Adjust Year Text", completed: false },
			{ id: 2, name: "Download and Check Image", completed: false },
			{ id: 3, name: "Adjust Award Image", completed: false },
			{ id: 4, name: "Adjust Product Image", completed: false },
			{ id: 5, name: "Submit", completed: false },
		],
	});

	const resetForm = () => {
		setFormState({
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
			stepsArr: [
				{ id: 0, name: "Select Award Template", completed: false },
				{ id: 0, name: "Set Background Image", completed: false },
				{ id: 1, name: "Adjust Product Image", completed: false },
				{ id: 1, name: "Adjust Year Text", completed: false },
				{ id: 2, name: "Download and Check Image", completed: false },
				{ id: 3, name: "Adjust Award Image", completed: false },
				{ id: 4, name: "Adjust Product Image", completed: false },
				{ id: 5, name: "Submit", completed: false },
			],
		});
	};

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

	const handleImageUploadOnChange = async (e) => {
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
	const [selectedImage, setSelectedImage] = useState(null);
	const [activeImage, setActiveImage] = useState(null);

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}
	const [position, setPosition] = useState({
		productImage: { x: 0, y: 0 },
		awardImage: { x: 0, y: 0 },
		brandLogoImage: { x: 0, y: 0 },
		yearText: { x: 0, y: 0 },
	});

	const handleDirection = (name) => {
		console.log(name);

		if (name === "up") {
			setPosition({
				...position,
				[selectedImage]: { ...position[selectedImage], y: position[selectedImage].y - 2.5 },
			});
		} else if (name === "down") {
			setPosition({
				...position,
				[selectedImage]: { ...position[selectedImage], y: position[selectedImage].y + 2.5 },
			});
		} else if (name === "left") {
			setPosition({
				...position,
				[selectedImage]: { ...position[selectedImage], x: position[selectedImage].x - 2.5 },
			});
		} else if (name === "right") {
			setPosition({
				...position,
				[selectedImage]: { ...position[selectedImage], x: position[selectedImage].x + 2.5 },
			});
		}
	};

	const handleImageChange = (e) => {
		e.preventDefault();
		const image = e.target.name;
		const index = e.target.value;
		console.log(image);
		setFormState({ ...formState, selectedBackground: awardBGArray[index].image });
	};
	const handleCompletionSteps = (e) => {
		const valueId = e.target.value;
		if (valueId === 5) {
			resetForm();
		} else {
			setFormState({
				...formState,
				stepsToCompletion: formState.stepsToCompletion + 1,
				stepsArr: formState.stepsArr.map((item, id) => {
					if (id === formState.stepsToCompletion) {
						return { ...item, completed: true };
					} else {
						return item;
					}
				}),
			});
		}
	};

	const handleImageSelection = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setSelectedImage(value);
		console.log(value);
	};
	console.log(formState.productImage);
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
			<div className='flex flex-row w-full h-fit bg-zinc-800 rounded-lg  shadow-xl shadow-gray-500 space-x-8 py-4'>
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
						<input name='brandLogoImage' className='text-white truncate mx-auto' onChange={handleImageUploadOnChange} type='file' />
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center p-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Product Image</h1>
						<input className='text-white' name='productImage' onChange={handleImageUploadOnChange} type='file' />
					</div>
				</div>

				{/* Middle Container */}
				<div className='flex flex-col w-full h-full justify-between text-xl space-y-2 px-4 my-auto'>
					{formState.brandLogoImage.length > 0 && (
						<div className='hover:border-2 hover:border-white'>
							<h1 className='text-center w-full text-2xl text-white underline'>Brand Logo Preview</h1>
							<img className='w-fit h-96 ' src={formState.brandLogoImage[1].imageUrl} />
						</div>
					)}
					{formState.productImage.length > 0 && (
						<div className='hover:border-2 hover:border-white'>
							<h1 className='text-center w-full text-2xl text-white underline'>Product Preview</h1>
							<img className='w-fit h-96 mx-auto ' src={formState.productImage[1].imageUrl} />
						</div>
					)}
				</div>

				{/* Right Container */}
				<div className=' flex flex-col w-fit h-fit items-center justify-center text-xl text-center text-white px-4'>
					<h1 className='text-center w-full text-2xl font-semibold pb-4 underline'>Science Of Skin Award Image</h1>
					<div
						// onClick={(e) => handleImageSelection(e)}
						id='html2Image'
						className='w-112 h-112 bg-white relative '
					>
						<div className='w-1 h-full absolute left-1/2 bg-red-400'></div>
						<div className='w-full h-1 absolute left-0 top-1/2 bg-red-400'></div>
						{/* Award Image Background */}

						<img src={formState.selectedBackground} className='w-full h-full' />
						{/* Template Award Image */}
						{formState.stepsToCompletion >= 3 && (
							<img
								id='productImage'
								className='absolute '
								style={{
									left: position.productImage.x + "px",
									top: position.productImage.y + "px",
								}}
								src={formState.productImage[1].imageUrl}
							/>
						)}
						<div className='flex flex-col justify-center items-center w-full h-full absolute bottom-0 ml-4 mb-4 rounded-full'>
							{!formState.stepsToCompletion === 5 && <img id='award' className='w-fit h-fit ' src={formState.awardImage} />}

							<h1
								style={{
									left: 200 + position.yearText.x + "px",
									top: 325 + position.yearText.y + "px",
								}}
								id='awardYearText'
								className='text-2xl text-black font-bold absolute'
							>
								{formState.year}
							</h1>
						</div>
					</div>

					<div className='flex flex-col w-full items-center justify-center text-xl h-fit   hover:font-semi-bold  '>
						<div className='bg-gray-700 px-4 py-2 mt-2 rounded-xl border-2 border-white shadow-gray-500 hover:shadow-lg'>
							<AdjustImageButtons setDirection={handleDirection} />
						</div>
						<div className='flex flex-row w-full h-fit justify-center items-center mt-2'>
							<div className='w-full space-y-2'>
								<h1 className='text-white whitespace-nowrap'>Select BackGround</h1>
								<select onChange={handleImageChange} className='text-black'>
									{awardBGArray.map((item, index) => {
										return (
											<option key={index} value={index}>
												{item.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className='w-full space-y-2'>
								<h1 className='text-white'>Select BackGround</h1>
								<select onChange={handleImageChange} className='text-black'>
									{awardTemplateArray.map((item, index) => {
										return (
											<option key={index} name='awardTemp' value={index}>
												{item.name}
											</option>
										);
									})}
								</select>
							</div>
							<div className='w-fulL space-y-2'>
								<h1 className='text-white whitespace-nowrap'>Select Image To Adjust</h1>
								<select onChange={handleImageSelection} className='text-black'>
									<option value='yearText'>Year Text</option>
									<option value='awardImage'>Award</option>
									<option value='brandLogoImage'>Brand Logo</option>
									<option value='productImage'>Product Image</option>
								</select>
							</div>
						</div>

						<button
							type='submit'
							className='mx-auto bottom-0 bg-red-700 whitespace-nowrap text-white text-lg px-4 py-2 w-64 rounded-md hover:bg-blue-400 hover:font-bold active:translate-y-2 mt-2'
							onClick={handleCompletionSteps}
							name={formState.stepsArr[formState.stepsToCompletion].name}
							value={formState.stepsArr[formState.stepsToCompletion].id}
						>
							{formState.stepsArr[formState.stepsToCompletion].name}
						</button>
					</div>
				</div>
				<div className='flex flex-col w-full h-full items-end justify-center text-xl my-auto text-white px-4'>
					{formState.stepsArr.map((item, index) => {
						return (
							<div key={index} className='flex flex-row w-max px-12 h-full m-auto '>
								<div>
									{item.completed ? (
										<div className='h-fit w-fit absolute'>
											<img className='h-16 w-16 stroke-white ' src={greenCheck} />{" "}
										</div>
									) : (
										""
									)}
									<img src={emptyCircle} className='h-16 w-16 stroke-white ' />
								</div>
								<h1 className='text-white text-start w-48 whitespace-nowrap my-auto  '>{item.name}</h1>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
