import { useState, useEffect } from "react";
import ChatBotOptions from "./ChatBotOptions";
import TypeAnimation from "../typing-animation/TypeAnimation";
import { UserAuth } from "../../../context/AuthContext";

const ChatBotMessage = ({ openChat }) => {
	const [response, setResponse] = useState(false);
	const [activate, setActivate] = useState(false);
	const [currentUser, setCurrentUser] = useState("");
	const user = UserAuth();
	const name = "Mikey";
	useEffect(() => {
		if (openChat) {
			setCurrentUser(name);
			setActivate(true);
			setTimeout(() => {
				setResponse(true);
			}, 4500);
		} else {
			setActivate(false);
			setResponse(false);
		}
	}, [openChat]);

	return (
		<div className='w-full h-[600px] flex flex-col justify-start items-center'>
			<div className='shadow-xl shadow-black/50 w-fit bg-black/10 rounded-md px-4 mt-2 pt-4'>
				<div className='text-center items-center justify-center h-fit'>
					<TypeAnimation
						sequence={[`Hello ${currentUser}, and Welcome to Skin Anarchy!`, "How can we help you?"]}
						speed={50}
						deletionSpeed={0}
						cursor={false}
						className='text-xl font-montserrat text-black'
						activate={activate}
						delay={2000} // 2-second delay between messages
						deleteBeforeNext={false} // Keeps adding the next message to the next line
						halfSpace={true} // Adds a half-space break between lines
						messageSpacing='20px' // Adds space between messages
					/>
				</div>
			</div>
			<div
				className={
					response
						? "w-3/4 h-full transition-all duration-700 ease-in-out translate-y-0 animate-chatBotSlideIn mt-8"
						: "hidden animate-chatBotSlideOut"
				}
			>
				<ChatBotOptions />
			</div>
		</div>
	);
};

export default ChatBotMessage;
