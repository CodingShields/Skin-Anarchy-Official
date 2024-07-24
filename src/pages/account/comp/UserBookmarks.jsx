const UserBookmarks = () => {
	return (
		<>
			<div className=' bg-black text-white flex flex-col w-[1200px] justify-start items-center hover:h-[600px]  h-32 ring-1 ring-white rounded-lg px-2 font-montserrat py-4 group hover:text-black hover:bg-white transition-all ease-in-out duration-700  '>
				<h1 className='text-3xl font-thin group-hover:font-normal uppercase h-fit w-full text-center border-b group-hover:border-black mb-4 pb-2'>
					Saved Blog Bookmarks
				</h1>{" "}
				<div className='w-full overflow-y-scroll px-4 '>
					<div className='justify-center items-center w-full border-b border-black  pb-2 my-2 hidden group-hover:visible group-hover:flex group-hover:flex-row '>
						<div className='flex flex-col justify-end w-fit'>
							<p className='uppercase tracking-widest text-center font-semibold'>Date</p>
							<p>01/01/2022</p>
						</div>
						<div className='flex flex-col justify-center items-center w-full'>
							<p className='uppercase tracking-widest  text-center font-semibold'>Article</p>
							<p className='truncate'>How To Use The Skincare Anarchy Podcast</p>
						</div>
						<div className=' inline-flex space-x-6 justify-end w-48'>
							<button className='w-16 text-[16px] hover:border hover:bg-black hover:scale-125 hover:text-white ring-1 font-normal ring-black text-black transition-all ease-in-out duration-500 rounded-xl px-2'>
								View
							</button>
							<button className='w-16 text-[16px] hover:border hover:bg-black hover:scale-125 hover:text-white ring-1 font-normal ring-black text-black transition-all ease-in-out duration-500 rounded-xl px-2'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserBookmarks;
