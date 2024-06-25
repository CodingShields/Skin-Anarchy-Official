const ButtonImage = ({ onClick, image, open }) => {
	return !open ? (
		<button onClick={onClick}>
			<img
				src={image ? image : ""}
				alt='button'
				className='w-32 fixed bottom-0 right-0 mr-10 mb-10 cursor-pointer hover:animate-bounce animate-fadeIn contrast-150'
			/>
		</button>
	) : null;
};

export default ButtonImage;
