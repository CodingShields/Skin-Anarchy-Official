import FeaturedPress from "./FeaturedPressComp";
import MissionStatementComp from "./MissionStatementComp";
import AboutComp from "./AboutComp";
import silkBG from "../../assets/video/silkBG.mp4";
import goldLogo from "../../assets/images/logos/goldLogo.png";

const AboutPage = () => {
	return (
		<div className='w-full h-full animate-fadeIn  relative'>
			<video className='w-full fixed opacity-20' autoPlay muted loop id='video'>
				<source src={silkBG} type='video/mp4' />
			</video>
			<MissionStatementComp />
			<AboutComp />
			<FeaturedPress />
		</div>
	);
};

export default AboutPage;
