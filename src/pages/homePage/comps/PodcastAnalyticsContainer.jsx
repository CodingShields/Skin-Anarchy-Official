// import { useState, useEffect } from "react";
// import { collection, getDocs, query } from "firebase/firestore";
// import { db } from "../../../fireBase/firebaseConfig";
// import { animateCounter } from "../../../assets/utilities/numberCounter";

const PodcastAnalyticsContainer = () => {
	// const [prevStatsData, setPrevStatsData] = useState({});

	// useEffect(() => {
	// 	const getStats = async () => {
	// 		const colRef = collection(db, "statsData");
	// 		const q = query(colRef);
	// 		const querySnapshot = await getDocs(q);
	// 		querySnapshot.forEach((doc) => {
	// 			setPrevStatsData(doc.data());
	// 			console.log(doc.id, " => ", doc.data());
	// 		});
	// 	};
	// 	getStats();
	// }, []);

	// useEffect(() => {
	// 	const counters = document.querySelectorAll("#counter");
	// 	counters.forEach((counter) => {
	// 		const target = +counter.getAttribute("data-target");
	// 		animateCounter(counter, target); // Use the utility function
	// 	});
	// }, [prevStatsData]);

	return (
		<div className='flex flex-col justify-center items-center text-center h-screen w-full  z-30 relative'>
			<h3 className='text-6xl  text-white truncate uppercase font-playfair pb-24'>Award Winning Podcast</h3>
			<div className='grid grid-cols-4 gap-[75px]'>
				<div className='space-y-4 tracking-widest'>
					<h3 className='text-center text-4xl font-montserrat font-thin text-white truncate uppercase'>Episodes Recorded</h3>
					<h1 id='counter' className='text-4xl font-glacialRegular text-white' data-target='622'>
						622+
					</h1>
				</div>

				<div className='space-y-4'>
					<h3 className='text-4xl font-montserrat font-thin text-white truncate uppercase'>Total Downloads</h3>
					<h1 id='counter' className='text-4xl font-glacialRegular text-white' data-target='622'>
						9 Million
					</h1>
				</div>

				<div className='space-y-4'>
					<h1 className='text-4xl font-montserrat font-thin text-white truncate uppercase'>Global Recognition </h1>{" "}
					<h1 id='counter' className='text-4xl font-glacialRegular text-white' data-target=''>
						Streaming in 100+ Countries
					</h1>
				</div>
				<div className='space-y-4'>
					<h1 className='text-4xl font-montserrat font-thin text-white truncate uppercase'>Chart Position</h1>

					<h2 id='counter' className='text-4xl font-glacialRegular text-white tracking-widest' data-target=''>
						{/* {socialFollowers} */}Top 50 Beauty Podcast
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PodcastAnalyticsContainer;
