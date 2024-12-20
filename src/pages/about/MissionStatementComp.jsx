import { useEffect } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";

const MissionStatementComp = () => {
	useEffect(() => {
		StartPageLoadTop();
	}, []);

	return (
		<div className="w-full flex flex-col h-fit justify-start items-center mx-auto pb-24 lg:pb-48 animate-fadeIn">
			<div className="w-10/12 lg:w-3/4">
				<h2 className="text-3xl lg:text-7xl text-white font-montserrat mt-24 lg:mt-48 tracking-widest font-thin pb-4 mb-6 lg:pb-14 text-center border-b-[1px] border-white/30  lg:border-none">
					The Skin Anarchy Mission
				</h2>
				<div className="w-11/12 lg:w-1/2 mx-auto block text-lg lg:text-xl font-montserrat text-white font-thin indent-0 lg:indent-10 tracking-widest space-y-6 lg:space-y-12 ">
					<p className="leading-8 lg:leading-[60px] text-justify break-all	">
						At Skincare Anarchy, our mission is to peel back the layers of the
						beauty industry and provide our listeners with an insider’s
						perspective.
					</p>
					<p className="leading-8 lg:leading-[60px] text-justify break-all	">
						We are dedicated to bringing the behind-the-scenes of the beauty
						world to the forefront, offering our audience an exclusive glimpse
						into the innovation, artistry, and science that shape this vibrant
						industry.
					</p>
					<p className="leading-8 lg:leading-[60px] text-justify break-all	">
						Through engaging conversations with professionals and thought
						leaders, we aim to empower our listeners with scientific knowledge
						and transparency, inspire them with stories, and foster a community
						of beauty enthusiasts who are passionate about learning and growing
						together.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MissionStatementComp;
