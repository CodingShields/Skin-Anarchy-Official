import { useEffect, useState } from "react";
import blackAbstract from "../../../assets/images/blackAbstract.jpg";
import sponsor1 from "../../../assets/images/sponsor-images/sponsor1.png";
import sponsor2 from "../../../assets/images/sponsor-images/sponsor2.png";
import sponsor3 from "../../../assets/images/sponsor-images/sponsor3.png";
import sponsor4 from "../../../assets/images/sponsor-images/sponsor4.png";
import sponsor5 from "../../../assets/images/sponsor-images/sponsor5.png";
const SponsorBarContainer = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full py-48 bg-white h-96 bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white'>
			<h1 className='text-4xl font-bold text-center'>Take a Look At Our Sponsors</h1>
			<div className='relative flex w-full h-full overflow-x-hidden'>
				<div class='py-12 animate-marquee whitespace-nowrap bg-opacity-0'>
					<span className='text-4xl mx-4'>Marquee Item 1</span>
					<span className='text-4xl mx-4'>Marquee Item 2</span>
					<span className='text-4xl mx-4'>Marquee Item 3</span>
					<span className='text-4xl mx-4'>Marquee Item 4</span>
					<span className='text-4xl mx-4'>Marquee Item 5</span>
				</div>

				<div class='absolute top-0 py-12 animate-marquee2 whitespace-nowrap bg-opacity-0'>
					<span className='text-4xl mx-4'>Marquee Item 1</span>
					<span className='text-4xl mx-4'>Marquee Item 2</span>
					<span className='text-4xl mx-4'>Marquee Item 3</span>
					<span className='text-4xl mx-4'>Marquee Item 4</span>
					<span className='text-4xl mx-4'>Marquee Item 5</span>
				</div>
			</div>
		</div>
	);
};

export default SponsorBarContainer;