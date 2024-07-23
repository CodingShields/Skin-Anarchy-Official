import { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc, getDoc, arrayRemove } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";
import awardTemplateArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardTemplateArray";
import html2canvas from "html2canvas";
import greenCheck from "../../../../assets/icons/greenCheck.svg";
import emptyCircle from "../../../../assets/icons/emptyCircle.svg";
import awardBGArray from "../../../../assets/data/admin/updateTools/scienceOfSkinAwards/awardBackgroundArray";
import ImageUpdateTools from "../../../components/ImageUpdateTools";
import { useImageStore } from "../../../../stateStore/imageToolStateStore";
import { useImageStoreActions } from "../../../../stateStore/imageToolStateStore";
import HideSideBarBtn from "../../../components/buttons/HideSideBarBtn.jsx";
import { useRenderStepStore } from "../../../../stateStore/useStepStore.js";
import ErrorModal from "../../../components/ErrorModal.jsx";
import WorkingModal from "../../../components/WorkingModal.jsx";
import StepOneDataForm from "./update-tool-steps/StepOneDataForm.jsx";
const UpdateTool = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		productUrl: false,
		podcastUrl: false,
		success: false,
		successMessage: "",
		hideDataTab: false,
		selectedAwardTemplate: null,
		completedForm: false,
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
		awardImage: null,
		finalImage: null,
		selectedAwardTemplate: awardTemplateArray[0].image,
		selectedBackgroundTemplate: awardBGArray[0].image,
	});
	const [formData, setFormData] = useState();

	const [stepsArr, setStepsArray] = useState([
		{ id: 0, name: "Set Award Template", completed: false },
		{ id: 1, name: "Set Style and Adjust Year Text", completed: false },
		{ id: 2, name: "Download and Check Award Image", completed: false },
		{ id: 3, name: "Award Image Approval", completed: false },
		{ id: 4, name: "Set Background Image", completed: false },
		{ id: 5, name: "Adjust Product Image", completed: false },
		{ id: 6, name: "Adjust Award Image", completed: false },
		{ id: 7, name: "Download and Check Image", completed: false },
		{ id: 8, name: "Submit", completed: false },
	]);
	console.log(formState.awardImage);
	useEffect(() => {
		resetStep();
		resetForm();
	}, []);
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

	// useEffect(() => {
	// 	const imageDownloadUrl = async () => {
	// 		try {
	// 			const urls = [];
	// 			const images = formState.images;

	// 			for (let i = 0; i < images.length; i++) {
	// 				// Fixed the loop condition
	// 				const image = images[i];
	// 				const storageRef = ref(storage, `scienceOfSkinAwards/${image.name}`);
	// 				await uploadBytes(storageRef, image.image);
	// 				const url = await getDownloadURL(storageRef);
	// 				urls.push(url);
	// 			}
	// 			setFormState({ ...formState, imageUrls: urls });
	// 			// Do something with the URLs, e.g., set them in the state or call another function
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	imageDownloadUrl();
	// }, [formState.images]);

	const handleImageConvert = async () => {
		try {
			const elementToCapture = document.getElementById("html2Image");
			if (!elementToCapture) {
				console.error("Element to capture not found");
				return; // Exit if the element is not found
			}

			const canvas = await html2canvas(elementToCapture);
			const imageDataURL = canvas.toDataURL("image/png");
			console.log(imageDataURL);

			const downloadLink = document.createElement("a");
			downloadLink.href = imageDataURL;
			downloadLink.download = "captured-image.png";
			document.body.appendChild(downloadLink); // Append to the body to ensure click() works
			downloadLink.click();
			downloadLink.remove(); // Remove the link after clicking

			const awardImage = [imageDataURL];
			setFormState({ ...formState, awardImage: awardImage });
		} catch (error) {
			console.error("Error in handleImageConvert:", error.message);
			// Handle the error appropriately
		}
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
		const noImage = awardTemplateArray[0].image;
		if (formState.selectedAwardTemplate === noImage) {
			setState({ ...state, error: true, errorMessage: "Please Select an Award Template" });
			runErrorTimer();
		} else if (currentStep === 2) {
			setState({ ...state, uploading: true });
			try {
				await handleImageConvert();
			} catch (error) {
				console.error("Error in handleImageConvert:", error);
				setState({ ...state, error: true, errorMessage: "Error in handleImageConvert" });
			}

			setState({ ...state, uploading: false });
			setStepsArray(
				stepsArr.map((step, index) => {
					if (index === currentStep) {
						return { ...step, completed: true };
					}
					return step;
				})
			);
			increaseStep();
		} else if (currentStep === 8) {
			resetForm();
		} else {
			setStepsArray(
				stepsArr.map((step, index) => {
					if (index === currentStep) {
						return { ...step, completed: true };
					}
					return step;
				})
			);
			increaseStep();
		}
	};

	const handleSideBar = () => {
		setState({ ...state, hideDataTab: !state.hideDataTab });
	};

	const handleChildFormData = (formState) => {
		setFormData(formState);
		setState({ ...state, completedForm: true, hideDataTab: true });
	};
	console.log(selectedBackgroundTemplate);
	useEffect(() => {
		const mainSelectedAwardTemplate = awardTemplateArray.filter((item) => item.name === selectedAwardTemplate);
		const mainSelectedBackgroundTemplate = awardBGArray.filter((item) => item.name === selectedBackgroundTemplate);
		if (mainSelectedAwardTemplate.length > 0) {
			setState({ ...state, loading: true });
			setFormState({ ...formState, selectedAwardTemplate: mainSelectedAwardTemplate[0].image });
			setState({ ...state, loading: false });
		} else if (mainSelectedBackgroundTemplate.length > 0) {
			setState({ ...state, loading: true });
			setFormState({ ...formState, selectedBackground: mainSelectedBackgroundTemplate[0].image });
			setState({ ...state, loading: false });
		}
	}, [selectedAwardTemplate, selectedBackgroundTemplate]);

	console.log(productImage);
	console.log(currentStep);
	return (
		<div className='w-max h-max	pb-10 '>
			{state.error ? <ErrorModal errorMessage={state.errorMessage} /> : null}
			{state.uploading || state.loading ? <WorkingModal /> : null}
			{/* Main Container */}
			<div className='flex flex-row w-max h-max justify-center items-center bg-zinc-800 rounded-lg mx-auto shadow-xl shadow-gray-500 space-x-4 py-4 transition-all duration-500 ease-in-out px-8'>
				{/* Left Container */}
				{!state.hideDataTab && (
					<div>
						<StepOneDataForm setChildFormData={handleChildFormData} />
					</div>
				)}
				<div
					className={
						state.completedForm === true ? " my-auto mx-auto w-max h-fit  text-white group group-hover:scale-115 hover:cursor-pointer" : "hidden"
					}
				>
					<HideSideBarBtn onClick={handleSideBar} />
				</div>
				{/* Uploaded Brand and Product Image Container*/}
				<div className='min-w-max h-fit justify-center items-center text-xl space-y-2 mx-auto'>
					{state.completedForm && (
						<div className='hover:border-2 hover:border-white w-max px-8'>
							<h1 className='text-center w-full text-2xl text-white underline'>Brand Logo Preview</h1>
							<img className='w-auto lg:h-64 md:h-32 ' src={formData.brandLogoImage[1].imageUrl} />
						</div>
					)}
					{state.completedForm && (
						<div className='hover:border-2 hover:border-white w-max px-8'>
							<h1 className='text-center w-full text-2xl text-white underline'>Product Preview</h1>
							<img className='w-auto lg:h-64 md:h-32 mx-auto ' src={formData.productImage[1].imageUrl} />
						</div>
					)}
				</div>
				{/* Image Adjust Container*/}
				<div
					className={
						state.completedForm ? " flex flex-col w-fit h-fit items-center justify-center text-xl text-center text-white p-0 m-0 " : "hidden"
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
						<div className={classNames(gridAlign ? "w-1 h-full absolute left-1/2 bg-red-400" : "hidden")}></div>
						<div className={classNames(gridAlign ? "w-full h-1 absolute left-0 top-1/2 bg-red-400" : "hidden")}></div>
						{/* Award Image Background */}
						{currentStep >= 4 && <img src={formState.selectedBackground} className='w-full h-full' />}
						{/* Award Image */}
						{currentStep < 4 ? <img className='w-full h-full ' src={formState.selectedAwardTemplate} /> : ""}
						{/* Product Image */}
						{currentStep > 4 && (
							<img
								id='productImage'
								className='absolute '
								style={{
									left: productImage.x + "px",
									top: productImage.y + "px",
								}}
								src={currentStep === 5 ? formData.productImage[1].imageUrl : ""}
							/>
						)}
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
								{currentStep < 4 ? (
									<h1
										style={{
											color: fontColor,
											fontSize: fontSize + "px",
											fontFamily: fontFamily,
											fontStyle: fontStyle,
										}}
										className={`text-${fontColor} ${fontWeight} ${fontLetterSpacing}`}
									>
										{state.completedForm ? formData.year : ""}
									</h1>
								) : (
									""
								)}
							</h1>
						</div>
					</div>

					<div className='flex flex-col w-fit items-center justify-center text-xl h-fit  space-y-4 hover:font-semi-bold '>
						<button
							className={classNames(
								"mx-auto shadow-black shadow-xl bottom-0 bg-red-500 whitespace-nowrap text-white text-lg px-4 py-2 w-fit rounded-md hover:bg-blue-400 hover:font-bold active:translate-y-2 mt-2 ease-in-out transition-all active:delay-200 focus:duration-400",
								previewLargeImage && "translate-y-50 -translate-x-1/2 scale-150"
							)}
							onClick={handleCompletionSteps}
							name={stepsArr[currentStep].name}
							value={stepsArr[currentStep].id}
						>
							{stepsArr[currentStep].name}
						</button>
					</div>
				</div>
				<div className={state.completedForm && state.hideDataTab ? "w-fit m-0 h-fit " : "hidden"}>
					<ImageUpdateTools />{" "}
				</div>

				<div
					className={
						state.completedForm && state.hideDataTab
							? "flex flex-col w-fit h-fit justify-center items-center text-xl  text-white px-4 grow-0"
							: "hidden"
					}
				>
					<div className='w-full border-b-2 border-white mb-2'>
						<h1 className='text-white text-2xl font-semibold text-center w-full h-fit '>CheckList</h1>
					</div>
					{stepsArr.map((item, index) => {
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
					})}
				</div>
			</div>
		</div>
	);
};

export default UpdateTool;
