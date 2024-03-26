import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../fireBase/firebaseConfig";
import { animateCounter } from "../../../assets/utilities/numberCounter";
import headsetStatic from "../../../assets/icons/homepage/statsContainer/headsetStatic.svg";
import micStatic from "../../../assets/icons/homepage/statsContainer/micStatic.svg";
import peopleStatic from "../../../assets/icons/homepage/statsContainer/poepleStatic.svg";
import linkStatic2 from "../../../assets/icons/homepage/statsContainer/linkStatic2.svg";

const PodcastAnalyticsContainer = () => {
	const [prevStatsData, setPrevStatsData] = useState({});

	useEffect(() => {
		const getStats = async () => {
			const colRef = collection(db, "statsData");
			const q = query(colRef);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				setPrevStatsData(doc.data());
				console.log(doc.id, " => ", doc.data());
			});
		};
		getStats();
	}, []);

	useEffect(() => {
		const counters = document.querySelectorAll("#counter");
		counters.forEach((counter) => {
			const target = +counter.getAttribute("data-target");
			animateCounter(counter, target); // Use the utility function
		});
	}, [prevStatsData]);

	// const downloadsPerWeekDigits = prevStatsData.downloadsPerWeek
	// 	.toString()
	// 	.split("")
	// 	.map((digit, index) => (
	// 		<span key={index} className='digit'>
	// 			{digit}
	// 		</span>
	// 	));

	// const episodesRecordedDigits = prevStatsData.episodesRecorded
	// 	.toString()
	// 	.split("")
	// 	.map((digit, index) => (
	// 		<span key={index} className='digit'>
	// 			{digit}
	// 		</span>
	// 	));
	// const subscribersDigits = prevStatsData.subscribers
	// 	.toString()
	// 	.split("")
	// 	.map((digit, index) => (
	// 		<span key={index} className='digit'>
	// 			{digit}
	// 		</span>
	// 	));
	// const socialFollowersDigits = prevStatsData.socialFollowers
	// 	.toString()
	// 	.split("")
	// 	.map((digit, index) => (
	// 		<span key={index} className='digit'>
	// 			{digit}
	// 		</span>
	// 	));

	// function createDigitContainer() {
	// 	const container = document.createElement("div");
	// 	container.className = "counter-digit";
	// 	for (let i = 9; i >= 0; i--) {
	// 		// Create spans for digits 0 through 9
	// 		const span = document.createElement("span");
	// 		span.textContent = i;
	// 		container.appendChild(span);
	// 	}
	// 	return container;
	// }

	// function animateCounter(element, target) {
	// 	const targetStr = target.toString().padStart(6, "0"); // Ensure at least 6 digits, adjust as needed
	// 	element.innerHTML = ""; // Clear existing content

	// 	// Create a container for each digit in the target
	// 	const digitContainers = Array.from(targetStr).map(() => createDigitContainer());
	// 	digitContainers.forEach((container) => element.appendChild(container));

	// 	// Animate each digit
	// 	digitContainers.forEach((container, index) => {
	// 		setTimeout(() => {
	// 			// Delay each digit's animation for effect
	// 			const targetDigit = parseInt(targetStr[index], 10);
	// 			const span = container.querySelectorAll("span")[10 - targetDigit]; // 10 spans created, adjust for target digit
	// 			span.style.transform = `translateY(-${container.offsetHeight * targetDigit}px)`;
	// 		}, index * 65); // Stagger animations for effect
	// 	});
	// }

	// document.addEventListener("DOMContentLoaded", () => {
	// 	const counterElement = document.getElementById("counter");
	// 	if (counterElement) {
	// 		animateCounter(counterElement, 123456); // Example target number
	// 	}
	// });

	return (
		<div className='flex flex-col justify-center items-center text-center h-full w-full bg-black'>
			<div className='flex flex-col h-full w-full p-4 mb-8 text-5xl text-center text-white z-10 top-1/4 subpixel-antialiased	'>
				<h3 className='text-128 text-black truncate uppercase font-playfair'>PODCAST ANALYTICS</h3>

				<div className='grid grid-cols-4 mx-auto my-auto gap-[96px] mt-16 bg-black'>
					<div className='flex flex-col w-fit h-auto px-2 py-2 lg:w-64 justify-center items-center whitespace-nowrap'>
						<img className='h-22' src={headsetStatic} alt='headSetBounceIn' id='icon' />{" "}
						<h3 className='mt-1 text-4xl lg:text-2xl  text-black mb-4 font-glacialRegular'>
							<span id='counter' className='text-4xl font-glacialRegular' data-target={prevStatsData.downloadsPerWeek}></span>
						</h3>
						<h3 className='text-center text-xl font-medium text-black truncate uppercase'>Downloads Per Week</h3>
					</div>

					<div className='flex flex-col w-fit h-auto px-2 py-2 lg:w-64 justify-center items-center whitespace-nowrap'>
						<img className='h-22' src={micStatic} alt='micBounceIn' id='icon' />{" "}
						<h3 className='mt-1 text-4xl font-semibold lg:text-2xl  text-black mb-4 font-glacialRegular'>
							<span className='text-4xl font-glacialRegular' id='counter' data-target={prevStatsData.episodesRecorded}>
								{/* {episodesRecorded} */}
							</span>
						</h3>
						<h3 className='text-xl font-medium text-black truncate uppercase'>Episodes Recorded</h3>
					</div>

					<div className='flex flex-col w-fit h-auto px-2 py-2 lg:w-64 justify-center items-center whitespace-nowrap'>
						<img className='h-22' src={peopleStatic} id='icon' alt='micBounceIn' />{" "}
						<h3 className='mt-1 text-4xl lg:text-2xl  text-black mb-4'>
							<span id='counter' className='text-4xl font-glacialRegular' data-target={prevStatsData.subscribers}>
								{/* {subscribers} */}
							</span>
						</h3>
						<h3 className=' text-xl font-medium text-black xxl:truncate lg:text-center uppercase'>SUBSCRIBERS ACROSS PLATFORMS</h3>
					</div>
					<div className='flex flex-col w-fit h-auto px-2 py-2 lg:w-64 justify-center items-center whitespace-nowrap'>
						<img className='h-22' src={linkStatic2} alt='micBounceIn' id='icon' />{" "}
						<h3 className='mt-1 text-4xl lg:text-2xl  text-black mb-4 font-glacialRegular'>
							<span id='counter' className='text-4xl font-glacialRegular' data-target={prevStatsData.socialFollowers}>
								{/* {socialFollowers} */}
							</span>
						</h3>
						<h3 className='text-xl font-semibold text-black truncate uppercase'>SOCIAL FOLLOWERS</h3>
					</div>
				</div>
			
			</div>
		</div>
	);
};

export default PodcastAnalyticsContainer;
