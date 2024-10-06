import { useState, useRef, useEffect, useCallback } from "react";
import LoginModal from "./LoginModal.jsx";
import LoginPageNavBar from "./LoginPageNavBar.jsx";
import mic1 from "../../assets/video/mic1.mp4";
import PolicyBar from "../disclaimer-privacy-policy/PolicyBar.jsx";
import FactsBar from "./FactsBar.jsx";
import LoginTitle from "./LoginTitle.jsx";
import whiteLogo from "../../assets/images/logos/white-logo.png";

const LoginPage = () => {
	const [loginModal, setLoginModal] = useState(false);
	const [titleComplete, setTitleComplete] = useState(false);
	const titleCompleteRef = useRef(false);

	const handleTitleRender = useCallback(() => {
		setTimeout(() => {
			titleCompleteRef.current = true;
			setTitleComplete(true);
		}, 1000);
	}, []);

	useEffect(() => {
		if (titleCompleteRef.current) {
			setTitleComplete(true);
		}
	}, []);

	return (
		<div className="w-full min-h-screen bg-black animate-fadeIn overscroll-none">
			<LoginModal
				open={loginModal}
				close={() => setLoginModal(false)}
			/>

			<div
				className={`fixed  top-0 right-0 h-full w-full opacity-5  ${loginModal && "blur-md"}`}
			>
				<video
					autoPlay
					muted
					loop
					className="w-full h-screen object-cover relative  "
				>
					<source
						src={mic1}
						type="video/mp4"
					/>
				</video>
			</div>
			<div className="w-full h-fit z-10 text-center flex-col flex justify-center items-center relative overflow-hidden">
				<LoginTitle onComplete={handleTitleRender} />
				<div className="inline-flex items-center w-full justify-center ">
					<img
						className="w-48 lg:w-96 opacity-10 lg:py-4 cursor-pointer absolute top-10 "
						src={whiteLogo}
					/>
					{/* <h1 className="text-2xl lg:text-5xl font-montserrat font-thin whitespace-nowrap text-white">
					Skin Anarchy
				</h1> */}
				</div>
				{titleComplete && (
					<>
						<div className="borderGrow bg-white/50" />
						<LoginPageNavBar onClick={() => setLoginModal(!loginModal)} />

						<FactsBar />
						<PolicyBar />
					</>
				)}
			</div>
		</div>
	);
};

export default LoginPage;
