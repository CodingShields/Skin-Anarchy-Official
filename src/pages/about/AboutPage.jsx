import FeaturedPress from "./FeaturedPressComp";
import MissionStatementComp from "./MissionStatementComp";
import AboutComp from "./AboutComp";
import silkBG from "../../assets/video/silkBG.mp4";
import goldLogo from "../../assets/images/logos/goldLogo.png";

const AboutPage = () => {
	return (
		<div className='w-full h-full animate-fadeIn transition-all duration-500 ease-in'>
			<img src={goldLogo} className='w-[800px] h-[800px] fixed opacity-30 right-1/2 top-1/4' alt='' />

			<video className='w-full fixed opacity-20' autoPlay muted loop id='video'>
				<source src={silkBG} type='video/mp4' />
			</video>
			<div className='h-screen'>
				<MissionStatementComp />
			</div>
			<div className='h-screen'>
				<AboutComp />
			</div>

			<div>
				<FeaturedPress />
			</div>
		</div>
	);
};

export default AboutPage;
