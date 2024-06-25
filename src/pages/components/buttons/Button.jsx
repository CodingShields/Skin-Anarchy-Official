import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
	return (
		<button onClick={onClick} name={text}>
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
