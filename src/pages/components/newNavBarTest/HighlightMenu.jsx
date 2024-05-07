import PropTypes from "prop-types";
import { createElement } from "react";
const HighlightMenu = ({ children }) => {
	return (
		<div>
	{children}
		</div>
	);
};

export default HighlightMenu;
HighlightMenu.propTypes = {
	data: PropTypes.array.isRequired,
	highlightdata: PropTypes.array.isRequired,
	children: PropTypes.array.isRequired,
	index: PropTypes.number.isRequired,
	subMenu: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
