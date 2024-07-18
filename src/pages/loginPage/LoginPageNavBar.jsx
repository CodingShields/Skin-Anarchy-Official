import PropTypes from "prop-types";
import whiteLogo from "../../assets/images/logos/white-logo.png";
import { Button } from "../components/Components";
const LoginPageNavBar = ({ onClick }) => {
	return (
		<div className='sm:w-full flex flex-row sm:flex-col justify-between w-full items-center relative sm:space-x-2 space-x-12 text-white font-montserrat  animate-fadeInSlow font-thin text-xl  py-4 uppercase  bg-black/50 z-50 relative'>
			<div className='inline-flex items-center w-1/2 sm:w-full sm:justify-center ml-8 space-x-8'>
				<img className='w-11 cursor-pointer' src={whiteLogo} onClick={onClick} />
				<h1 className='sm:text-2xl text-5xl font-montserrat font-thin whitespace-nowrap'>Skin Anarchy</h1>
			</div>
			<div className='inline-flex  sm:mt-4 sm:bg-white sm:py-4 lg:items-end lg:justify-center items-center justify-end w-full space-x-8 pr-4'>
				<Button onClick={onClick} style='sm:text-xs uppercase underlineAnimate sm:hidden sm:collapse whitespace-nowrap text-lg' text='Our Story' />
				<Button
					onClick={onClick}
					style='sm:text-xs uppercase underlineAnimate sm:text-center sm:text-black sm:w-full sm:font-semibold whitespace-nowrap'
					text='Listen Now'
				/>
				<Button
					onClick={onClick}
					style=' sm:text-xs uppercase underlineAnimate sm:text-center sm:text-black sm:w-full sm:font-semibold whitespace-nowrap'
					text='Sign In'
				/>
				<Button onClick={onClick} style='sm:text-xs uppercase underlineAnimate sm:hidden sm:collapse whitespace-nowrap' text='Join The Movement' />
			</div>
		</div>
	);
};

LoginPageNavBar.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LoginPageNavBar;
