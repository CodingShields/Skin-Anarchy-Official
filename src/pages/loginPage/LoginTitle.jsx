import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import FactsBar from "./FactsBar";
const LoginTitle = ({ onComplete }) => {
	const titleRef = useRef(null);
	const subTitleRef = useRef(null);

	useEffect(() => {
		const animateTitle = () => {
			anime({
				targets: titleRef.current.querySelectorAll(".title-letter"),
				easing: "easeInQuad",
				translateX: ["10px", "0"],
				opacity: [0, 1],
				duration: 3000,

				delay: (el, i) => 50 * i,
				complete: () => {
					onComplete();
				},
			});
		};

		const animateSubTitle = () => {
			anime({
				targets: subTitleRef.current,
				easing: "easeInQuad",
				opacity: [0, 1],
				duration: 800,
				delay: 1000,
			});
		};

		animateTitle();
		setTimeout(() => {
			animateSubTitle();
		}, 1000);
	}, [onComplete]);

	return (
		<div className="text-center login-title-wrapper mt-36 relative h-[300px] lg:h-[900px]">
			<h1
				className="titleText font-montserrat font-thin absolute"
				ref={titleRef}
			>
				<span
					id="title"
					className="text-[50px]"
				>
					{/* text-[200px] */}
					<span className="title-letter text-gold-500 lg:text-[200px] ">S</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">K</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">I</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">N</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">
						&nbsp;
					</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">A</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">N</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">A</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">R</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">C</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">H</span>
					<span className="title-letter text-gold-500 lg:text-[200px] ">Y</span>
				</span>
				<br />
				<span
					id="sub-title"
					ref={subTitleRef}
					className="text-white tracking-widest text-lg lg:text-3xl"
				>
					Worlds Fastest Growing Beauty Podcast
				</span>
			</h1>
		</div>
	);
};

export default LoginTitle;
