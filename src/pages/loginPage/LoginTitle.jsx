import React, { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import FactsBar from "../homePage/comps/FactsBar";
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
		<div className='text-center login-title-wrapper mb-12 relative h-[800px]'>
			<h1 className='titleText font-montserrat font-thin absolute' ref={titleRef}>
				<span id='title' className='text-[200px]'>
					<span className='title-letter text-gold-500'>S</span>
					<span className='title-letter text-gold-500'>K</span>
					<span className='title-letter text-gold-500'>I</span>
					<span className='title-letter text-gold-500'>N</span>
					<span className='title-letter text-gold-500'>&nbsp;</span>
					<span className='title-letter text-gold-500'>A</span>
					<span className='title-letter text-gold-500'>N</span>
					<span className='title-letter text-gold-500'>A</span>
					<span className='title-letter text-gold-500'>R</span>
					<span className='title-letter text-gold-500'>C</span>
					<span className='title-letter text-gold-500'>H</span>
					<span className='title-letter text-gold-500'>Y</span>
				</span>
				<br />
				<span id='sub-title' ref={subTitleRef} className='text-white tracking-widest text-3xl'>
					Worlds Fastest Growing Beauty Podcast
				</span>
			</h1>
		</div>
	);
};

export default LoginTitle;
