import { useEffect } from "react";
import { StartPageLoadTop } from "../../utilities/utilities";


const MissionStatementComp = () => {

	useEffect(() => {
		StartPageLoadTop();
	}, []);

	
	return (
		<div className='w-full flex flex-col h-full justify-start items-center mx-auto mb-24 animate-fadeIn'>
			<div>
				<h2 className='text-7xl text-white font-montserrat mt-48 tracking-widest font-thin pb-14 text-center'>The Skin Anarchy Mission:</h2>
				<div className='w-3/4 mx-auto block text-3xl font-montserrat text-white text-justify font-thin indent-10 tracking-widest space-y-12 '>
					<p className='leading-[60px]'>
						At Skincare Anarchy, our mission is to peel back the layers of the beauty industry and provide our listeners with an insider’s
						perspective.
					</p>
					<p className='leading-[60px]'>
						We are dedicated to bringing the behind-the-scenes of the beauty world to the forefront, offering our audience an exclusive glimpse into
						the innovation, artistry, and science that shape this vibrant industry.
					</p>
					<p className='leading-[60px]'>
						Through engaging conversations with professionals and thought leaders, we aim to empower our listeners with scientific knowledge and
						transparency, inspire them with stories, and foster a community of beauty enthusiasts who are passionate about learning and growing
						together.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MissionStatementComp;
