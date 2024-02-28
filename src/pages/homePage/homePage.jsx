import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import Banner from "./comps/banner";
import NewsLetterContainer from "./comps/newsLetterContainer";
// import StatsBar from "./comps/statsBar";
import SponsorBarContainer from "./comps/sponsorBarContainer";
import InterviewCategoryContainer from "./comps/interviewCategoryContainer";
import goldLogoIntro from "../../assets/video/goldLogoIntro.mp4";
import FactsBar from "./comps/factsBar";
import PodCastContainer from "./comps/podCasterContainer";
import StatsContainer from "./comps/statsContainer";
import TestimonialsContainer from "./comps/testimonialsContainer";
import BecomeSponsorContainer from "./comps/becomeSponsorContainer";

const HomePage = () => {
	const currentComponent = window.location.pathname;

	console.log(currentComponent);
	return (
		<div className='flex flex-col w-full h-full bg-black bg-opacity-80'>
			<div className='w-full h-full '>
				<video className='w-full h-lg md:object-center' autoPlay muted loop id='video'>
					<source src={goldLogoIntro} type='video/mp4' />
				</video>
				<FactsBar />
				<PodCastContainer />
				<StatsContainer />
				<NewsLetterContainer />
				<InterviewCategoryContainer />
				<SponsorBarContainer />
				<BecomeSponsorContainer />
				<TestimonialsContainer />
			</div>
		</div>
	);
};

export default HomePage;
