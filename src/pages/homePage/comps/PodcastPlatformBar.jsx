import podcastIconLinks from "../../../assets/data/podcastIconLinks";

const PodcastPlatformBar = () => {
	return (
		<div className='w-full h-fit '>
			<div className='w-10/12 h-fit flex flex-row justify-evenly sm:grid-cols-3 relative mx-auto pb-64 sm:gap-12'>
				{podcastIconLinks.map((item, id) => (
						<a key={id}  href={item.link} target='_blank' rel='noreferrer'>
							<img
								id={item.id}
								className='w-auto h-12 transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125'
								src={item.icon}
								alt={item.icon}
								name={item.name}
							/>
						</a>
				))}
			</div>
		</div>
	);
};

export default PodcastPlatformBar;
