import { NavLink } from "react-router-dom";

const NavBarButton = ({ to, text, icon, toggle }) => {
	return (
		<div onClick={toggle} className='navLink  inline-flex items-center cursor-pointer'>
			<NavLink className='whitespace-nowrap' to={to}>
				{text}
			</NavLink>
			{icon && <img className='w-8 h-8 pl-2' src={icon} />}
		</div>
	);
};

export default NavBarButton;
