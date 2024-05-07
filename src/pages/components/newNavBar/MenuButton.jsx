import React from "react";
import Button from "../button/Button.jsx";
import { MenuContext } from "./Menu";
import PropTypes from "prop-types";
export default function MenuButton({ children }) {
	const { toggleOpen } = React.useContext(MenuContext);
	return <Button onClick={toggleOpen}>{children}</Button>;
}

MenuButton.propTypes = {
	children: PropTypes.node.isRequired,
};
