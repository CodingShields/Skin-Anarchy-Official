import React from "react";
import workingGears from "../../assets/iconsAnimated/workingGears.svg";

const WorkingModal = ({ message, open }) => {
	if (!open) return null;

	return (
		<div className='absolute bg-opacity-50 bg-char-900 w-full h-full z-10 top-0 left-0 animate-fadeIn'>
			<div
				onClick={(e) => e.stopPropagation()}
				className='flex flex-col justify-center items-center place-content-center w-full h-full'>
				<h1 className='w-full text-2xl font-bold animate-pulse text-black text-center '></h1>
				{message}
				<div className='w-fit h-fit bg-white bg-opacity-80 rounded-full shadow-lg p-5 '>
					<img src={workingGears} className='w-32 h-32 mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default WorkingModal;
