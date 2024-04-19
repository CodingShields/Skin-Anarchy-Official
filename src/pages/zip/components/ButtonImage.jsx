const ButtonImage = ({ children, onClick, image }) => {
	console.log(image);
	return (
		<button onClick={onClick}>
			<img src={image ? image : ""} alt='button' className='w-32 fixed bottom-0 right-0 mr-10 mb-10 cursor-pointer' />
			{children ? { children } : ""}
		</button>
	);
};

export default ButtonImage;
