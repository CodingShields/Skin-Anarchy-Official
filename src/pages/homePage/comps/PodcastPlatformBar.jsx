import podcastIconLinks from "../../../assets/data/podcastIconLinks";

const PodcastPlatformBar = () => {
	return (
		<div className="w-full h-fit ">
			<div className="w-10/12 h-fit flex lg: flex-wrap flex-row justify-evenly sm:grid-cols-3 relative mx-auto lg:pb-64 gap-12">
				<h1 className="text-white font-montserrat text-sm tracking-widest text-center w-10/12 lg:leading-10 leading-6 lg:hidden uppercase">
					Listen To All Our Podcasts On These Platforms
				</h1>
				{podcastIconLinks.map((item, id) => (
					<a
						key={id}
						href={item.link}
						target="_blank"
						rel="noreferrer"
					>
						<img
							id={item.id}
							className="w-auto h-8 lg:h-12 transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
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
