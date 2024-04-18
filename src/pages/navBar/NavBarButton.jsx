
const NavBarButton = ({ text, icon, toggle }) => {
	
	return (
		<div onClick={toggle} className='inline-flex items-center cursor-pointer hover:scale-110 underlineAnimate'>
			<h1 className='whitespace-nowrap'>{text}</h1>
			{icon && <img className='w-8 h-8 pl-2  transition-all ease-in-out duration-300' src={icon} />}
		</div>
	);
};

export default NavBarButton;
