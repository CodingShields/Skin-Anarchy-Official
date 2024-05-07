import React from "react";
import PropTypes from "prop-types";
import { MenuContext } from "./Menu";
const MenuItem = ({ children }) => {
	const menuItem = React.useContext(MenuContext);
	return (
		<div className={menuItem.buttonStyle}>
			{children}
		</div>
	);
};
export default MenuItem;
MenuItem.propTypes = {
	children: PropTypes.node.isRequired,
};
