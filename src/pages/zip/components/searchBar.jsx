import searchIcon from "../../assets/icons/searchIcon.svg";
const SearchBar = () => {
	return (
		<div>
			<label htmlFor='search' className='block text-sm font-medium leading-6 text-gray-900'>
				Quick search
			</label>
			<div className='relative mt-2 flex items-center'>
				<input
					type='text'
					name='search'
					id='search'
					className='block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
				/>
				<div className='absolute inset-y-0 right-0 flex py-1.5 pr-1.5'>
					<div className='inline-flex items-center  border-gray-200 px-1 font-sans text-xs text-gray-400'>
						<img
							className="w-4 h-4 border-none outline-none "
							src={searchIcon} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
