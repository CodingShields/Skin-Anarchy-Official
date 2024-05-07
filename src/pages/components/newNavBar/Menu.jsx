import React from "react";
import PropTypes from "prop-types";
import useToggle from "../hooks/useToggle";

const MenuContext = React.createContext();
export { MenuContext };

export default function Menu({ children, onOpen, buttonStyle, menuStyle, subMenuStyle, to, name }) {
	const [open, toggleOpen] = useToggle({
		onToggle: onOpen,
	});
	return (
		<MenuContext.Provider value={{ open, toggleOpen, buttonStyle, subMenuStyle }}>
			<div className={menuStyle} to={to}>
				{children}
			</div>
		</MenuContext.Provider>
	);
}

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	onOpen: PropTypes.func,
	buttonStyle: PropTypes.string,
	menuStyle: PropTypes.string,
	subMenuStyle: PropTypes.string,
	to: PropTypes.string,
};
