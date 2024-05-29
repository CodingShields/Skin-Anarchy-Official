import NavBar from "../navBar/NavBar";

const Header = () => {
	return (
		<div className='fixed z-30 flex flex-row justify-center items-center w-full top-0'>
			<NavBar />
		</div>
	);
};

export default Header;
