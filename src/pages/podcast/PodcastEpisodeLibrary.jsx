const PodcastEpisodeLibrary = () => {
	const categories = [
		{
			name: "Episode Categories",
			categories: ["Brands and Industry Leaders", "Celebrities", "Doctors and Professionals", "Journalists", "Master Classes"],
		},
		{
			name: "Weekly Series",
			categories: ["Mindset Monday", "Makeup Monday", "Wisdom of Women Wednesday", "Fragrance Friday", "Fashion Friday"],
		},
	];

	return (
		<div className='w-full h-screen'>
			<div className='w-3/4 h-full mx-auto flex flex-col place-items-center bg-black text-white p-4'>
				<h1>Previous Episodes</h1>
				<h1> Category Nav Bar</h1>
			</div>
		</div>
	);
};

export default PodcastEpisodeLibrary;
