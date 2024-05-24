import Proptypes from "prop-types";
const NavBarMenuItem = ({ text, to }) => {
	return (
		<button
			to={to}
			name={text}
			className='uppercase font-thin font-montserrat hover:underline transition-all duration-500 ease-in-out decoration-0 underline-offset-8 whitespace-nowrap'
		>
			{text}
		</button>
	);
};

NavBarMenuItem.propTypes = {
	text: Proptypes.string,
	to: Proptypes.string,
	buttonStyle: Proptypes.string,
};

export default NavBarMenuItem;
