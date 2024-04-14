const ChatBotOptions = () => {
	const options = ["Find a product?", "Find a podcast?", "Find a blog post?", "Get featured on the show?", "Become a sponsor?"];

	return (
		<div className='flex flex-col justify-center items-center'>
			<ul className='list-disc text-xl space-y-4 py-4'>
				{options.map((option, index) => (
                    <li key={index}
                    className="hover:cursor-pointer hover:text-white"
                    >{option}</li>
				))}
			</ul>
		</div>
	);
};

export default ChatBotOptions;
