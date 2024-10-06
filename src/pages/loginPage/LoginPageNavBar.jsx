import PropTypes from "prop-types";
import { Button } from "../components/Components";
const LoginPageNavBar = ({ onClick }) => {
	return (
		<div className="flex flex-col lg:flex-row  lg:justify-center justify-start items-center  font-montserrat tracking-widest w-full h-fit font-thin animate-fadeInSlow py-2">
			<Button
				onClick={onClick}
				style="text-xl lg:text-2xl lg:hover:text-[34px] transition-all ease-in-out duration-500 h-10 lg:h-24 uppercase lg:underlineAnimate  w-full lg:w-1/4 text-left lg:text-center text-white/70  whitespace-nowrap hover:text-white"
				text="Our Story"
			/>
			<Button
				onClick={onClick}
				style="text-xl lg:text-2xl lg:hover:text-[34px] transition-all ease-in-out duration-500 h-10 lg:h-24 uppercase lg:underlineAnimate  w-full lg:w-1/4 text-left lg:text-center text-white/70  whitespace-nowrap hover:text-white"
				text="Listen Now"
			/>
			<Button
				onClick={onClick}
				style="text-xl lg:text-2xl lg:hover:text-[34px] transition-all ease-in-out duration-500 h-10 lg:h-24 uppercase lg:underlineAnimate  w-full lg:w-1/4 text-left lg:text-center text-white/70  whitespace-nowrap hover:text-white"
				text="Sign In"
			/>
			<Button
				onClick={onClick}
				style="text-xl lg:text-2xl lg:hover:text-[34px] transition-all ease-in-out duration-500 h-10 lg:h-24 uppercase lg:underlineAnimate  w-full lg:w-1/4 text-left lg:text-center text-white/70  whitespace-nowrap hover:text-white"
				text="Join The Movement"
			/>
		</div>
	);
};

LoginPageNavBar.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default LoginPageNavBar;
