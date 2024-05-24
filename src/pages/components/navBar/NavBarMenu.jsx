import React, { useState, useRef, useEffect } from "react";
import Proptypes from "prop-types";
const MenuContext = React.createContext();
export { MenuContext };
const NavBarMenu = ({ children, toggle, menuStyle, buttonStyle, titleText, navMenu, highlightData, highlightMenuStyle }) => {
	const [open, setOpen] = useState(false);
	const menuRef = useRef(null);
	const handleNavNarClick = () => {
		setOpen(!open);
	};
	useEffect(() => {
		// Function to close menu when clicked outside
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setOpen(false);
			}
		};
		// Add event listener when component mounts
		document.addEventListener("mousedown", handleClickOutside);
		// Cleanup function to remove event listener when component unmounts
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);
	return (
		<div ref={menuRef} onClick={handleNavNarClick}>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					open,
					toggle,
					menuStyle,
					buttonStyle,
					titleText,
					navMenu,
					highlightData,
					highlightMenuStyle,
				});
			})}
		</div>
	);
};
NavBarMenu.propTypes = {
	children: Proptypes.node.isRequired,
	toggle: Proptypes.func.isRequired,
	menuStyle: Proptypes.string.isRequired,
	buttonStyle: Proptypes.string.isRequired,
	titleText: Proptypes.string.isRequired,
	navMenu: Proptypes.string.isRequired,
	highlightData: Proptypes.array.isRequired,
	highlightMenuStyle: Proptypes.string.isRequired,
};

export default NavBarMenu;
