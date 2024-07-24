import { useState, useRef, useEffect, useCallback } from "react";
import LoginModal from "./LoginModal.jsx";
import LoginPageNavBar from "./LoginPageNavBar.jsx";
import mic1 from "../../assets/video/mic1.mp4";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
import FactsBar from "../homePage/comps/FactsBar.jsx";
import LoginTitle from "./LoginTitle.jsx";

const LoginPage = () => {
	const [loginModal, setLoginModal] = useState(false);
	const [titleComplete, setTitleComplete] = useState(false);
	const titleCompleteRef = useRef(false);

	const handleTitleRender = useCallback(() => {
		setTimeout(() => {
			titleCompleteRef.current = true;
			setTitleComplete(true);
		}, 3000);
	}, []);

	useEffect(() => {
		if (titleCompleteRef.current) {
			setTitleComplete(true);
		}
	}, []);

	return (
		<div className='w-full h-screen bg-black animate-fadeIn '>
			<LoginPageNavBar onClick={() => setLoginModal(!loginModal)} />
			<LoginModal open={loginModal} close={() => setLoginModal(false)} />

			<div className={`absolute sm:hidden top-0 right-0 h-full w-full opacity-20  ${loginModal && "blur-md"}`}>
				<video autoPlay muted loop className='w-full h-screen object-cover relative'>
					<source src={mic1} type='video/mp4' />
				</video>
			</div>
			<div className='w-full h-fit z-10 text-center flex-col flex justify-center items-center relative overflow-hidden'>
				<LoginTitle onComplete={handleTitleRender} />
				{titleComplete && (
					<>
						<div className='borderGrow bg-white/50' />
						<FactsBar />
						<PolicyBar />
					</>
				)}
			</div>
			<h1 className="text-red-500 text-3xl"> WANT TO ADD MORE CONTENT HERE</h1>
		</div>
	);
};

export default LoginPage;
