import PropTypes from "prop-types";

const ScienceAwardCard = ({ children }) => {
	return (
		<div className="animate-fadeIn h-full  lg:mb-36 w-full">{children}</div>
	);
};

ScienceAwardCard.propTypes = {
	children: PropTypes.node,
};

export default ScienceAwardCard;
