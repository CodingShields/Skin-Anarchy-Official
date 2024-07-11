const Button = ({ children, onClick, style, image, text, imageStyle }) => {
	return (
		<>
			<button className={style} onClick={onClick}>
				{image && <img src={image} alt='button' className={imageStyle} />}
				{children && children}
				{text && text}
			</button>
		</>
	);
};

export default Button;
