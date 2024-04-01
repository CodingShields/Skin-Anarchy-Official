import { useState, useEffect } from "react";
import NewsLetterContainer from "./comps/NewsLetterContainer";
import SponsorBarContainer from "./comps/SponsorBarContainer";
import InterviewCategoryContainer from "./comps/InterviewCategoryContainer";
// import FactsBar from "./comps/FactsBar";
import PodCastContainer from "./comps/PodCasterContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
// import ListenerDemoGraphicsContainer from "./comps/ListenerDemoGraphicsContainer";
import TestimonialsContainer from "./comps/TestimonialsContainer";
import BecomeSponsorContainer from "./comps/BecomeSponsorContainer";
import SignatureBar from "./comps/SignatureBar";
import ShowInviteBar from "./comps/ShowInviteBar";
import GifBg from "../../assets/images/Gif-BG.gif";
import WelcomeBackUserModal from "./comps/WelcomeBackUserModal";
import HighlightGuests from "./comps/HighlightGuests";
import { useNavStore } from "../../stateStore/useNavStateStore";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(true);
	const currentComponent = window.location.pathname;
	const navBarActive = useNavStore((state) => state.navBarActive);

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(false);
		}, 5000);
	}, []);

	console.log(currentComponent);

	return (
		<div className={`home grid grid-cols-1  ${navBarActive ? "active" : ""}`}>
			<img src={GifBg} alt='gif' className='w-full h-full mx-auto' />

			{/* <WelcomeBackUserModal open={openModal} /> */}
			<SignatureBar />
			{/* <FactsBar /> */}
			<PodCastContainer />
			<PodcastAnalyticsContainer />
			{/* <ListenerDemoGraphicsContainer /> */}
			<NewsLetterContainer />
			<InterviewCategoryContainer />
			<SponsorBarContainer />
			<BecomeSponsorContainer />
			<HighlightGuests />
			<TestimonialsContainer />
		</div>
	);
};

export default HomePage;
