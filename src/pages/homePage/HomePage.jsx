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
import HighlightGuests from "./comps/HighlightGuests";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(true);
	const currentComponent = window.location.pathname;

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(false);
		}, 5000);
	}, []);

	console.log(currentComponent);

	const [isActive, setIsActive] = useState(false);
	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={`container ${isActive ? "active" : ""} bg-char-900`}>
			<div className={`links ${isActive ? "active" : ""} bg-char-900`}>
				<ul>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.05s;",
							// }}
						>
							Home
						</a>
					</li>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.1s;",
							// }}
						>
							Services
						</a>
					</li>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.15s;",
							// }}
						>
							Portfolio
						</a>
					</li>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.2s;",
							// }}
						>
							Testimonials
						</a>
					</li>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.25s;",
							// }}
						>
							About
						</a>
					</li>
					<li>
						<a
							href='#'
							// style={{
							// 	animation: "--i: 0.3s;",
							// }}
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className='navBar'>
				<div className={`menu ${isActive ? "active" : ""}`}>
					<div onClick={toggleActive} className='hamburger-menu'>
						<div className={`bar ${isActive ? "active" : ""}`}></div>
					</div>
				</div>
			</div>

			<div className={`mainContainer ${isActive ? "active" : ""}`}>
				<div className={`main ${isActive ? "active" : ""}`}>
					<img src={GifBg} alt='gif' className='w-full h-full mx-auto' />
				</div>

				<div className='shadow one bg-black bg-opacity-60'></div>
				<div className='shadow two bg-black bg-opacity-40'></div>
			</div>

			<div classNameName='grid grid-cols-1 w-full h-full bg-black'>
				<WelcomeBackUserModal open={openModal} />
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
		</div>
	);
};

export default HomePage;
