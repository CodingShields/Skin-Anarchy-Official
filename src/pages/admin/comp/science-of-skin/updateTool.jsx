import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import ScienceOfSkinAwardsCategoriesArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/scienceOfSkinAwardsCategoriesArray";
import awardTemplateArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardTemplateArray";
import html2canvas from "html2canvas";
import isURL from "validator/lib/isURL";
import greenCheck from "../../../../assets/icons/greenCheck.svg";
import emptyCircle from "../../../../assets/icons/emptyCircle.svg";
import awardBGArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardBackgroundArray";
import ImageUpdateTools from "../../../components/ImageUpdateTools";
import "../../../../scienceOfSkin.css";
import { useImageStore } from "../../../../stateStore/imageToolStateStore";
import { useImageStoreActions } from "../../../../stateStore/imageToolStateStore";
import SideBarHideBtn from "../../../components/buttons/SideBarHideBtn.jsx";
const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		success: false,
		successMessage: "",
		sideBarHide: true,
	});
	const resetForm = useImageStore((state) => state.actions.resetForm);
	const previewLargeImage = useImageStore((state) => state.previewLargeImage);
	const fontColor = useImageStore((state) => state.fontColor);
	const fontSize = useImageStore((state) => state.fontSize);
	const fontFamily = useImageStore((state) => state.fontFamily);
	const fontStyle = useImageStore((state) => state.fontStyle);
	const fontWeight = useImageStore((state) => state.fontWeight);
	const fontLetterSpacing = useImageStore((state) => state.fontLetterSpacing);
	const gridAlign = useImageStore((state) => state.gridAlign);
	const productImage = useImageStore((state) => state.productImage);
	const awardImage = useImageStore((state) => state.awardImage);
	const brandLogoImage = useImageStore((state) => state.brandLogoImage);
	const yearText = useImageStore((state) => state.yearText);
	const selectedImage = useImageStore((state) => state.selectedImage);
	const { setPreviewLargeImage } = useImageStoreActions((actions) => actions);
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
			{ id: 0, name: "Select Award Template", completed: false },
			{ id: 1, name: "Adjust Year Text", completed: false },
			{ id: 3, name: "Download and Check", completed: false },
			{ id: 4, name: "Set Background Image", completed: false },
			{ id: 5, name: "Adjust Product Image", completed: false },
			{ id: 6, name: "Download and Check Image", completed: false },
			{ id: 7, name: "Adjust Award Image", completed: false },
			{ id: 8, name: "Submit", completed: false },
		],
	});

	useEffect(() => {
		resetForm();
		setState({ ...state, sideBarHide: true });
	}, []);

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
		let years = ["Choose Year ..."];
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

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

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

	const handleSideBar = () => {
		setState({ ...state, sideBarHide: !state.sideBarHide });
	};

	useEffect(() => {
		if (previewLargeImage) {
			setState({ ...state, sideBarHide: false });
		}
	}, [previewLargeImage]);

	return (
		// Tab Window
		<div className='flex w-fit h-fit mx-auto '>
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
			<div className='flex flex-row w-fit h-fit bg-zinc-800 rounded-lg  shadow-xl shadow-gray-500 space-x-4 py-4 transition-all duration-500 ease-in-out'>
				{/* Left Container */}
				<div
					className={classNames(
						"transition-all ease-in-out duration-50 m-0",
						state.sideBarHide
							? "w-fit flex flex-col h-fit items-start justify-center text-xl  space-y-2 pl-4 scale-100 duration-500 ease-in-out"
							: "duration-500 w-0 h-fit ease-in-out scale-0"
					)}
				>
					<div className='group w-1/2 flex flex-col'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Select Year</h1>
						<select
							onChange={(e) => setFormState({ ...formState, year: e.target.value })}
							className='border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
						>
							{yearList().map((year, index) => {
								return (
									<option defaultPlaceholder='Select Year' key={index[1]} value={year}>
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
				<div className=' my-auto mx-0  w-fit h-fit text-white group group-hover:scale-115 hover:cursor-pointer'>
					<SideBarHideBtn onClick={handleSideBar} />
				</div>
				{/* Middle Container */}
				<div
					className={classNames(
						formState.brandLogoImage.length === 0 && formState.productImage.length === 0
							? "w-0 p-0 m-0 h-0 hidden collapse"
							: "flex flex-col w-full h-full justify-center items-center text-xl space-y-2 m-0"
					)}
				>
					{formState.brandLogoImage.length > 0 && (
						<div className='hover:border-2 hover:border-white'>
							<h1 className='text-center w-full text-2xl text-white underline'>Brand Logo Preview</h1>
							<img className='w-fit h-96 ' src={formState.brandLogoImage[1].imageUrl} />
						</div>
					)}
					{formState.productImage.length > 0 && (
						<div className='hover:border-2 hover:border-white w-fit'>
							<h1 className='text-center w-full text-2xl text-white underline'>Product Preview</h1>
							<img className='w-fit h-96 mx-auto ' src={formState.productImage[1].imageUrl} />
						</div>
					)}
				</div>
				{/* Right Container */}
				<div className=' flex flex-col w-fit h-fit items-center justify-center text-xl text-center text-white p-0 m-0 my-auto'>
					<h1 className='text-center w-full text-2xl font-semibold pb-4 underline'>Science Of Skin Award Image</h1>
					<div
						id='html2Image'
						className={classNames(
							"w-112 h-112 bg-white relative transition-all duration-400 ease-in-out rounded-2xl ",
							previewLargeImage && "scale-175  shadow-black shadow-2xl -translate-x-32 mr-12 "
						)}
					>
						<div className={classNames(gridAlign ? "w-1 h-full absolute left-1/2 bg-red-400" : "hidden")}></div>
						<div className={classNames(gridAlign ? "w-full h-1 absolute left-0 top-1/2 bg-red-400" : "hidden")}></div>
						{/* Award Image Background */}
						{formState.stepsToCompletion >= 3 && <img src={selectedBackground} className='w-full h-full' />}
						{/* Award Iamge */}
						<img src={formState.selectedAwardTemplate} className='w-full h-full' />
						{/* Product Image */}
						{formState.stepsToCompletion >= 4 && (
							<img
								id='productImage'
								className='absolute '
								style={{
									left: productImage.x + "px",
									top: productImage.y + "px",
								}}
								src={formState.productImage[1].imageUrl}
							/>
						)}
						<div className='flex flex-col justify-center items-center w-full h-full absolute bottom-0 ml-4 mb-4 rounded-full'>
							{!formState.stepsToCompletion === 0 && <img id='award' className='w-fit h-fit ' src={formState.awardImage} />}

							<h1
								style={{
									left: 200 + yearText.x + "px",
									top: 325 + yearText.y + "px",
								}}
								id='awardYearText'
								className='text-2xl text-black font-bold absolute'
							>
								<h1
									style={{
										color: fontColor,
										fontSize: fontSize + "px",
										fontFamily: fontFamily,
										fontStyle: fontStyle,
									}}
									className={`text-${fontColor} ${fontWeight} ${fontLetterSpacing}`}
								>
									{formState.year}
								</h1>
							</h1>
						</div>
					</div>

					<div className='flex flex-col w-fit items-center justify-center text-xl h-fit   hover:font-semi-bold  '>
						<button
							type='submit'
							className={classNames(
								"mx-auto shadow-black shadow-xl bottom-0 bg-red-500 whitespace-nowrap text-white text-lg px-4 py-2 w-64 rounded-md hover:bg-blue-400 hover:font-bold active:translate-y-2 mt-2 ease-in-out transition-all active:delay-200 focus:duration-400",
								previewLargeImage && "translate-y-40 -translate-x-24"
							)}
							onClick={handleCompletionSteps}
							name={formState.stepsArr[formState.stepsToCompletion].name}
							value={formState.stepsArr[formState.stepsToCompletion].id}
						>
							{formState.stepsArr[formState.stepsToCompletion].name}
						</button>
					</div>
				</div>
				<div className='flex w-fit h-fit items-center justify-center m-0 my-auto'>
					<ImageUpdateTools />{" "}
				</div>

				<div className='flex flex-col w-fit h-fit justify-center items-center my-auto text-xl  text-white px-4'>
					<div className='w-full border-b-2 border-white mb-2'>
						<h1 className='text-white text-2xl font-semibold text-center w-full h-full my-auto'>CheckList</h1>
					</div>
					{formState.stepsArr.map((item, index) => {
						return (
							<div key={index} className='flex flex-row w-max px-12 h-full  '>
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
