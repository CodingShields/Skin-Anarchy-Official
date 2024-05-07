import React from "react";
import { MenuContext } from "./Menu";
import PropTypes from "prop-types";

export default function MenuDropDown({ children, subMenuStyle }) {
	const { open } = React.useContext(MenuContext);

	return (
		<>
			<div className={open ? `animate-fadeIn ${subMenuStyle} ` : `animate-fadeOut ${subMenuStyle} `}>{children}</div>{" "}
		</>
	);
}

MenuDropDown.propTypes = {
	children: PropTypes.node.isRequired,
	subMenuStyle: PropTypes.string,
};
