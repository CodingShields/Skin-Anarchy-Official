import { useState } from "react";
import arrowDown from "../../../assets/icons/imageAdjustIcons/arrowDown.svg";
import arrowUp from "../../../assets/icons/imageAdjustIcons/arrowUp.svg";
import arrowLeft from "../../../assets/icons/imageAdjustIcons/arrowLeft.svg";
import arrowRight from "../../../assets/icons/imageAdjustIcons/arrowRight.svg";
import MinusCircleBtn from "./MinusCircleBtn.jsx";
import AddCircleBtn from "./AddCircleBtn.jsx";

const AdjustImageButtons = ({ setDirection }) => {
	const handleDirectionClick = (e) => {
		const name = e.target.name;
		setDirection(name);
	};

	return (
		<div className='flex flex-row w-fit h-fit justify-evenly items-center space-y-2 space-x-8'>
			<img
				onClick={(e) => handleDirectionClick(e)}
				name='left'
				className='w-12 hover:fill-green-500 hover:text-green-500 hover:bg-green-500 hover:rounded-full hover:cursor-pointer hover:shadow-black hover:shadow-xl hover:scale-125'
				src={arrowLeft}
				alt='arrowLeft'
			/>
			<img
				onClick={(e) => handleDirectionClick(e)}
				name='up'
				className='w-12 hover:fill-green-500 hover:text-green-500 hover:bg-green-500 hover:rounded-full hover:cursor-pointer hover:shadow-black hover:shadow-xl hover:scale-125'
				src={arrowUp}
				alt='arrowUp'
			/>
			<img
				onClick={(e) => handleDirectionClick(e)}
				name='down'
				className='w-12 hover:fill-green-500 hover:text-green-500 hover:bg-green-500 hover:rounded-full hover:cursor-pointer hover:shadow-black hover:shadow-xl hover:scale-125'
				src={arrowDown}
				alt='arrowDown'
			/>
			<img
				onClick={(e) => handleDirectionClick(e)}
				name='right'
				className='w-12 hover:fill-green-500 hover:text-green-500 hover:bg-green-500 hover:rounded-full hover:cursor-pointer hover:shadow-black hover:shadow-xl hover:scale-125'
				src={arrowRight}
				alt='arrowRight'
			/>

			<AddCircleBtn />
			<MinusCircleBtn />
		</div>
	);
};

export default AdjustImageButtons;
