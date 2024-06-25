const Button = ({ children, onClick, className, image, text }) => {
	return (
		<>
			<button className={className} onClick={onClick}>
				{image && <img src={image} alt='button' className={className} />}
				{children && children}
				{text && text}
			</button>
		</>
	);
};

export default Button;
