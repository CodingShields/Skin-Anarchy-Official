import React, { useState, useRef, useEffect } from "react";
import chatBotIcon from "../../assets/iconsAnimated/chatBotIcon.svg";
import chatBotEnterBtn from "../../assets/iconsAnimated/chatBotEnterBtn.svg";
import CloseButton from "./CloseButton";
import ChatBotMessage from "./ChatBotMessage";
import ButtonImage from "./ButtonImage";
import Button from "./Button";
const chatBotButtonImage = chatBotIcon;
const ChatBot = () => {
	const [openChat, setOpenChat] = useState(false);

	return (
		<div className='w-full h-fit relative z-50'>
		
			<ButtonImage image={chatBotButtonImage} onClick={() => setOpenChat(true)} />
			<div className={openChat ? "w-1/4 h-fit fixed bottom-0 right-0 mr-10 mb-10 " : "hidden"}>
				<div className='w-auto h-32 p-2  rounded-t-lg  bg-char-900'>
					<div className='w-full flex flex-row justify-start items-center h-full'>
						<div className='w-fit h-fit rounded-full bg-black p-4 '>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='white'
								className='w-14 h-14 text-white'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
								/>
							</svg>
						</div>
						<h1 className='text-white text-2xl font-bold ml-4'>Skin Anarchy Support Bot</h1>
					</div>
					<div className='w-full'>
						<CloseButton
							color={"white"}
							onClick={() => {
								setOpenChat(false);
							}}
						/>
					</div>
				</div>
				<div className='w-auto h-96 mx-2p-2 rounded-b-lg bg-white animate-fadeIn '>
					<ChatBotMessage openChat={openChat} />
				</div>
				{/* <div className='w-auto h-1/4 x-2 mt-2 p-2 border-4 border-black rounded-lg bg-white '></div> */}
			</div>
		</div>
	);
};

export default ChatBot;
