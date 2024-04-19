import errorIcon from "../../assets/iconsAnimated/errorIcon.svg";
const ErrorModal = ({ open, message }) => {
	if (!open) return null;
	return (
		<div className='absolute bg-opacity-50 bg-gray-500 w-full h-full z-50 top-0 left-0'>
			<div className='flex justify-center items-center place-content-center w-full h-full animate-fadeIn'>
				<div className='inline-flex w-fit h-fit bg-red-500 bg-opacity-80 rounded-2xl shadow-lg shadow-black px-2 items-center'>
					<img src={errorIcon} className='w-16 h-24 mx-auto' />
					<h1 className='w-full text-lg font-bold text-white text-center capitalize underline'>Error: {message}</h1>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
