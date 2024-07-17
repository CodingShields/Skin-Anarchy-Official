import { useState, useEffect } from "react";
import { userDeviceInfo } from "../../../utilities/utilities";
const PodcastAnalyticsContainer = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);
	return (
		<div className='flex flex-col justify-center items-center text-center h-screen sm:w-full  relative sm:h-auto'>
			<h3 className='text-6xl sm:text-3xl    text-white uppercase font-montserrat pb-24 sm:pb-0 font-thin tracking-widest sm:mx-auto  sm:text-center'>
				Award Winning {isMobile && <br />}
				Podcast
			</h3>
			<div className='sm:border-t-[1px] sm:border-white  sm:w-3/4 hidden my-2'></div>
			<div className='grid grid-cols-4 gap-8 sm:grid-cols-1'>
				<div className='space-y-4 tracking-widest mx-auto sm:pt-8'>
					<h3 className='text-center text-2xl sm:text-lg font-montserrat font-thin text-white truncate uppercase'>Episodes Recorded</h3>
					<h1 id='counter' className='text-3xl  sm:text-2xl font-montserrat text-white'>
						622+
					</h1>
				</div>
				<div className='space-y-4 tracking-widest mx-auto sm:w-full'>
					<h1 className='text-2xl font-montserrat sm:text-lg font-thin text-white uppercase'>Global Streaming </h1>
					<h1 id='counter' className='text-3xl sm:text-2xl font-montserrat text-white whitespace-nowrap '>
						100+ Countries
					</h1>
				</div>
				<div className='space-y-4 tracking-widest mx-auto'>
					<h1 className='text-2xl font-montserrat font-thin sm:text-lg text-white truncate uppercase'>Total Downloads</h1>
					<h1 id='counter' className='text-3xl sm:text-2xl font-montserrat text-white'>
						9 Million
					</h1>
				</div>

				<div className='space-y-4 tracking-widest mx-auto'>
					<h1 className='text-2xl font-montserrat font-thin text-white  uppercase'>Chart Position</h1>

					<h2 id='counter' className='text-3xl sm:text-2xl font-montserrat text-white tracking-widest'>
						Top 50 Beauty Podcast
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PodcastAnalyticsContainer;
