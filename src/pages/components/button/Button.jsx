import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Button = ({ className, text, to, onClick }) => {
	if (to) {
		return (
			<NavLink to={to} className={className} name={text} onClick={onClick}>
				{text}
			</NavLink>
		);
	}
	return (
		<button className={className} name={text} onClick={onClick}>
			{text}
		</button>
	);
};

Button.propTypes = {
	to: PropTypes.string,
	children: PropTypes.node,
	text: PropTypes.string,
	className: PropTypes.string, // Accept className prop
	size: PropTypes.string,
	variant: PropTypes.string,
	onClick: PropTypes.func,
	image: PropTypes.string,
	MenuContext: PropTypes.any,
	buttonStyle: PropTypes.string,
};

export default Button;
