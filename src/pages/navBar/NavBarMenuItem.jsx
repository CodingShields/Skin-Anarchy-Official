import PropTypes from "prop-types";

const NavBarMenuItem = ({ ...props }) => {

	const handleOnClick = (e) => {
		console.log(e.target);
	}
console.log(props.link);
	return (
		<h1
			onMouseEnter={console.log(props.link)}
			to={props.link}
			onClick={handleOnClick}
			value={props.link}
			className='text-white lg:text-lg text-2xl px-6 py-8 font-thin text-end hover:scale-125 cursor-pointer font-montserrat h-16 '
		>
			{props.text}
		</h1>
	);
};
NavBarMenuItem.propTypes = {
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
};

export default NavBarMenuItem;
