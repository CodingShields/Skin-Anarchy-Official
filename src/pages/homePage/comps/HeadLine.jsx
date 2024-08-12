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
		<div className='w-full h-screen text-white flex flex-col justify-center  relative'>
			<div className='inline-flex justify-center items-center sm:flex sm:flex-col sm:mb-auto w-full sm:max-h-screen sm:w-screen sm:justify-center pt-10 sm:mt-36 sm:animate-fadeIn text-gold-500 font-thin  text-8xl text-center subpixel-antialiased tracking-[14px] font-montserrat '>
				<h1 className='sm:w-full sm:text-center sm:text-7xl'>SKIN</h1>
				<h1 className='sm:w-full sm:text-center sm:text-5xl sm:mt-4 px-8'>ANARCHY</h1>
				{isMobile && (
					<h1 className='text-4xl sm:text-[15px] text-center pt-10 sm:pt-12  text-white/20  font-montserrat font-semibold sm:leading-[50px] tracking-[10px]'>
						THE FASTEST GROWING BEAUTY PODCAST
					</h1>
				)}
			</div>
			{!isMobile && (
				<h1 className='text-4xl sm:text-[15px] text-center pt-10 sm:pt-12 text-white/70 font-montserrat tracking-[10px]'>
					THE FASTEST GROWING BEAUTY PODCAST
				</h1>
			)}
		</div>
	);
};

export default HeadLine;
