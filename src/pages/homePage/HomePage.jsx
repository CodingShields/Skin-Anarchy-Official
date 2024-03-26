import NewsLetterContainer from "./comps/newsLetterContainer";
import SponsorBarContainer from "./comps/sponsorBarContainer";
import InterviewCategoryContainer from "./comps/interviewCategoryContainer";
import FactsBar from "./comps/FactsBar";
import PodCastContainer from "./comps/podCasterContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
import ListenerDemoGraphicsContainer from "./comps/ListenerDemoGraphicsContainer";
import TestimonialsContainer from "./comps/testimonialsContainer";
import BecomeSponsorContainer from "./comps/BecomeSponsorContainer";
import SignatureBar from "./comps/SignatureBar";
import ShowInviteBar from "./comps/ShowInviteBar";
import GifBg from "../../assets/images/Gif-Bg.gif";

const HomePage = () => {
	const currentComponent = window.location.pathname;

	console.log(currentComponent);
	return (
		<div className='grid grid-cols-1 w-full h-full bg-black'>
			<img src={GifBg} alt='gif' className='w-3/4 h-full mx-auto' />
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
