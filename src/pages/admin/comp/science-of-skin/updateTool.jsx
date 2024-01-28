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
import { useRenderStepStore } from "../../../../stateStore/useStepStore.js";
import ErrorModal from "../../../components/errorModal.jsx";
import WorkingModal from "../../../components/WorkingModal.jsx";
import noImageAwardSelectedText from "../../../../assets/iconsAnimated/noImageAwardSelectedText.svg";
import UrlLinkCheck from "../../../components/UrlLinkCheck.jsx";
import ValidateEmptyInputElements from "../../../components/ValidateEmptyInputElements.jsx";
const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		productUrl: true,
		podcastUrl: true,
		success: false,
		successMessage: "",
		sideBarHide: true,
		selectedAwardTemplate: null,
		completedForm: true,
	});
	const currentStep = useRenderStepStore((state) => state.step);
	const increaseStep = useRenderStepStore((state) => state.increaseStep);
	const decreaseStep = useRenderStepStore((state) => state.decreaseStep);
	const resetStep = useRenderStepStore((state) => state.resetStep);
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
	const yearText = useImageStore((state) => state.yearText);
	const selectedAwardTemplate = useImageStore((state) => state.selectedAwardTemplate);
	const selectedBackgroundTemplate = useImageStore((state) => state.selectedBackgroundTemplate);
	const [formState, setFormState] = useState({
		year: "",
		category: "",
		brandName: "",
		brandDescription: "",
		brandLogoImage: [],
		productName: "",
		productDescription: "",
		productImage: [],
		productUrl: "",
		podcastUrl: "",
		images: [],
		imageUrls: [],
		awardImage: null,
		finalImage: null,
		selectedBackground: awardBGArray[0].image,
		selectedAwardTemplate: awardTemplateArray[0].image,
		backgroundImageArray: [awardBGArray],
		awardTemplateArray: [awardTemplateArray],
		stepsArr: [
			{ id: 0, name: "Set Award Template", completed: false },
			{ id: 1, name: "Set Style and Adjust Year Text", completed: false },
			{ id: 2, name: "Download and Check Award Image", completed: false },
			{ id: 3, name: "Award Image Approval", completed: false },
			{ id: 4, name: "Set Background Image", completed: false },
			{ id: 5, name: "Adjust Product Image", completed: false },
			{ id: 6, name: "Download and Check Image", completed: false },
			{ id: 7, name: "Adjust Award Image", completed: false },
			{ id: 8, name: "Submit", completed: false },
		],
	});

	// useEffect(() => {
	// 	resetForm();
	// 	resetStep();
	// 	setState({ ...state, sideBarHide: true });
	// }, []);

	const validateUrl = (url) => {
		const regEx =
			/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
		return regEx.test(url);
	};

	const handleUrlCheck = (e) => {
		const urlName = e.target.value;
		let url;

		if (urlName === formState.productUrl) {
			url = formState.productUrl;
		} else if (urlName === formState.podcastUrl) {
			url = formState.podcastUrl;
		} else {
			url = null; // or any default value you prefer
		}

		if (validateUrl(url)) {
			console.log("Valid URL");
			setState({
				...state,
				[urlName]: false,
			});
			setFormState({
				...formState,
				[urlName]: urlName,
			});
		} else {
			console.log("Invalid URL");
			setState({
				...state,
				[urlName]: true,
			});
			setFormState({
				...formState,
				[urlName]: "",
			});
		}
	};

	// const handleFormSubmit = async () => {
	// 	try {
	// 		setState({ ...state, uploading: true });
	// 		const colRef = collection(getFirestore(), "scienceOfSkinAwards");
	// 		await addDoc(colRef, {
	// 			uploadDate: new Date(),
	// 			year: formState.year,
	// 			category: formState.category,
	// 			brandName: formState.brandName,
	// 			brandDescription: formState.brandDescription,
	// 			productName: formState.productName,
	// 			productDescription: formState.productDescription,
	// 			productLink: formState.productLink,
	// 			podcastLink: formState.podcastLink,
	// 			images: formState.imageUrls,
	// 			id: v4(),
	// 		});
	// 		setTimeout(() => {
	// 			setState({ ...state, uploading: false });
	// 		}, 3000);
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// };

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
		const newImage = e.target.files[0];
		console.log(newImage); // Access the first file in the FileList
		const name = e.target.name;
		console.log(name);
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
			downloadLink.click();
			console.log("test");
		});
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	function runErrorTimer() {
		setTimeout(() => {
			setState({ ...state, error: false, errorMessage: "" });
		}, 3000);
	}

	const handleCompletionSteps = async (e) => {
		e.preventDefault();
		if ((currentStep === 0 && formState.selectedAwardTemplate === null) || formState.selectedAwardTemplate === undefined) {
			setState({ ...state, errorMessage: "Missing Data: Select An Award Template", error: true });
			runErrorTimer();
		} else if (currentStep === 1 && formState.year === "") {
			setState({ ...state, errorMessage: "Missing Data: Select A Year", error: true });
			runErrorTimer();
		} else if (currentStep === 3) {
			setState({ ...state, uploading: true });
			console.log(state.uploading, "state.uploading");
			await handleImageConvert();
			setState({ ...state, uploading: false });
			console.log(test, "test");
		} else if (currentStep === 9) {
			resetForm();
		} else {
			increaseStep();
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

	useEffect(() => {
		const newImage = awardTemplateArray.find((item) => {
			if (item.name === selectedAwardTemplate) {
				return item.image;
			}
		});
		setState({ loading: true });
		setFormState({ ...formState, selectedAwardTemplate: newImage });
		setState({ loading: false });
		console.log(newImage, "newImage");
	}, [selectedAwardTemplate]);

	const handleConfirmFormDataClick = (e) => {
		e.preventDefault();
		const dataCheck = () => {
			for (let i = 0; i < formState.length; i++) {
				let element = formState.elements[i];
				if (element.value) return false;
			}
			return true;
		};
		if (!dataCheck()) {
			setState({ ...state, errorMessage: "Missing Data: Please Fill Out The Form", error: true });
			runErrorTimer();
		} else {
			setState({ ...state, completedForm: true, sideBarHide: true });
		}
	};
	return (
		<div className='size-full	pb-10 grow-0'>
			{state.error ? <ErrorModal errorMessage={state.errorMessage} /> : null}
			{state.uploading ? <WorkingModal /> : null}
			{/* Main Container */}
			<div className='flex flex-row w-fit h-fit bg-zinc-800 rounded-lg  shadow-xl shadow-gray-500 space-x-4 py-4 transition-all duration-500 ease-in-out my-0 pb-0 grow-0'>
				{/* Left Container */}
				<div
					className={classNames(
						"transition-all ease-in-out duration-50 m-0",
						!state.sideBarHide
							? "w-full flex flex-col h-fit items-start justify-center text-xl  space-y-2 pl-4 scale-100 duration-500 ease-in-out px-4 sm:text-sm"
							: "duration-500 w-0 h-fit ease-in-out scale-0"
					)}
				>
					<div className='w-full flex flex-col group'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Select Year</h1>

						<div className='group w-full flex flex-row'>
							<select
								onChange={(e) => setFormState({ ...formState, year: e.target.value })}
								className=' w-1/2 border-2 border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							>
								{yearList().map((year, index) => {
									return (
										<option className='text-center' key={index[1]} value={year}>
											{year}
										</option>
									);
								})}
							</select>
							<ValidateEmptyInputElements data={formState.year} />
						</div>
					</div>
					<div className='w-full flex flex-col group'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Select Product Category</h1>
						<div className='group w-full flex flex-row'>
							<select
								onChange={(e) => setFormState({ ...formState, category: e.target.value })}
								className='w-1/2 border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg hover:shadow-white focus:shadow-blue-400'
							>
								{ScienceOfSkinAwardsCategoriesArray.map((year, index) => {
									return (
										<option className='text-center' key={index} value={year}>
											{year}
										</option>
									);
								})}
							</select>
							<ValidateEmptyInputElements data={formState.category} />
						</div>
					</div>

					<div className='group w-full flex flex-col'>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Name</h1>
						<div className='flex flex-row'>
							<input
								spellCheck='true'
								onChange={(e) => setFormState({ ...formState, productName: e.target.value })}
								className='w-3/4 border-2  border-black rounded-md group-hover:text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400'
								type='text'
							/>
							<ValidateEmptyInputElements data={formState.productName} />
						</div>
					</div>

					<div className='group w-full flex flex-col'>
						{" "}
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white'>Product Description</h1>
						<div className='w-full flex flex-row'>
							<textarea
								spellCheck='true'
								onChange={(e) => setFormState({ ...formState, productDescription: e.target.value })}
								className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400 w-96 h-24'
								type='text'
							/>
							<ValidateEmptyInputElements data={formState.productDescription} />
						</div>
					</div>
					<div className='group w-full flex flex-col space-y-2 '>
						<h1 className=' group-hover:text-blue-500 group-hover:font-bold text-white '>Product URL Link</h1>
						<input
							id='productUrl'
							onChange={(e) => setFormState({ ...formState, productUrl: e.target.value })}
							className={classNames(
								"border-2 w-full h-12 rounded-md group-hover:font-bold text-black shadow-lg group-hover:shadow-white focus:shadow-blue-400 focus:font-bold",
								!state.productUrl ? "text-red-500" : "text-green-500 font-semibold"
							)}
							type='url'
						/>
						<div className='flex flex-row justify-between py-2'>
							<button
								value='productUrl'
								onClick={handleUrlCheck}
								className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
							>
								Check Link
							</button>
							<UrlLinkCheck urlError={state.productUrl} />
						</div>
					</div>
					<div className='group w-full flex flex-col space-y-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white'>Podcast Episode URL Link</h1>
						<input
							key='podcastUrl'
							onChange={(e) => setFormState({ ...formState, podcastUrl: e.target.value })}
							className={classNames(
								"w-full border-2 border-black rounded-md group-hover:text-blue-500  text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400",
								!state.podcastUrl ? "text-red-500" : "text-green-500 font-semibold "
							)}
							type='url'
						/>
						<div className='flex flex-row justify-between py-2'>
							<button
								value='podcastUrl'
								onClick={handleUrlCheck}
								className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
							>
								Check Link
							</button>
							<UrlLinkCheck urlError={state.podcastUrl} />
						</div>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className=' text-white group-hover:text-blue-500 group-hover:font-bold'>Brand Name </h1>
						<div className='w-full flex flex-row'>
							<input
								onChange={(e) => setFormState({ ...formState, brandName: e.target.value })}
								className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400'
								type='text'
							/>
							<ValidateEmptyInputElements data={formState.brandName} />
						</div>
					</div>
					<div className='group w-full flex flex-col'>
						<h1 className='group-hover:font-bold text-white group-hover:text-blue-400 '>Brand Description</h1>
						<div className='w-full flex flex-row'>
							<textarea
								spellCheck='true'
								onChange={(e) => setFormState({ ...formState, brandDescription: e.target.value })}
								className='w-full border-2 border-black rounded-md text-black group-hover:font-bold shadow-lg group-hover:shadow-white focus:shadow-blue-400 w-96 h-24'
								type='text'
							/>{" "}
							<ValidateEmptyInputElements data={formState.brandDescription} />
						</div>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white text-center flex flex-col justify-between w-full py-4 px-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Brand Logo</h1>

						<div className='w-full flex flex-row '>
							<input name='brandLogoImage' className='text-white truncate ' onChange={handleImageUploadOnChange} type='file' />
							<ValidateEmptyInputElements data={formState.brandLogoImage} />
						</div>
					</div>
					<div className='group border-2 border-gray-600 hover:border-2 hover:border-white  text-center w-full py-4 px-2'>
						<h1 className='group-hover:text-blue-500 group-hover:font-bold text-white text-2xl'>Product Image</h1>
						<div className='w-full flex flex-row '>
							<input className='text-white' name='productImage' onChange={handleImageUploadOnChange} type='file' />
							<ValidateEmptyInputElements data={formState.productImage} />
						</div>
					</div>
					<div className='flex flex-row justify-center items-center w-full h-fit text-xl text-center text-white py-2 m-0 my-auto'>
						<button
							onClick={handleConfirmFormDataClick}
							className='bg-blue-500 h-fit w-fit px-4 py-2 rounded-md text-black hover:shadow-white shadow-lg hover:bg-green-500 hover:text-white hover:front-semibold active:bg-blue-400 active:translate-y-2'
						>
							Confirm Form Data
						</button>
					</div>
				</div>
				<div
					className={
						state.completedForm === true ? " my-auto mx-0  w-fit h-fit my-auto text-white group group-hover:scale-115 hover:cursor-pointer grow-0" : "hidden"
					}
				>
					<SideBarHideBtn onClick={handleSideBar} />
				</div>
				{/* Uploaded Brand and Product Image Container*/}
				<div
					className={classNames(
						formState.brandLogoImage.length === 0 && formState.productImage.length === 0
							? "w-0 p-0 m-0 h-0 hidden collapse"
							: "w-full h-fit justify-center items-center text-xl space-y-2 m-0 grow-0"
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
				{/* Image Adjust Container*/}
				<div
					className={
						state.completedForm ? " flex flex-col w-fit h-fit items-center justify-center text-xl text-center text-white p-0 m-0 grow-0" : "hidden"
					}
				>
					<h1 className='text-center w-full text-2xl font-semibold pb-4 underline'>Science Of Skin Award Image</h1>
					<div
						id='html2Image'
						className={classNames(
							"w-112 h-112 bg-white relative transition-all duration-400 ease-in-out rounded-2xl ",
							previewLargeImage && "scale-175  shadow-black shadow-2xl -translate-x-32 mr-12 "
						)}
					>
						{!formState.selectedAwardTemplate ? <img src={noImageAwardSelectedText} className='h-fit w-full mx-auto' /> : null}
						<div className={classNames(gridAlign ? "w-1 h-full absolute left-1/2 bg-red-400" : "hidden")}></div>
						<div className={classNames(gridAlign ? "w-full h-1 absolute left-0 top-1/2 bg-red-400" : "hidden")}></div>
						{/* Award Image Background */}
						{currentStep >= 4 && <img src={selectedBackgroundTemplate} className='w-full h-full' />}
						{/* Award Image */}
						{formState.selectedAwardTemplate ? <img className='w-full h-full ' src={formState.selectedAwardTemplate.image} /> : ""}
						{/* Product Image */}
						{/* {formState.stepsToCompletion >= 4 && (
							<img
								id='productImage'
								className='absolute '
								style={{
									left: productImage.x + "px",
									top: productImage.y + "px",
								}}
								src={formState.productImage[1].imageUrl}
							/>
						)} */}
						<div className='flex flex-col justify-center items-center w-full h-full absolute bottom-0 ml-4 mb-4 rounded-full'>
							{!currentStep === 0 && <img id='award' className='w-fit h-fit ' src={formState.awardImage} />}

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

					<div className='flex flex-col w-fit items-center justify-center text-xl h-fit  space-y-4 hover:font-semi-bold grow-0 '>
						<button
							className={classNames(
								"mx-auto shadow-black shadow-xl bottom-0 bg-red-500 whitespace-nowrap text-white text-lg px-4 py-2 w-fit rounded-md hover:bg-blue-400 hover:font-bold active:translate-y-2 mt-2 ease-in-out transition-all active:delay-200 focus:duration-400",
								previewLargeImage && "translate-y-50 -translate-x-1/2 scale-150"
							)}
							onClick={handleCompletionSteps}
							name={formState.stepsArr[currentStep].name}
							value={formState.stepsArr[currentStep].id}
						>
							{formState.stepsArr[currentStep].name}
						</button>
						{currentStep === 4 || currentStep === 10 ? (
							<button className=' shadow-black shadow-xl  bg-red-500 whitespace-nowrap text-white text-lg px-4 py-2 w-fit rounded-md'>
								Approve Image
							</button>
						) : (
							""
						)}
					</div>
				</div>
				{/* <div className={state.completedForm ? "w-fit m-0 h-fit grow-0" : "hidden"}>
					<ImageUpdateTools />{" "}
				</div> */}

				<div
					className={classNames(state.completedForm ? "flex flex-col w-fit h-fit justify-center items-center text-xl  text-white px-4 grow-0" : "hidden")}
				>
					<div className='w-full border-b-2 border-white mb-2'>
						<h1 className='text-white text-2xl font-semibold text-center w-full h-fit '>CheckList</h1>
					</div>
					{/* {formState.stepsArr.map((item, index) => {
						return (
							<div key={index} className='flex flex-row w-max px-12 h-fit '>
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
					})} */}
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
