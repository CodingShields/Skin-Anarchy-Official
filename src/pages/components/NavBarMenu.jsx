import React, { useState } from "react";
import ReactDOM from "react-dom";
import NavBarButton from "./NavBarButton";
import NavBarMenuDropDown from "./NavBarMenuDropDown";
import NavBarMenuItem from "./NavBarMenuItem";

const NavBarMenu = ({ children, toggle }) => {
	const [open, setOpen] = useState(true);

	function toggle() {
		setOpen((prevOpen) => !prevOpen);
	}

	return (
		<div className='relative inline-block text-white z-50'>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					open,
					toggle,
				});
			})}
		</div>
	);
};

export default NavBarMenu;
