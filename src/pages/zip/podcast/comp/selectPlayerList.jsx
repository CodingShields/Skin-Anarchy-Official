const SelectPlayerList = () => {
	return (
		<div>
			<p className='block text-lg font-medium leading-6 text-white text-center'>Select a Category</p>
			<a
				src='https://tools.applemediaservices.com/api/badges/listen-on-apple-podcasts/badge/en-us?size=250x83&amp;releaseDate=1702504800'
				alt='Listen on Apple Podcasts'
				style={{
					borderRadius: "13px",
					width: "250px",
					height: "83px",
				}}
			></a>
			<select
				id='location'
				name='location'
				className='mt-2 block w-64 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900  placeholder:text-gray-400 focus:ring-4 focus:ring-offset-4 focus:ring-violet-600 focus:shadow-lg focus:shadow-violet-600 '
				defaultValue='Category'
			>
				<option>Apple</option>
				<option>Spotify</option>
				<option>Option 3</option>
			</select>
		</div>
	);
};

export default SelectPlayerList;
