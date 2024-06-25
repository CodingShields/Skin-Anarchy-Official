import { useState } from "react";
import { buttonStyle } from "../../styles/responsiveStyling.js";
import { userDeviceInfo } from "../../utilities/utilities.js";
import Button from "../components/Button.jsx";
import LoginModal from "./LoginModal.jsx";
import LoginPageNavBar from "./LoginPageNavBar.jsx";
import mic1 from "../../assets/video/mic1.mp4";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
const LoginPage = () => {
	const [loginModal, setLoginModal] = useState(false);
	console.log(userDeviceInfo());
	return (
		<div className='w-full max-h-screen bg-black animate-fadeIn'>
			<LoginPageNavBar onClick={() => setLoginModal(!loginModal)} />
			<LoginModal open={loginModal} />

			<div className='absolute sm:hidden top-0 right-0 h-full w-full opacity-20 grayscale-0 object-cover z-10'>
				<video autoPlay muted loop className='w-full h-full object-fill'>
					<source src={mic1} type='video/mp4' />
				</video>
			</div>
			<div
				className={
					!loginModal
						? "flex flex-col justify-center items-center animate-fadeIn w-full mx-auto h-full z-10 relative border-b-2 border-white space-y-8 text-center py-8"
						: "flex flex-col justify-center items-center animate-fadeOut w-full mx-auto h-full z-10 relative py-48 border-b-2 border-white"
				}
			>
				<h1 className='sm:text-2xl text-8xl text-gold-500 font-montserrat font-thin uppercase tracking-widest whitespace-nowrap sm:mt-8 mt-24'>
					The Skin Authority
				</h1>
				<h1 className='sm:text-lg text-4xl text-white font-montserrat font-thin uppercase tracking-widest py-2 sm:py-0 sm:text-center '>
					{" "}
					Worlds Fastest Growing Beauty Podcast
				</h1>
				<h1 className='sm:text-sm text-2xl text-white font-montserrat font-thin uppercase ml-24 sm:py-0 tracking-widest text-center sm:ml-2  sm:w-full w-3/4'>
					Interviews with the top skin care industry experts, founders, brands, Celebrities and doctors
				</h1>
				<div className='w-full '>
					<Button onClick={() => setLoginModal(!loginModal)} className={buttonStyle} text='Sign In'></Button>
				</div>
			</div>
			<div className='w-full h-full block text-white sm:text-xs text-3xl font-montserrat font-thin uppercase tracking-widest text-center '>
				<h1> Was thinking about putting some scrolling highlights of blogs podcasts etc ....</h1>
				<PolicyBar />
			</div>
		</div>
	);
};

export default LoginPage;
