// {setImageState}
import { useState, useEffect } from "react";
import AdjustImageButtons from "./buttons/AdjustImageButtons";
import fontData from "../../assets/data/admin/updateTools/scienceOfSkinAwards/fontData";
import AddCircleBtn from "./buttons/AddCircleBtn";
import MinusCircleBtn from "./buttons/MinusCircleBtn";
import ColorBox from "./buttons/ColorBox";
import awardBGArray from "../../assets/data/admin/updateTools/scienceOfSkinAwards/awardBackgroundArray";
import awardTemplateArray from "../../assets/data/admin/updateTools/scienceOfSkinAwards/awardTemplateArray";
import { useImageStoreActions } from "../../stateStore/imageToolStateStore";
import { useImageStore } from "../../stateStore/imageToolStateStore";
const ImageUpdateTools = () => {
	const [fontState, setFontState] = useState({ fontData });
	const { setPreviewLargeImage } = useImageStoreActions((actions) => actions);
	const { setFontColor } = useImageStoreActions((actions) => actions);
	const { setFontSize } = useImageStoreActions((actions) => actions);
	const { setFontFamily } = useImageStoreActions((actions) => actions);
	const { setFontStyle } = useImageStoreActions((actions) => actions);
	const { setFontWeight } = useImageStoreActions((actions) => actions);
	const { setFontLetterSpacing } = useImageStoreActions((actions) => actions);
	const { setGridAlign } = useImageStoreActions((actions) => actions);
	const { setProductImage } = useImageStoreActions((actions) => actions);
	const { setAwardImage } = useImageStoreActions((actions) => actions);
	const { setBrandLogoImage } = useImageStoreActions((actions) => actions);
	const { setYearText } = useImageStoreActions((actions) => actions);
	const { setSelectedImage } = useImageStoreActions((actions) => actions);
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
	const previewLargeImage = useImageStore((state) => state.previewLargeImage);

	const handleImageSelection = (e) => {
		e.preventDefault();
		const value = e.target.value;
		setSelectedImage(value);
		console.log(value);
	};

	const handleDirection = (name) => {
		if (name === "up" && selectedImage === "productImage") {
			setProductImage({
				...productImage,
				y: productImage.y - 2.5,
			});
		} else if (name === "down" && selectedImage === "productImage") {
			setProductImage({
				...productImage,
				y: productImage.y + 2.5,
			});
		} else if (name === "left" && selectedImage === "productImage") {
			setProductImage({
				...productImage,
				x: productImage.x - 2.5,
			});
		} else if (name === "right" && selectedImage === "productImage") {
			setProductImage({
				...productImage,
				x: productImage.x + 2.5,
			});
		} else if (name === "up" && selectedImage === "awardImage") {
			setAwardImage({
				...awardImage,
				y: awardImage.y - 2.5,
			});
		} else if (name === "down" && selectedImage === "awardImage") {
			setAwardImage({
				...awardImage,
				y: awardImage.y + 2.5,
			});
		} else if (name === "left" && selectedImage === "awardImage") {
			setAwardImage({
				...awardImage,
				x: awardImage.x - 2.5,
			});
		} else if (name === "right" && selectedImage === "awardImage") {
			setAwardImage({
				...awardImage,
				x: awardImage.x + 2.5,
			});
		} else if (name === "up" && selectedImage === "brandLogoImage") {
			setBrandLogoImage({
				...brandLogoImage,
				y: brandLogoImage.y - 2.5,
			});
		} else if (name === "down" && selectedImage === "brandLogoImage") {
			setBrandLogoImage({
				...brandLogoImage,
				y: brandLogoImage.y + 2.5,
			});
		} else if (name === "left" && selectedImage === "brandLogoImage") {
			setBrandLogoImage({
				...brandLogoImage,
				x: brandLogoImage.x - 2.5,
			});
		} else if (name === "right" && selectedImage === "brandLogoImage") {
			setBrandLogoImage({
				...brandLogoImage,
				x: brandLogoImage.x + 2.5,
			});
		} else if (name === "up" && selectedImage === "yearText") {
			setYearText({
				...yearText,
				y: yearText.y - 2.5,
			});
		} else if (name === "down" && selectedImage === "yearText") {
			setYearText({
				...yearText,
				y: yearText.y + 2.5,
			});
		} else if (name === "left" && selectedImage === "yearText") {
			setYearText({
				...yearText,
				x: yearText.x - 2.5,
			});
		} else if (name === "right" && selectedImage === "yearText") {
			setYearText({
				...yearText,
				x: yearText.x + 2.5,
			});
		}
	};
	const handleGridChange = (e) => {
		e.preventDefault();
		const name = e.target.name;
		if (name === "on") {
			setGridAlign(true);
		} else if (name === "off") {
			setGridAlign(false);
		}
	};

	const handleFontColorChange = (item) => {
		const value = item.value;
		setFontColor(value);
	};

	const handleFontFamilyChange = (e) => {
		const value = e.target.value;
		setFontFamily(value);
	};

	const handleFontSizeClick = (name) => {
		if (name === "increase") {
			setFontSize(fontSize + 1);
		} else {
			setFontSize(fontSize - 1);
		}
	};

	const handleFontStyleChange = (e) => {
		const value = e.target.value;
		setFontStyle(value);
	};

	const handleFontWeightChange = (e) => {
		const value = e.target.value;
		setFontWeight(value);
	};

	const handleFontLetterSpacingChange = (e) => {
		const value = e.target.value;
		setFontLetterSpacing(value);
	};

	const handlePreviewImageClick = () => {
		setPreviewLargeImage(!previewLargeImage);
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='flex flex-col h-fit w-fit bg-gray-700 px-4 py-2 mt-2 rounded-xl border-2 border-white shadow-gray-500 hover:shadow-lg text-white'>
			<div className='flex flex-row w-fit h-fit justify-center items-center mt-2 space-x-4 text-center'>
				<div className='w-fit space-y-2 group'>
					<h1 className='text-white whitespace-nowrap group-hover:text-blue-500 group-hover:scale-110 '>Image To Adjust</h1>
					<select onChange={handleImageSelection} className='text-black group-hover:text-blue-500 group-hover:font-semibold rounded-md w-full'>
						<option value='awardImage'>Award</option>
						<option value='yearText'>Year Text</option>
						<option value='backgroundImage'>Background Image</option>
						<option value='productImage'>Product Image</option>
						<option value='brandLogoImage'>Brand Logo</option>
					</select>
				</div>
				<div className='w-fit space-y-2'>
					<h1 className='text-white'>Select Award</h1>
					<select onChange={handleImageSelection} className='text-black group-hover:text-blue-500 group-hover:font-semibold rounded-md w-full	'>
						{awardTemplateArray.map((item, index) => {
							return (
								<option key={index} id='awardTemp' value={index}>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
				<div className='w-fit space-y-2 group'>
					<h1 className='text-white whitespace-nowrap group-hover:text-blue-500 group-hover:scale-110'>Select BackGround</h1>
					<select onChange={handleImageSelection} className='text-black group-hover:text-blue-500 group-hover:font-semibold rounded-md w-full'>
						{awardBGArray.map((item, index) => {
							return (
								<option key={index} value={index} id='awardBG'>
									{item.name}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className='px-4 py-2 mt-2 text-white'>
				<h1 className='mb-2 text-white text-center'>Turn Alignment Grid On/Off</h1>
				<div className='flex flex-row justify-center items-center space-x-2 w-full'>
					<div className='w-fit group h-fit flex flex-row justify-center items-center space-x-2'>
						<input
							onClick={handleGridChange}
							className={
								gridAlign ? "inline-flex justify-center items-center text-green-500 caret-green-500 bg-green-500 h-10 w-10 " : "bg-white h-10 w-10  "
							}
							type='radio'
							name='on'
							defaultChecked={gridAlign}
						/>
						<h1 className='group-hover:text-green-500 group-hover:font-semibold'>ON</h1>
					</div>

					<div className='w-fit group h-fit flex flex-row justify-center items-center space-x-2'>
						<input
							onClick={handleGridChange}
							className={
								!gridAlign ? "inline-flex justify-center items-center  text-red-500 caret-red-500 bg-red-500 h-10 w-10 " : "bg-white h-10 w-10 "
							}
							type='radio'
							name='off'
						/>
						<h1 className='group-hover:text-red-500 group-hover:scale-110 '>OFF</h1>
					</div>
				</div>

				<AdjustImageButtons setDirection={handleDirection} />
				<div className='flex flex-row w-full justify-center items-center space-x-4'>
					<div className='flex flex-col w-full justify-center items-center space-x-4'>
						<AddCircleBtn name='increase' onClick={handleFontSizeClick} />
						<h1>Increase Font Size</h1>
					</div>
					<div className='flex flex-col w-full justify-center items-center space-x-4'>
						<MinusCircleBtn name='decrease' onClick={handleFontSizeClick} />
						<h1>Increase Font Size</h1>
					</div>
				</div>
				<div>
					<div className='flex flex-col w-full space-y-4 mt-6'>
						<div className='flex flex-row w-full h-12 justify-between items-center text-md space-x-6 group hover:border-2 hover:border-white hover:px-2 hover:py-2'>
							<h1 className='whitespace-nowrap group-hover:text-blue-500 group-hover:font-semibold group-hover:underline'>Choose Font Color</h1>
							<div
							className="flex flex-row space-x-16 w-fit group justify-center items-center mx-auto"
							>
								{fontState.fontData.fontColor.map((item, index) => {
									return (
										<div
											className='flex flex-row space-x-2 w-fit group justify-between items-center '
											onClick={() => handleFontColorChange(item)} // Pass the entire item object
											key={index}
										>
											<ColorBox color={item.value} />
											<h1 className='capitalize w-fit text-lg '>{item.name}</h1>
										</div>
									);
								})}
							</div>
						</div>

						<div className='flex flex-row w-full justify-between items-center text-md space-x-6 group '>
							<h1 className='whitespace-nowrap group-hover:text-blue-500 group-hover:font-semibold group-hover:underline'>Choose Font Family</h1>
							<select
								className='w-64 text-black font-semibold group-hover:text-blue-500 transition-all duration-300 ease-in-out group-hover:font-bold outline-1 outline-blue-500 group-hover:-translate-x-30'
								onChange={(e) => handleFontFamilyChange(e)}
								value={fontFamily}
							>
								{fontState.fontData.fontFamily.map((item, index) => {
									return (
										<option
											style={{
												fontFamily: item.fontFamily,
											}}
											className='text-black text-lg font-bold'
											key={index}
											value={item.fontFamily}
										>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className='flex flex-row w-full justify-between items-center text-md space-x-6 group'>
							<h1 className='whitespace-nowrap group-hover:text-blue-500 group-hover:font-semibold group-hover:underline'>Choose Font Weight</h1>
							<select
								className='w-64 text-black font-semibold group-hover:text-blue-500 transition-all duration-300 ease-in-out group-hover:font-bold outline-1 outline-blue-500 group-hover:-translate-x-30'
								onChange={(e) => handleFontWeightChange(e)}
								value={fontWeight}
							>
								{fontState.fontData.fontWeight.map((item, index) => {
									return (
										<option className='text-black text-lg font-bold' key={index} value={item.value}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className='flex flex-row w-full justify-between items-center text-md space-x-6 group'>
							<h1 className='whitespace-nowrap group-hover:text-blue-500 group-hover:font-semibold group-hover:underline'>Choose Font Style</h1>
							<select
								className='w-64 text-black font-semibold group-hover:text-blue-500 transition-all duration-300 ease-in-out group-hover:font-bold outline-1 outline-blue-500 group-hover:-translate-x-30'
								onChange={(e) => handleFontStyleChange(e)}
								value={fontStyle}
							>
								{fontState.fontData.fontStyle.map((item, index) => {
									return (
										<option className='text-black text-lg font-bold' key={index} value={item.value}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className='flex flex-row w-full justify-between items-center text-md space-x-6 group'>
							<h1 className='whitespace-nowrap group-hover:text-blue-500 group-hover:font-semibold group-hover:underline'>Choose Letter Spacing</h1>
							<select
								className='w-64 text-black font-semibold group-hover:text-blue-500 transition-all duration-300 ease-in-out group-hover:font-bold outline-1 outline-blue-500 group-hover:-translate-x-30'
								onChange={(e) => handleFontLetterSpacingChange(e)}
								value={fontLetterSpacing}
							>
								{fontState.fontData.fontLetterSpacing.map((item, index) => {
									return (
										<option className='text-black text-lg font-bold' key={index} value={item.value}>
											{item.name}
										</option>
									);
								})}
							</select>
						</div>
						<div className='flex flex-col w-full justify-center items-center text-md space-x-4 '>
							<h1 className='whitespace-nowrap py-2'>Increase Image Size (Read-Only)</h1>
							<button
								onClick={handlePreviewImageClick}
								className={classNames(
									"w-fit h-fit text-xl px-5 py-3 rounded-lg transition-all shadow-lg ease-in-out shadow-black hover:cursor-pointer hover:scale-125",
									!previewLargeImage
										? "active:bg-green-500 active:translate-y-2 hover:bg-green-700 bg-green-500"
										: "active:bg-red-500 bg-red-500 active:translate-y-2 focus:bg-red-500  hover:bg-red-700"
								)}
							>
								View {!previewLargeImage ? "Larger Image" : "Smaller Image"}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageUpdateTools;
