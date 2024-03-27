import { useState, useEffect } from "react";

const WelcomeBackUserModal = ({ open, message }) => {
	if (!open) return null;

	return (
		<div className='absolute bg-opacity-50 bg-char-900 w-full h-full z-10 top-0 left-0 animate-fadeIn'>
			<div onClick={(e) => e.stopPropagation()} className='flex flex-row justify-center items-center place-content-center w-full h-full'>
				<div className='w-full h-fit bg-white'>
					<h1 className='w-full text-4xl font-bold text-black text-center py-2'>
						Welcome Back Skin Anarchy Team .... current logged in user name will go here{message}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default WelcomeBackUserModal;
