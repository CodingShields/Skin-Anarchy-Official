import React from "react";
import errorIcon from "../../assets/iconsAnimated/errorIcon.svg";
const ErrorModal = (props) => {
	return (
		<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-20 top-0 left-0'>
			<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
				<div className='w-fit h-fit bg-red-500 bg-opacity-80 rounded-2xl shadow-lg p-5 '>
					<h1 className='w-full text-xl font-bold text-white text-center capitalize'>
						Error: {props.errorMessage}
						<img src={errorIcon} className='w-32 h-32 mx-auto' />
					</h1>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
