import { useState, useEffect } from "react";
import { userDeviceInfo } from "../../../utilities/utilities";

const HeadLine = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (userDeviceInfo()) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, []);

	return (
		<div className="w-full h-screen text-white flex flex-col justify-center  relative">
			<div className="flex flex-col lg:inline-flex  lg:items-center justify-center h-3/4   lg:space-y-28 w-full  lg:pt-36 animate-fadeIn text-gold-500 font-thin  text-center lg:whitespace-nowrap  tracking-[24px] lg:tracking-[60px] font-montserrat ">
				<h1 className="w-full lg:w-fit text-center text-6xl lg:text-[300px]">
					SKIN
				</h1>
				<h1 className="w-full lg:w-fit text-center text-4xl lg:text-[300px] sm:mt-4 px-8 lg:pb-10">
					ANARCHY
				</h1>
				{isMobile && (
					<h1 className="lg:text-4xl leading-10 text-[15px] text-center pt-10 sm:pt-12  text-white/20  font-montserrat font-semibold sm:leading-[50px] tracking-[10px]">
						THE FASTEST GROWING BEAUTY PODCAST
					</h1>
				)}{" "}
				{!isMobile && (
					<h1 className="lg:text-5xl text-[15px] text-center pt-10 sm:pt-12 text-white/70 font-montserrat tracking-[10px]">
						THE FASTEST GROWING BEAUTY PODCAST
					</h1>
				)}
			</div>
		</div>
	);
};

export default HeadLine;
