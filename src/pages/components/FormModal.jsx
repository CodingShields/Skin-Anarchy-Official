const FormModal = ({ children, open }) => {
	console.log(open);
	if (!open) return null;
	return (
		<div className='absolute bg-opacity-50 bg-gray-300 w-full min-h-screen z-20 top-0 left-0 animate-fadeIn'>
			<div className='flex justify-center items-center place-content-center w-full h-full relative mt-24'>{children}</div>
		</div>
	);
};

export default FormModal;
