import { useState, useEffect } from "react";
import NewsLetterContainer from "./comps/NewsLetterContainer";
import SponsorBarContainer from "./comps/SponsorBarContainer";
import InterviewCategoryContainer from "./comps/InterviewCategoryContainer";
import FactsBar from "./comps/FactsBar";
import PodCastContainer from "./comps/PodCasterContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
import ListenerDemoGraphicsContainer from "./comps/ListenerDemoGraphicsContainer";
import TestimonialsContainer from "./comps/TestimonialsContainer";
import BecomeSponsorContainer from "./comps/BecomeSponsorContainer";
import SignatureBar from "./comps/SignatureBar";
import ShowInviteBar from "./comps/ShowInviteBar";
import GifBg from "../../assets/images/Gif-BG.gif";
import WelcomeBackUserModal from "./comps/WelcomeBackUserModal";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(true);
	const currentComponent = window.location.pathname;

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(false);
		}, 5000);
	}, []);

	console.log(currentComponent);
	return (
		<div className='grid grid-cols-1 w-full h-full bg-black'>
			<img src={GifBg} alt='gif' className='w-3/4 h-full mx-auto' />

			<WelcomeBackUserModal open={openModal} />
			<SignatureBar />
			<FactsBar />
			<PodCastContainer />
			<PodcastAnalyticsContainer />
			<ListenerDemoGraphicsContainer />
			<NewsLetterContainer />
			<InterviewCategoryContainer />
			<SponsorBarContainer />
			<BecomeSponsorContainer />
			<TestimonialsContainer />
		</div>
	);
};

export default HomePage;
