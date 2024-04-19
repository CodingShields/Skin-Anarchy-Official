import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarMenuItem = ({ text, link }) => {
	const navigate = useNavigate();

	const handleOnClick = () => {
		console.log(link);
		navigate(link);
	};

	NavBarMenuItem.propTypes = {
		text: PropTypes.string.isRequired,
		link: PropTypes.string.isRequired,
	};

	return (
		<NavLink to={link} onClick={handleOnClick}>
			<h1 className='relative text-white lg:text-lg text-2xl px-6 py-8 font-thin text-end hover:scale-125 cursor-pointer'>{text}</h1>
		</NavLink>
	);
};

export default NavBarMenuItem;
