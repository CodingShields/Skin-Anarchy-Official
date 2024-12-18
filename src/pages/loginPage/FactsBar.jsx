import { useState, useEffect, useRef } from "react";

const FactsBar = () => {
	const [index, setIndex] = useState(0);
	const animationRef = useRef(null);

	const arr = [
		"INDUSTRY EXPERTS",
		"FACTS ONLY",
		"GLOBALLY RECOGNIZED",
		"INDUSTRY ACCLAIMED",
	];

	useEffect(() => {
		const handleAnimationEnd = () => {
			// Change fact after animation completes
			setIndex((prevIndex) => (prevIndex + 1) % arr.length);
		};

		// Attach animationend event listener to handle animation completion
		const currentRef = animationRef.current;
		if (currentRef) {
			currentRef.addEventListener("animationend", handleAnimationEnd);
		}

		return () => {
			// Cleanup: remove event listener when component unmounts
			if (currentRef) {
				currentRef.removeEventListener("animationend", handleAnimationEnd);
			}
		};
	}, [arr.length]); // Include arr.length in dependency array to handle changes in the array size

	useEffect(() => {
		// Ensure animation is reset when index changes
		if (animationRef.current) {
			animationRef.current.style.animation = "none";
			void animationRef.current.offsetWidth; // Trigger reflow
			animationRef.current.style.animation = `text 3.5s forwards`; // Adjust duration if needed
		}
	}, [index]); // Trigger effect when index changes

	return (
		<div className="w-1/2 h-36 flex justify-start lg:justify-center items-center relative -z-10 hidden">
			<div
				ref={animationRef}
				className="text1 text-5xl "
			>
				{arr[index]}
			</div>
		</div>
	);
};

export default FactsBar;
