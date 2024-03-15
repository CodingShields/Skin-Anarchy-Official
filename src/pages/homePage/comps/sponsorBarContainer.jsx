import { useEffect, useState } from "react";
import blackAbstract from "../../../assets/images/blackAbstract.jpg";
import sponsor1 from "../../../assets/images/sponsor-images/sponsor1.png";
import sponsor2 from "../../../assets/images/sponsor-images/sponsor2.png";
import sponsor3 from "../../../assets/images/sponsor-images/sponsor3.png";
import sponsor4 from "../../../assets/images/sponsor-images/sponsor4.png";
import sponsor5 from "../../../assets/images/sponsor-images/sponsor5.png";
const SponsorBarContainer = () => {
	return (
		<div className='flex flex-col items-center justify-center w-full h-fit bg-white z-20 overflow-y-none relative space-y-24'>
			<div className='w-full h-full flex flex-col justify-start'>
				<h1 className='text-4xl font-bold text-center mt-20 font-glacialRegular'>Take a Look At Our Sponsors</h1>
			</div>
			<div id='carousel-container' className="w-full h-fit">
				<div id='carousel'>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor1} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor2} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor3} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor4} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-50'>
						<img src={sponsor5} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor5} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor5} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor5} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor5} />
					</div>
					<div id='sponsor-image' className='block absolute bg-gold-500 bg-opacity-70'>
						<img src={sponsor5} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorBarContainer;
