import PropTypes from "prop-types";

const Button = ({ text, onClick, image }) => {
	return (
		<button
			onClick={onClick}
			name={text}
		>
			{text}
			{image}
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
