import PropTypes from "prop-types";

import whiteLogo from "../../assets/images/logos/white-logo.png";

const LoginPageNavBar = ({ onClick }) => {

	return (
		<div className='flex flex-row justify-between items-center space-x-12 text-white font-montserrat font-thin text-xl  py-4 uppercase pr-12 bg-black z-20 relative'>
			<div className='inline-flex items-center w-1/2 ml-8 space-x-8'>
				<img className='w-11' src={whiteLogo} />
				<h1 className='text-5xl font-montserrat font-thin'>Skin Anarchy</h1>
			</div>
			<div>
				<button className='uppercase underlineAnimate'>Our Story</button>
				<button className='uppercase underlineAnimate'>Listen Now</button>
				<button onClick={onClick} className='uppercase underlineAnimate'>
					Sign In
				</button>
				<button className='uppercase underlineAnimate'>Join The Movement</button>
			</div>
		</div>
	);
};

LoginPageNavBar.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default LoginPageNavBar;
