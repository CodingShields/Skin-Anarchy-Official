import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavBarMenuItem = ({ text, link }) => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		console.log(link);
		navigate(link);
	};
	return (
		<NavLink>
			<h1 onMouseOver={handleOnClick} className='text-white text-2xl px-6 py-8 font-thin text-start cursor-pointer border-r-2 border-white '>
				{text}
			</h1>
		</NavLink>
	);
};

export default NavBarMenuItem;
