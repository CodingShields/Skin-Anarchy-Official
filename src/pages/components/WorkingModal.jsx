import React from "react";
import workingGears from "../../assets/iconsAnimated/workingGears.svg";

const WorkingModal = ({message}) => {
	return (
		<div className='absolute bg-opacity-50 bg-char-900 w-full h-full z-10 top-0 left-0'>
			<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
					<h1 className='w-full text-2xl font-bold animate-pulse text-black text-center '>
						{message}<img src={workingGears} className='w-32 h-32 mx-auto' />
					</h1>
			</div>
		</div>
	);
};

export default WorkingModal;
