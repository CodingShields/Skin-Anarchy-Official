import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import Banner from "./comps/banner";
import NewsLetterContainer from "./comps/newsLetterContainer";
// import StatsBar from "./comps/statsBar";
import SponsorBarContainer from "./comps/sponsorBarContainer";
import InterviewCategoryContainer from "./comps/interviewCategoryContainer";
import goldLogoIntro from "../../assets/video/goldLogoIntro.mp4";
import FactsBar from "./comps/FactsBar";
import PodCastContainer from "./comps/podCasterContainer";
import StatsContainer from "./comps/StatsContainer";
import TestimonialsContainer from "./comps/testimonialsContainer";
import BecomeSponsorContainer from "./comps/becomeSponsorContainer";
import SignatureBar from "./comps/SignatureBar";
import ShowInviteBar from "./comps/ShowInviteBar";
import GifBg from "../../assets/images/Gif-Bg.gif";

const HomePage = () => {
	const currentComponent = window.location.pathname;

	console.log(currentComponent);
	return (
		<div className='flex flex-col w-full h-full bg-black'>
				{/* <video className='w-3/4 h-lg mx-auto md:object-center' autoPlay muted loop id='video'>
					<source src={goldLogoIntro} type='video/mp4' />
				</video> */}
			<img src={GifBg} alt='gif' className='w-3/4 h-full mx-auto' />
			<SignatureBar />
			<FactsBar />
			<PodCastContainer />
			<StatsContainer />
			<NewsLetterContainer />
			<InterviewCategoryContainer />
			<SponsorBarContainer />
			<BecomeSponsorContainer />
			<TestimonialsContainer />
		</div>
	);
};

export default HomePage;
