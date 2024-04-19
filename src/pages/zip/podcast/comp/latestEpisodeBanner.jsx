export default function LatestEpisodeBanner() {
	return (
		<div className='relative isolate flex w-full items-center gap-x-6 overflow-hidden bg-violet-400 bg-opacity-80 px-6 py-2.5 sm:px-3.5 sm:before:flex-1'>
			
			<div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
				<p className='text-sm leading-6 text-gray-900'>
					<strong className='font-semibold pr-10'>SkinAnarchy</strong>
					Come Listen To Our Latest Episode
				</p>
				<a
					href='#'
					className='flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'
				>
					Listen Now <span aria-hidden='true'>&rarr;</span>
				</a>
			</div>
			<div className='flex flex-1 justify-end'>
				<button type='button' className='-m-3 p-3 focus-visible:outline-offset-[-4px]'>
				</button>
			</div>
		</div>
	);
}
