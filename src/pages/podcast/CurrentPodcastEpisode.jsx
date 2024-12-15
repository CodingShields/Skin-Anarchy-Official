import EpisodesList from "./comp/EpisodesList.jsx";
const CurrentPodcastEpisode = () => {
	return (
		<div className="w-11/12 min-h-screen animate-fadeIn mx-auto overscroll-x-none overflow-hidden">
			<div className="w-full h-full flex flex-col justify-start items-center text-center mt-24">
				<div className=" w-full lg:w-[1600px] h-fit ">
					<h1 className="text-2xl lg:text-4xl font-montserrat font-thin text-white uppercase tracking-widest mb-4">
						Current Episode
					</h1>
					<iframe
						className="w-fit h-[352px] mx-auto select-none hidden lg:block"
						src="https://open.spotify.com/embed/show/298oIu74qjd3pXaaBMDr19?utm_source=generator&theme=0"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
					></iframe>
				</div>
				<div className="w-full mt-2 lg:mt-12 min-h-full pb-10">
					<EpisodesList />
				</div>
			</div>
		</div>
	);
};

export default CurrentPodcastEpisode;
