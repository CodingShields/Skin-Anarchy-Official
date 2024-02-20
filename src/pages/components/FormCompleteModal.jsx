import { useState, useEffect } from "react";

import formCompletedText from "../../assets/iconsAnimated/formCompletedText.png";

const FormCompleteModal = (props) => {
	return (
		<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-20 top-0 left-0'>
			<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
				<div className='w-fit h-auto flex flex-col transition-all duration-300 ease-in-out bg-yellow-200 bg-opacity-80 rounded-2xl shadow-lg p-5 '>
					<img src={formCompletedText} className='w-auto h-fit mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default FormCompleteModal;
