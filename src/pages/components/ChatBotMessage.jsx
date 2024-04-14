import ChatBotResponse from "./ChatBotResponse";
import ChatBotOptions from "./ChatBotOptions";


const ChatBotMessage = () => {
	return (
		<div className='w-full h-full flex flex-col justify-start items-center'>
			<div className='w-3/4 h-fit bg-black/10 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl mt-4 mb-8 shadow-xl'>
				<ChatBotResponse />
			</div>
			<div className='w-3/4 h-fit bg-black/30 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl mt-4 shadow-xl'>
				<ChatBotOptions />
			</div>
			;
		</div>
	);
};

export default ChatBotMessage;
