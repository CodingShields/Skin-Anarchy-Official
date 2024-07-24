import { useState } from "react";
import chatBotIcon from "../../../assets/iconsAnimated/chatBotIcon.svg";
import ChatBotMessage from "./ChatBotMessage";
import { Button } from "../Components";
import {XCircleIcon} from '@heroicons/react/24/outline'
const ChatBot = ({ openChatBot }) => {
	const [openChat, setOpenChat] = useState(false);
	if (!openChatBot) return null;

	return (
		<div className='w-full h-fit z-50 absolute bottom-0 right-0 animate-fadeIn'>
			<Button
				image={chatBotIcon}
				open={openChat}
				imageStyle='h-32 w-32'
				style='fixed bottom-0 right-0 mr-10 mb-10 z-20 hover:animate-pulse'
				onClick={() => setOpenChat(true)}
			/>
			<div className={openChat ? "w-1/4 h-fit fixed bottom-0 right-0 mr-10 mb-10 z-20 " : "hidden"}>
				<div className='w-auto h-32 p-2  rounded-t-lg  bg-char-900'>
					<div className='w-full flex flex-row justify-start items-center h-full '>
						<div className='w-fit h-fit rounded-full  p-4 shadow-lg shadow-white/50'>
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1' stroke='white' className='w-14 h-14 text-white'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
								/>
							</svg>
						</div>
						<h1 className='text-white text-2xl font-thin font-montserrat ml-8 underline underline-offset-8 decoration-1'>Skin Anarchy Support Bot</h1>
					</div>
					<Button
						icon={<XCircleIcon className='w-6 h-6' /> }
						style='absolute top-0 right-0 z-50 cursor-pointer hover:scale-110 mr-4 mt-4 text-white'
						onClick={() => {
							setOpenChat(false);
						}}
					>
					</Button>
				</div>
				<div className='w-auto h-fit rounded-b-lg bg-white animate-fadeIn '>
					<ChatBotMessage openChat={openChat} />
				</div>
			</div>
		</div>
	);
};

export default ChatBot;
