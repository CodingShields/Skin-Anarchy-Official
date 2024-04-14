import { useState, useEffect } from "react";
import HeadLine from "./comps/HeadLine";
import Podcast from "./comps/Podcast";
// import NewsLetterContainer from "./comps/NewsLetterContainer";
import SponsorBarContainer from "./comps/SponsorBarContainer";
import InterviewCategoryContainer from "./comps/InterviewCategoryContainer";
// import FactsBar from "./comps/FactsBar";
// import PodCastContainer from "./comps/PodCasterContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
// import ListenerDemoGraphicsContainer from "./comps/ListenerDemoGraphicsContainer";
import TestimonialsContainer from "./comps/TestimonialsContainer";
// import BecomeSponsorContainer from "./comps/BecomeSponsorContainer";
import SignatureBar from "./comps/SignatureBar";
// import GifBg from "../../assets/images/Gif-BG.gif";
import WelcomeBackUserModal from "./comps/WelcomeBackUserModal";
import PodcastPlatformBar from "./comps/PodcastPlatformBar";
import newMic from "../../assets/video/newMic.mp4";
import ChatBot from "../components/ChatBot";
import PodcastWidget from "../components/PodcastWidget";
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
		<div className='w-full h-full '>
			<div className='fixed'>
				{/* Set a custom 15 % opacity */}
				<video className='w-screen opacity-20 grayscale ' autoPlay muted loop id='video' src={newMic}></video>
			</div>
			<div className='fixed'>
				<div id='cursor' className='cursor '></div>
			</div>
			<div className='w-full h-full bg-black bg-opacity-50'></div>
			<HeadLine />
			<SignatureBar />
			<SponsorBarContainer />
			<WelcomeBackUserModal open={openModal} />
			<PodcastWidget />
			<PodcastPlatformBar />
			<PodcastAnalyticsContainer />
			{/* <NewsLetterContainer /> */}
			<InterviewCategoryContainer />
			{/* <BecomeSponsorContainer /> */}
			<TestimonialsContainer />
			<ChatBot />
		</div>
	);
};

export default HomePage;
