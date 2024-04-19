import { useState, useEffect } from "react";
import HeadLine from "./comps/HeadLine";
import SponsorBarContainer from "./comps/SponsorBarContainer";
import InterviewCategoryContainer from "./comps/InterviewCategoryContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
import TestimonialsContainer from "./comps/TestimonialsContainer";
import SignatureBar from "./comps/SignatureBar";
import WelcomeBackUserModal from "./comps/WelcomeBackUserModal";
import PodcastPlatformBar from "./comps/PodcastPlatformBar";
import TopPicks from "./comps/TopPicks";
import ChatBot from "../components/ChatBot";
import PodcastWidget from "../components/PodcastWidget";
import headLineBg from "../../assets/images/headLineBg.png";
import ListenerDemoGraphicsContainer from "./comps/ListenerDemoGraphicsContainer";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(true);
	const currentComponent = window.location.pathname;

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(false);
		}, 5000);
	}, []);

	console.log(currentComponent);

	useEffect(() => {
		const handleMouseMove = (event) => {
			let elem = document.querySelector(".cursor");
			if (elem) {
				let cursorWidth = elem.offsetWidth / 2;
				let cursorHeight = elem.offsetHeight / 1.5;
				let mouseX = event.clientX - cursorWidth;
				let mouseY = event.clientY - cursorHeight;
				elem.style.left = mouseX + "px";
				elem.style.top = mouseY + "px";
			}
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className='w-full h-full relative'>
			<div className='fixed'>
				{/* Set a custom 15 % opacity */}
				{/* <video className='w-screen opacity-20 grayscale ' autoPlay muted loop id='video' src={newMic}></video> */}
				<img className='w-screen opacity-20 grayscale ' autoPlay muted loop id='video' src={headLineBg} />
			</div>
			<div className='fixed'>
				<div id='cursor' className='cursor '></div>
			</div>
			<div className='w-full h-full relative'></div>
			<HeadLine />
			<SponsorBarContainer />
			<SignatureBar />
			<InterviewCategoryContainer />
			<WelcomeBackUserModal open={openModal} />
			<PodcastWidget />
			<PodcastPlatformBar />
			<PodcastAnalyticsContainer />
			<TopPicks />
			<TestimonialsContainer />
			<ChatBot />
		</div>
	);
};

export default HomePage;
