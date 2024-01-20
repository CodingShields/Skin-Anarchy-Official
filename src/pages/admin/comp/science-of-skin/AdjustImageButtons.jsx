import { useState } from "react";
import arrowDown from "../../../../assets/icons/imageAdjustIcons/arrowDown.svg";
import arrowUp from "../../../../assets/icons/imageAdjustIcons/arrowUp.svg";
import arrowLeft from "../../../../assets/icons/imageAdjustIcons/arrowLeft.svg";
import arrowRight from "../../../../assets/icons/imageAdjustIcons/arrowRight.svg";

const AdjustImageButtons = ({setDirection}) => {

	const handleDirectionClick = (e) => {
        const name = e.target.name
        setDirection(name)
	};

	return (
		<div className='flex flex-row w-fit h-fit justify-evenly items-center'>
			<img onClick={(e) => handleDirectionClick(e)} name="left" className=' w-16 ' src={arrowLeft} alt='arrowLeft' />
			<img onClick={(e) => handleDirectionClick(e)} name='up' className=' w-16' src={arrowUp} alt='arrowUp' />
			<img onClick={(e) => handleDirectionClick(e)} name='down' className='w-16' src={arrowDown} alt='arrowDown' />
			<img onClick={(e) => handleDirectionClick(e)} name='right' className='w-16' src={arrowRight} alt='arrowRight' />
		</div>
	);
};

export default AdjustImageButtons;
