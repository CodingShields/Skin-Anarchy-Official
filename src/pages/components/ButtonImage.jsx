const ButtonImage = ({ children, onClick, image, open }) => {
	console.log(image);
	console.log(open);
	return !open ? (
		<button onClick={onClick}>
			<img src={image ? image : ""} alt='button' className='w-32 fixed bottom-0 right-0 mr-10 mb-10 cursor-pointer' />
			{children ? { children } : ""}
		</button>
	) : null;
};

export default ButtonImage;
