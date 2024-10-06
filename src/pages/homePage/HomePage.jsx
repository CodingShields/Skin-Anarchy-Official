import { useState, useEffect } from "react";
import { StartPageLoadTop, userDeviceInfo } from "../../utilities/utilities";
import HeadLine from "./comps/HeadLine";
import SponsorBarContainer from "./comps/SponsorBarContainer";
import PodcastAnalyticsContainer from "./comps/PodcastAnalyticsContainer";
import TestimonialsContainer from "./comps/TestimonialsContainer";
import SignatureBar from "./comps/SignatureBar";
import WelcomeBackUserModal from "./comps/WelcomeBackUserModal";
import PodcastPlatformBar from "./comps/PodcastPlatformBar";
import TopPicks from "./comps/TopPicks";
import PodCast from "../homePage/comps/Podcast";
import "../../styles/custom.scss";
const HomePage = () => {
	const [openModal, setOpenModal] = useState(true);
	const currentComponent = window.location.pathname;

	useEffect(() => {
		setTimeout(() => {
			setOpenModal(false);
		}, 3000);
	}, []);

	useEffect(() => {
		StartPageLoadTop();
	}, []);

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
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);
	return (
		<div className="w-full min-h-screen lg:relative animate-fadeIn  overscroll-x-none overflow-hidden  ">
			{isMobile ? (
				""
			) : (
				<div className="with-bg-size h-full w-screen  opacity-30 fixed top-0 left-0   bg-center bg-cover overflow-x-hidden overscroll-x-none"></div>
			)}

			<div
				id="cursor"
				className="fixed cursor hidden lg:block"
			></div>
			<HeadLine />
			<SponsorBarContainer />
			<SignatureBar />
			<WelcomeBackUserModal open={openModal} />
			<PodCast />
			<PodcastPlatformBar />
			<PodcastAnalyticsContainer />
			<TopPicks />
			<TestimonialsContainer />
		</div>
	);
};

export default HomePage;
