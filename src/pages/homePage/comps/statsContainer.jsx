


const StatsContainer = () => {


    return (
			<div className='block p-16 text-center h-5/6 hw-full'>
				<div className='w-full p-4 mb-8 text-4xl font-bold text-center text-white'>
					<p>PODCAST ANALYTICS</p>
				</div>

				<div className='flex flex-row justify-evenly'>
					<div className='flex flex-row max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse'>
						<dt className='mr-4 text-xl font-medium text-white truncate'>Total Subscribers:</dt>
						<dd className='mt-1 text-3xl font-semibold text-white'>71,897</dd>
					</div>

					<div className='flex flex-row max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80  shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse'>
						<h3 className='mr-4 text-xl font-medium text-white truncate'>Avg. Open Rate:</h3>
						<h3 className='mt-1 text-3xl font-semibold text-white'>58.16%</h3>
					</div>

					<div className='flex flex-row max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse'>
						<dt className='mr-4 text-xl font-medium text-white truncate'>Avg. Click Rate:</dt>
						<dd className='mt-1 text-3xl font-semibold text-white'>24.57%</dd>
					</div>
				</div>
			</div>
		);
}

export default StatsContainer