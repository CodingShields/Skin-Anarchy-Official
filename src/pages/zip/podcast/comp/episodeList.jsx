const EpisodeList = () => {
	const plans = [
		{ id: "123", name: "Episode - 1", description: "Some Text" },
		{ id: "234", name: "Episode - 2", description: "Some Text" },
		{ id: "345", name: "Episode - 3", description: "Some Text" },
		{ id: "456", name: "Episode - 4", description: "Some Text" },
		{ id: "567", name: "Episode - 5", description: "Some Text" },
		{ id: "678", name: "Episode - 6", description: "Some Text" },
		{ id: "789", name: "Episode - 7", description: "Some Text" },
		{ id: "890", name: "Episode - 8", description: "Some Text" },
		{ id: "901", name: "Episode - 9", description: "Some Text" },
		{ id: "012", name: "Episode - 10", description: "Some Text" },
		{ id: "1234", name: "Episode - 11", description: "Some Text" },
		{ id: "2345", name: "Episode - 12", description: "Some Text" },
		{ id: "3456", name: "Episode - 13", description: "Some Text" },
		{ id: "4567", name: "Episode - 14", description: "Some Text" },
		{ id: "5678", name: "Episode - 15", description: "Some Text" },
		{ id: "6789", name: "Episode - 16", description: "Some Text" },
		{ id: "7890", name: "Episode - 17", description: "Some Text" },
		{ id: "8901", name: "Episode - 18", description: "Some Text" },
		{ id: "9012", name: "Episode - 19", description: "Some Text" },
		{ id: "0123", name: "Episode - 20", description: "Some Text" },
		{ id: "12345", name: "Episode - 21", description: "Some Text" },
		{ id: "23456", name: "Episode - 22", description: "Some Text" },
		{ id: "34567", name: "Episode - 23", description: "Some Text" },
	];

	return (
		<div className='space-y-10 flex flex-col h-64'>
			{plans.map((plan) => (
				<div key={plan.id} className='relative flex items-start'>
					<div className='flex h-6 items-center'>
						<input
							id={plan.id}
							aria-describedby={`${plan.id}-description`}
							name='plan'
							type='radio'
							defaultChecked={plan.id === "small"}
							className='h-4 w-4 border-violet-500 text-violet-600 focus:ring-violet-600 focus:ring-2'
						/>
					</div>
					<div className='ml-6 text-sm leading-6'>
						<label htmlFor={plan.id} className='font-medium text-white'>
							{plan.name}
						</label>{" "}
						<span id={`${plan.id}-description`} className='text-white'>
							{plan.description}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default EpisodeList;
