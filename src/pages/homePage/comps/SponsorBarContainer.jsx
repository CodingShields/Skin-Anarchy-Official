import { useEffect, useState } from "react";
import blackAbstract from "../../../assets/images/blackAbstract.jpg";
import sponsor1 from "../../../assets/images/sponsor-images/sponsor1.png";
import sponsor2 from "../../../assets/images/sponsor-images/sponsor2.png";
import sponsor3 from "../../../assets/images/sponsor-images/sponsor3.png";
import sponsor4 from "../../../assets/images/sponsor-images/sponsor4.png";
import sponsor5 from "../../../assets/images/sponsor-images/sponsor5.png";
const SponsorBarContainer = () => {
	return (
		<div className='block static w-full h-full text-white bg-gradient-to-b from-black to-gold-500 z-10'>
			<h1 className='text-4xl font-bold text-center py-12'>Take a Look At Our Sponsors</h1>
			<div className='marquee'>
				<div className='marquee-content'>
					<div className='marquee-item m-auto'>
						<img src={sponsor1} alt='' />
					</div>

					<div className='marquee-item m-auto'>
						<img src={sponsor2}  alt='' />
					</div>

					<div className='marquee-item m-auto'>
						<img src={sponsor3} alt='' />
					</div>

					<div className='marquee-item m-auto'>
						<img src={sponsor4} alt='' />
					</div>

					<div className='marquee-item m-auto'>
						<img src={sponsor5}  alt='' />
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=06' alt='' />
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=07' alt='' />
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=08' alt='' />
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=01' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=02' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=03' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=04' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=05' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=06' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=07' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>

					<div className='marquee-item'>
						<img src='https://via.placeholder.com/600/000000/FFFFFF/?text=08' alt='' />{" "}
						<h1 className='text-center text-2xl font-bold text-white'> Another Sponsor</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SponsorBarContainer;
