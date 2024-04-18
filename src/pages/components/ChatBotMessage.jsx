import ChatBotResponse from "./ChatBotResponse";
import ChatBotOptions from "./ChatBotOptions";

const ChatBotMessage = ({openChat}) => {
	
	return (
		<div className='w-full h-full flex flex-col justify-start items-center'>
			<class  className='w-3/4 h-12 text-center bg-black/10 rounded-tr-3xl rounded-tl-3xl rounded-br-3xl mt-4 mb-8 shadow-xl'>
				<ChatBotResponse />
			</class>
			<div className='w-3/4 h-fit bg-black/30 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl mt-4 shadow-xl'>
				<ChatBotOptions />
			</div>
			;
		</div>
	);
};

export default ChatBotMessage;
