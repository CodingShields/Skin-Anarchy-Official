import React, { useState, useEffect } from "react";

const LiveTyping = ({ message }) => {
	const [displayedText, setDisplayedText] = useState("");
	console.log(message);
    useEffect(() => {
		setDisplayedText(message);
	}, [message]);

	useEffect(() => {
		let charIndex = 0;
		const typingInterval = setInterval(() => {
			if (charIndex <= displayedText.length) {
				setDisplayedText(displayedText.substring(0, charIndex));
				charIndex++;
			} else {
				clearInterval(typingInterval);
			}
		}, 50); // Adjust the delay for typing speed

		return () => {
			clearInterval(typingInterval);
		};
	}, []);

	const renderTextWithNewlines = (displayedText) => {
		return displayedText.split("\n").map((line, index) => (
			<React.Fragment key={index}>
				<span>{line}</span>
				<br />
			</React.Fragment>
		));
	};

	return <React.Fragment>{renderTextWithNewlines(displayedText)}</React.Fragment>;
};

export default LiveTyping;
