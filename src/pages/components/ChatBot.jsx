import { useEffect, useState } from "react";
import chatBotIcon from "../../assets/iconsAnimated/chatBotIcon.svg";
import chatBotEnterBtn from "../../assets/iconsAnimated/chatBotEnterBtn.svg";
const ChatBot = () => {
	const [openChat, setOpenChat] = useState(false);

	return (
		<div className='w-full h-fit'>
			<img src={chatBotIcon} onClick={() => setOpenChat(true)} className='w-32 fixed bottom-0 right-0 mr-10 mb-10 cursor-pointer' />
			<div className={openChat ? "w-1/4 h-1/2 bg-white fixed bottom-0 right-0 mr-10 mb-10 rounded-lg" : "hidden"}>
				<div className='w-full h-1/4 p-2 border-4 border-black rounded-lg '>
					<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-6 h-6'>
						<path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
					</svg>
				</div>
				<div className='w-auto h-3/4 mx-2 mt-2 p-2 border-4 border-black rounded-lg '></div>
			</div>
		</div>
	);
};

export default ChatBot;
