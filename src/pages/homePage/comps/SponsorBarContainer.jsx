import sponsorImages from "../../../assets/data/homepage/sponsorImages.js";
const SponsorBarContainer = () => {
	return (
		<div className='block static w-full h-full text-white bg-opacity-100 z-10 pt-36 pb-24'>
			<h1 className='text-4xl font-bold text-center py-12'>Take a Look At Our Sponsors</h1>
			<div className='marquee'>
				<div className='marquee-content'>
					{sponsorImages.map((image, index) => (
						<div key={index} className='marquee-item m-auto bg-opacity-100'>
							<img src={image} alt='' />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SponsorBarContainer;
