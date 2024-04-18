const Button = ({ children, onClick, className, image, text }) => {
	return (
		<button onClick={onClick}>
			<img src={image ? image : ""} alt='button' className='w-32 fixed bottom-0 right-0 mr-10 mb-10 cursor-pointer' />
			{children ? { children } : ""}
			{text ? { text } : ""}
		</button>
	);
};

export default Button;
