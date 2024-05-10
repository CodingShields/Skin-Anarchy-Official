import {useState} from "react";
import LoginModal from "./LoginModal.jsx";
import LoginPageNavBar from "./LoginPageNavBar.jsx";
import mic1 from "../../assets/video/mic1.mp4";
const LoginPage = () => {
	const [loginModal, setLoginModal] = useState(false);

	return (
		<div className='w-full h-fit bg-black animate-fadeIn'>
			<LoginPageNavBar onClick={() => setLoginModal(!loginModal)} />
			<LoginModal open={loginModal} />
	
			<div className='absolute top-0 right-0 h-full w-full opacity-20 grayscale-0 object-cover z-10'>
				<video autoPlay muted loop className='w-full h-full object-fill'>
					<source src={mic1} type='video/mp4' />
				</video>
			</div>
			<div className={!loginModal ? "animate-fadeIn w-full mx-auto h-full z-10 relative py-64 border-b-2 border-white" : "animate-fadeOut w-full mx-auto h-full z-10 relative py-48 border-b-2 border-white"}>
				<div className='flex flex-row justify-center items-center w-full mx-auto h-full'>
					<div className='w-3/4 h-full space-y-8'>
						<h1 className='text-8xl text-gold-500 font-montserrat font-thin uppercase tracking-widest'>The Skin Authority</h1>
						<h1 className='text-4xl text-white font-montserrat font-thin uppercase pl-14 tracking-widest py-2'>
							{" "}
							Worlds Fastest Growing Beauty Podcast
						</h1>
						<h1 className='text-2xl text-white font-montserrat font-thin uppercase pl-24 tracking-widest'>
							Interviews with the top skin care industry experts, founders, brands, Celebrities and doctors
						</h1>
						<div className='w-full  ml-36'>
							<button
								onClick={()=> setLoginModal(!loginModal)}
								className='rounded-xl border-2 border-white text-white uppercase font-montserrat  text-xl hover:font-semibold px-12 py-2 mx-auto cursor-pointer hover:bg-white hover:text-black transition-all duration-500 ease-in-out'>
								Start Listening
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
			className="w-full h-full text-white text-3xl font-montserrat font-thin uppercase tracking-widest text-center pt-32 pb-32"
			>
				<h1> Was thinking about putting some scrolling highlights of blogs podcasts etc ....</h1>
			</div>
		</div>
	);
};

export default LoginPage;
