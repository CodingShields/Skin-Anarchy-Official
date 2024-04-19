const CategoryList = () => {
	const categories = ["Product", "Guest Speaker", "Topic"];

	return (
		<div>
			<p className='block text-lg font-medium leading-6 text-white text-center'>Select a Category</p>
			<select
				id='location'
				name='location'
				className='mt-2 block w-64 rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900  placeholder:text-gray-400 focus:ring-4 focus:ring-offset-4 focus:ring-violet-600 focus:shadow-lg focus:shadow-violet-600 '
				defaultValue='Category'
			>
				{categories.map((category, index) => (
					<option key={index}>{category}</option>
				))}
			</select>
		</div>
	);
};

export default CategoryList;
