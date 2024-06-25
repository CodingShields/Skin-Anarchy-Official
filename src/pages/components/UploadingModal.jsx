import { useState, useEffect } from "react";

import uploadingSpinner from "../../assets/iconsAnimated/uploadingSpinner.png";
import uploadingTextFadeIn from "../../assets/iconsAnimated/uploadingTextFadeIn.png";
import uploadingTextFadeOut from "../../assets/iconsAnimated/uploadingTextFadeOut.png";
import uploadCompleteText from "../../assets/iconsAnimated/uploadCompleteText.png";
const UploadingModal = (props) => {
	return (
		<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-20 top-0 left-0'>
			<div className='flex flex-row justify-center items-center place-content-center w-full h-full'>
				<div className='w-fit h-auto flex flex-col transition-all duration-300 ease-in-out bg-yellow-200 bg-opacity-80 rounded-2xl shadow-lg p-5 '>
					{!props.uploadComplete ? (
						<img src={uploadingTextFadeIn} className='w-auto h-fit mx-auto' />
					) : (
						<img src={uploadCompleteText} className='w-auto h-fit mx-auto' />
					)}
				</div>
			</div>
		</div>
	);
};

export default UploadingModal;
