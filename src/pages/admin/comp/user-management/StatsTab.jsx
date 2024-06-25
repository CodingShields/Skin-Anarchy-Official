



const StatsTab = () => {


    return (
        
        <div
        className="flex flex-row justify-center items-center w-full h-full space-x-4 "
        >
            <div className='flex flex-col justify-center items-center w-fit h-fit text-lg border-2 border-black py-4 px-4 bg-gray-200 ease-int-out transition-transform duration-300 shadow-black shadow-md '>
					<h1 className='font-bold text-xl text-center mb-2'>User Stats</h1>
					<div className='w-72 h-fit border-b-2 border-black text-lg'>
						<h1 className='font-bold'>Active Subs:</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-8 text-lg'>
						<h1 className='font-bold'>NonActive Subs:</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-8 text-lg'>
						<h1 className='font-bold'>Total Users: </h1>
					</div>
				</div>
				<div
					className="flex flex-col justify-center items-center w-fit h-fit border-2 border-black py-4 px-4 text-lg bg-gray-200 delay-700 ease-out transition-all duration-500 shadow-black shadow-md">
					<div>
						<h1 className='font-bold text-xl text-center mb-2'>Notification Stats</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-4 text-lg'>
						<h1 className='font-bold'>Blog Noti:</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-8 text-lg'>
						<h1 className='font-bold'>Podcast Noti:</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-8 text-lg'>
						<h1 className='font-bold'>Weekly Newsletter:</h1>
					</div>
					<div className='w-72 h-fit border-b-2 border-black mt-8 text-lg'>
						<h1 className='font-bold'>Upcoming Noti:</h1>
					</div>
				</div>
        </div>
    )
}

export default StatsTab