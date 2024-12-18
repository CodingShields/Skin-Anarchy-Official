import { NavLink } from "react-router-dom";
import Button from "../button/Button.jsx";

const NavBarButton = ({ to, text, icon, toggle }) => {
	return (
		<div onClick={toggle} className='inline-flex items-center cursor-pointer hover:scale-110 underlineAnimate'>
			<NavLink className='whitespace-nowrap' to={to}>
				{text}
			</NavLink>
			{icon && <img className='w-8 h-8 pl-2  transition-all ease-in-out duration-300' src={icon} />}
		</div>
	);
};

export default NavBarButton;
