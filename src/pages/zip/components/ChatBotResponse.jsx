import React, { useState, useEffect } from "react";
import LiveTyping from "./LiveTyping";
const responses = ["Hello, and welcome to Skin Anarchy!", "How Can I help you?"];

const ChatBotResponse = () => {
	const [message, setMessage] = useState("");

	useEffect(() => {
		setMessage(responses[0]);
		// setTimeout(() => {
		// 	setMessage(responses[1]);
		// }, 8000);
	}, []);

	return (
		<React.Fragment>
			<h1>
				<LiveTyping message={message} />
			</h1>
		</React.Fragment>
	);
};

export default ChatBotResponse;
