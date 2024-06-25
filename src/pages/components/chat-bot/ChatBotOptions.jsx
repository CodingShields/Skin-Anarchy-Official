
const ChatBotOptions = () => {

	return (
		<div className='flex flex-col justify-center items-center z-10 space-y-6 font-montserrat'>
			<button className='bg-black/30 rounded-md shadow-xl hover:shadow-black shadow-black/50 px-12 py-2 hover:bg-black/40 hover:text-white w-fit whitespace-nowrap transition-all ease-in-out duration-300'>
				Where do I find your product recommendations
			</button>
			<button className='bg-black/30  rounded-md  shadow-xl hover:shadow-black shadow-black/50 px-12 py-2 hover:bg-black/40 hover:text-white w-fit whitespace-nowrap transition-all ease-in-out duration-300'>
				I want to leave a review
			</button>
			<button className='bg-black/30 rounded-md shadow-xl hover:shadow-black shadow-black/50 px-12 py-2 hover:bg-black/40 hover:text-white w-fit whitespace-nowrap transition-all ease-in-out duration-300'>
				I want to contact your team
			</button>
			<button className='bg-black/30 rounded-md shadow-xl hover:shadow-black shadow-black/50 px-12 py-2 hover:bg-black/40 hover:text-white w-fit whitespace-nowrap transition-all ease-in-out duration-300'>
				I want to get featured on the show
			</button>
			<button className='bg-black/30 rounded-md shadow-xl hover:shadow-black shadow-black/50 px-12 py-2 hover:bg-black/40 hover:text-white w-fit whitespace-nowrap transition-all ease-in-out duration-300'>
				I would like to become a sponsor
			</button>
		</div>
	);
};

export default ChatBotOptions;
