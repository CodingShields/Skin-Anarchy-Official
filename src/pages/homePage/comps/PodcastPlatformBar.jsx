import podcastIconLinks from "../../../assets/data/podcastIconLinks";

const PodcastPlatformBar = () => {
	return (
		<div className='w-full h-fit '>
			<div className='w-3/4 h-fit grid grid-cols-12 sm:grid-cols-3 relative mx-auto pb-64 sm:gap-12'>
				{podcastIconLinks.map((item, id) => (
					<div className=' h-fit w-20' key={id}>
						<a href={item.link} target='_blank' rel='noreferrer'>
							<img
								id={item.id}
								className='w-auto h-12 transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125'
								src={item.icon}
								alt={item.icon}
								name={item.name}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default PodcastPlatformBar;
