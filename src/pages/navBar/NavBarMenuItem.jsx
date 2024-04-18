import { NavLink } from "react-router-dom";

const NavBarMenuItem = ({ text, to }) => {
	return (
		<NavLink to={to} className='text-white'>
			{text}
		</NavLink>
	);
};

export default NavBarMenuItem;
