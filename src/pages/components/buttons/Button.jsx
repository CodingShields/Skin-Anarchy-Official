import PropTypes from "prop-types";

const Button = ({ text, style, onClick}) => {
	return (
		<button onClick={onClick} className={`inline-flex items-center cursor-pointer underlineAnimate ${style}`} name={text}>
			{text}
		</button>
	);
};

Button.propTypes = {
	text: PropTypes.string,
	style: PropTypes.string,
	onClick: PropTypes.func,
	image: PropTypes.string,
	imageStyle: PropTypes.string,
};

export default Button;
