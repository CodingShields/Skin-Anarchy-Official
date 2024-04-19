import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavBarMenuItem = ({ text, link }) => {
	console.log(link); // This is to ensure that the link is being passed correctly.
	return (
		<Link to={link} className='relative text-white lg:text-lg text-2xl px-6 py-8 font-thin text-end hover:scale-125 cursor-pointer'>
			{text}
		</Link>
	);
};
NavBarMenuItem.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default NavBarMenuItem;
