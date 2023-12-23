const AdminStats = () => {
	const updatePodcastStats = [
		"DOWNLOADS PER WEEK",
		"EPISODES RECORDED",
		"SUBSCRIBERS ACROSS PLATFORMS",
		"SOCIAL FOLLOWERS",
	];

	const updatePodcastDemographics = ["WOMEN", "MEN", "AGE 18-34", "AGE 35-59"];

	return (
		<div className='flex flex-col justify-center w-full h-full bg-gray-200 border-2'>
			<div className='flex flex-row w-full h-48 justify-evenly items-center'>
				<div className='flex flex-col items-center justify-center w-ffit h-6/12  py-4 px-4'>
					{updatePodcastStats.map((item, index) => {
						return (
							<div key={index} className='flex flex-col place-items-center w-fit h-fit mt-6 '>
								<p className='text-2xl font-bold text-gray-700'>{item}</p>
								<div className='flex flex-row w-fit h-fit mb-8 space-x-4 mt-4'>
									<div className='bg-blue-300 flex flex-row rounded-lg shadow-md shadow-black'>
										<div className='w-fit h-fit py-2 px-4   text-black text-center '>
											<p className='text-start font-bold text-gray-700'>Current Stats:</p>
											<p>stats data</p>
										</div>
										<div className='w-fit h-fit rounded-lg py-2 px-4 text-black text-center'>
											<p className='text-start font-bold text-gray-700'>Last Updated:</p>
											<p>Date</p>
										</div>
									</div>

									<input className='w-64 h-12 border-2 rounded-lg shadow-md shadow-black' />
									<button className='w-32 h-12 rounded-lg py-2 px-4  bg-blue-400 text-black shadow-md shadow-black active:translate-y-2 hover:bg-blue-600 hover:text-white hover:font-bold'>
										Save
									</button>
								</div>
							</div>
						);
					})}
				</div>
				<div className='flex flex-col items-center justify-center w-ffit h-6/12  py-4 px-4'>
					{updatePodcastDemographics.map((item, index) => {
						return (
							<div key={index} className='flex flex-col place-items-center w-fit h-fit mt-6 '>
								<p className='text-2xl font-bold text-gray-700'>{item}</p>
								<div className='flex flex-row w-fit h-fit mb-8 space-x-4 mt-4'>
									<div className='bg-blue-300 flex flex-row rounded-lg shadow-md shadow-black'>
										<div className='w-fit h-fit py-2 px-4   text-black text-center '>
											<p className='text-start font-bold text-gray-700'>Current Stats:</p>
											<p>stats data</p>
										</div>
										<div className='w-fit h-fit rounded-lg py-2 px-4 text-black text-center'>
											<p className='text-start font-bold text-gray-700'>Last Updated:</p>
											<p>Date</p>
										</div>
									</div>

									<input className='w-64 h-12 border-2 rounded-lg shadow-md shadow-black active:outline-4 active:-inset-4' />
									<button className='w-32 h-12 rounded-lg py-2 px-4  bg-blue-400 text-black shadow-md shadow-black active:translate-y-2 hover:bg-blue-600 hover:text-white hover:font-bold'>
										Save
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default AdminStats;
