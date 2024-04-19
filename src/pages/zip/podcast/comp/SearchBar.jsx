import searchIcon from "../../../assets/icons/searchIcon.svg";

const SearchBar = () => {
	return (
		<div className='relative  items-center'>
			<p className='text-lg font-medium leading-6 text-white text-center mb-2'>Search All Episodes</p>
			<input
				type='text'
				name='search'
				id='search'
				className=' w-64 rounded-md border-0 pr-14 text-gray-900  ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-4 focus:ring-offset-4 focus:ring-violet-600 focus:shadow-lg focus:shadow-violet-600 '
			/>
			<div className='absolute inset-y-0 top-8 right-0 flex py-1.5 pr-1.5'>
				<div className='inline-flex items-center  border-gray-200 px-1  font-sans text-xs text-gray-400'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-6 h-6 hover:text-violet-600 hover:cursor-pointer hover:stroke-2 hover:w-8 hover:h-8'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
