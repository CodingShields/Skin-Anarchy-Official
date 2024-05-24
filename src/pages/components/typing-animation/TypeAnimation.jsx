import React, { useEffect, useState, useRef } from "react";

const TypeAnimation = ({
	sequence,
	speed = 100,
	deletionSpeed = 50,
	cursor = true,
	className,
	style,
	activate = false,
	delay = 1000,
	deleteBeforeNext = true,
	halfSpace = false,
	messageSpacing = "10px",
}) => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);
	const [subIndex, setSubIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const interval = useRef(null);

	useEffect(() => {
		if (!activate) {
			clearInterval(interval.current);
			setText("");
			setIndex(0);
			setSubIndex(0);
			setDeleting(false);
			return;
		}

		const handleTyping = () => {
			if (!sequence[index]) {
				clearInterval(interval.current);
				return;
			}

			if (deleting) {
				if (subIndex === 0) {
					setDeleting(false);
					if (index + 1 === sequence.length) {
						clearInterval(interval.current);
						return;
					} else {
						setIndex((prev) => prev + 1);
					}
				} else {
					setSubIndex((prev) => prev - 1);
				}
			} else {
				if (subIndex === sequence[index].length) {
					if (deleteBeforeNext) {
						setDeleting(true);
						clearInterval(interval.current);
						setTimeout(() => {
							interval.current = setInterval(handleTyping, deletionSpeed);
						}, delay);
					} else {
						clearInterval(interval.current);
						setTimeout(() => {
							setIndex((prev) => prev + 1);
							setSubIndex(0);
							interval.current = setInterval(handleTyping, speed);
						}, delay);
					}
				} else {
					setSubIndex((prev) => prev + 1);
				}
			}

			if (deleteBeforeNext || deleting) {
				setText(sequence[index].substring(0, subIndex));
			} else {
				setText((prev) => {
					if (subIndex === 0) {
						return prev + (prev ? "\n" : "") + sequence[index].substring(0, subIndex);
					}
					const newText = sequence[index].substring(0, subIndex);
					const lines = prev.split("\n");
					lines[lines.length - 1] = newText;
					return lines.join("\n");
				});
			}
		};

		interval.current = setInterval(handleTyping, speed);

		return () => clearInterval(interval.current);
	}, [subIndex, index, deleting, sequence, speed, deletionSpeed, activate, delay, deleteBeforeNext]);

	return (
		<span className={className} style={style}>
			{text.split("\n").map((line, idx) => (
				<React.Fragment key={idx}>
					<span style={{ display: "block", marginBottom: messageSpacing }}>{line}</span>
				</React.Fragment>
			))}
			{cursor && <span className='cursor'>|</span>}
		</span>
	);
};

export default TypeAnimation;
