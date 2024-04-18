import {useState, useEffect} from 'react';


const ChatBotOptions = () => {
	const [state, setState] = useState({
		options: [],
		typing: false,
		selection: '',
	});
	const options = ["Where do I find your product recommendations", "I want to leave a review", "I want to contact your team", "Get featured on the show?", "Become a sponsor?"];

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
