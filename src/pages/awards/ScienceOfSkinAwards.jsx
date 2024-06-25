import React, { useState } from "react";
import ScienceOfSkinYearsTabs from "./comp/ScienceOfSkinYearsTabs";
import ScienceAwardCard from "./comp/ScienceAwardCard";
import ScienceAwards from "./comp/ScienceAwards";
import ScienceSealCard from "./comp/ScienceSealCard";
import { imageArray2022 } from "../../assets/images/science-of-skin/2022/2022ImageArray"
import { imageArray2023 } from "../../assets/images/science-of-skin/2023/2023ImageArray"
import {imageArray2024} from "../../assets/images/science-of-skin/2024/2024ImageArray"
import Science2024Seal from "../../assets/images/science-of-skin/2024/seal/Science2024Seal.png"
import Science2022Seal from "../../assets/images/science-of-skin/2022/seal/Science2022Seal.png"
const imageData = [
	{
		name: "2022",
		seal: Science2022Seal,
		data: imageArray2022,
	},
	{
		name: "2023",
		seal: "",
		data: imageArray2023,
	},
	{
		name: "2024",
		seal: Science2024Seal,
		data: imageArray2024,
	},
	{
		name: "2025",
		seal: Science2024Seal,
		data: imageArray2024,
	},
];
const ScienceOfSkinAwards = () => {
	const [navBarSelection, setNavBarSelection] = useState({
		year: "2022",
		data: imageArray2022,
		seal:null
	});
	
	const handleNavSelect = (selectedYear) => {
		console.log("Selected year:", selectedYear);
		setNavBarSelection({
			year: selectedYear,
			data: findData(selectedYear),
			seal: findSeal(selectedYear)
		});
	};

const findSeal = (year) => {
	return imageData.find((item) => item.name === year)?.seal;
};

const findData = (year) => {
	return imageData.find((item) => item.name === year)?.data;
	};
	


findData(navBarSelection.name)
	return (
		<div className='h-fit w-full bg-black '>
			<h1 className='text-white text-6xl font-thin tracking-widest uppercase mt-36 text-center font-montserrat'> Science of Skin Awards</h1>
			<div className='my-12'>
				<ScienceOfSkinYearsTabs handleNavSelect={handleNavSelect} active={navBarSelection.year} />
			</div>
			<ScienceAwardCard>
				<ScienceSealCard>
					<img src={navBarSelection.seal ? navBarSelection.seal : ""} className='w-[400px] h-auto mx-auto' />
					<h1 className='text-3xl text-white text-center font-montserrat uppercase font-thin py-4'>
						Congratulations to our {navBarSelection.year} winners!
					</h1>
				</ScienceSealCard>
					
				<ScienceAwards active={navBarSelection.year}>
					{navBarSelection.data?.map((image, index) => (
						<img
							key={index}
							src={image.image}
							alt={`award ${index}`}
							className='w-[300px] h-fit mx-auto my-auto p-8 cursor-pointer hover:scale-150 ease-in-out duration-300 transition-all'
						/>
					))}
				</ScienceAwards>
			</ScienceAwardCard>
		</div>
	);
};

export default ScienceOfSkinAwards;