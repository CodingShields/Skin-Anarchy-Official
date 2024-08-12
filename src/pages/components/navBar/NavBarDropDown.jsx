import PropTypes from "prop-types";

const NavBarDropDown = ({ children, open, menu, text }) => {
	return (
		<div
			className={
				open && menu === text ? "animate-fadeIn transition-all duration-500 ease-in-out bg-black/50 h-fit" : "animate-fadeOut delay-500 collapse h-0"
			}
		>
			{children}
		</div>
	);
};

export default NavBarDropDown;

NavBarDropDown.propTypes = {
	menu: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	text: PropTypes.string.isRequired,
};
