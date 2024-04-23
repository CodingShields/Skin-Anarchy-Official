import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const NavBarMenu = ({ children }) => {
	// Add prop validation for 'children'
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
		<div ref={menuRef} onClick={handleNavNarClick} className=' text-white whitespace-nowrap uppercase'>
			{React.Children.map(children, (child) => {
				return React.cloneElement(child, {
					open,
				});
			})}
		</div>
	);
};
NavBarMenu.propTypes = {
	children: PropTypes.node.isRequired,
	toggle: PropTypes.func.isRequired,
};
export default NavBarMenu;
