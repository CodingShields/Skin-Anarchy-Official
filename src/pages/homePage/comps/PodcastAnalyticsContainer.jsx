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
		<div className="flex flex-col justify-center items-center text-center h-3/4 sm:w-full  relative py-36">
			<h3 className="lg:text-6xl text-2xl    text-white uppercase font-montserrat lg:pb-24 pb-0 font-thin tracking-widest mx-auto  sm:text-center">
				Award Winning {isMobile && <br />}
				Podcast
			</h3>
			<div className="border-t-[1px] border-white  w-3/4 hidden my-2"></div>
			<div className="grid lg:grid-cols-4 gap-8 lg:gap-12 grid-cols-1 ">
				<div className="space-y-4 tracking-widest mx-auto pt-8 lg:pt-0 ">
					<h3 className="text-center lg:text-2xl text-lg font-montserrat font-thin text-white truncate uppercase tracking-widest">
						Episodes Recorded
					</h3>
					<h1
						id="counter"
						className="lg:text-3xl text-2xl font-montserrat text-white tracking-widest py-2 "
					>
						700+
					</h1>
				</div>
				<div className="space-y-4 tracking-widest mx-auto sm:w-full">
					<h3 className="text-center lg:text-2xl text-lg font-montserrat font-thin text-white truncate uppercase tracking-widest">
						Global Streaming{" "}
					</h3>
					<h1
						id="counter"
						className="lg:text-3xl text-2xl font-montserrat text-white tracking-widest py-2 "
					>
						100+ Countries
					</h1>
				</div>
				<div className="space-y-4 tracking-widest mx-auto">
					<h3 className="text-center lg:text-2xl text-lg font-montserrat font-thin text-white truncate uppercase tracking-widest">
						Total Downloads
					</h3>
					<h1
						id="counter"
						className="lg:text-3xl text-2xl font-montserrat text-white tracking-widest py-2 "
					>
						12+ Million
					</h1>
				</div>

				<div className="space-y-4 tracking-widest mx-auto">
					<h3 className="text-center lg:text-2xl text-lg font-montserrat font-thin text-white truncate uppercase tracking-widest">
						Chart Position
					</h3>

					<h2
						id="counter"
						className="lg:text-3xl text-2xl font-montserrat text-white tracking-widest py-2 "
					>
						Top 5 Beauty Podcast
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PodcastAnalyticsContainer;
