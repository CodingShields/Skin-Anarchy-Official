import PropTypes from "prop-types";
import whiteLogo from "../../assets/images/logos/white-logo.png";

const LoginPageNavBar = ({ onClick }) => {
	return (
		<div className='sm:w-full flex flex-row sm:flex-col justify-between items-center sm:space-x-2 space-x-12 text-white font-montserrat font-thin text-xl  py-4 uppercase  bg-black z-50 relative'>
			<div className='inline-flex items-center w-1/2 sm:w-full sm:justify-center ml-8 space-x-8'>
				<img className='w-11 cursor-pointer' src={whiteLogo} onClick={onClick} />
				<h1 className='sm:text-2xl text-5xl font-montserrat font-thin whitespace-nowrap'>Skin Anarchy</h1>
			</div>
			<div className='inline-flex  sm:mt-4 sm:bg-white sm:py-4 lg:items-end lg:justify-end sm:w-full w-1/2  space-x-8 '>
				<button onClick={onClick} className='sm:text-xs uppercase underlineAnimate sm:hidden sm:collapse'>
					Our Story
				</button>
				<button onClick={onClick} className='sm:text-xs uppercase underlineAnimate sm:text-center sm:text-black sm:w-full sm:font-semibold '>
					Listen Now
				</button>
				<button onClick={onClick} className=' sm:text-xs uppercase underlineAnimate sm:text-center sm:text-black sm:w-full sm:font-semibold'>
					Sign In
				</button>
				<button onClick={onClick} className='sm:text-xs uppercase underlineAnimate sm:hidden sm:collapse'>
					Join The Movement
				</button>
			</div>
		</div>
	);
};

LoginPageNavBar.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LoginPageNavBar;
