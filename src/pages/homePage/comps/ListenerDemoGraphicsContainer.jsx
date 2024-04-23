import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../fireBase/firebaseConfig";
import StatsFilledBar from "../../../assets/data/homepage/StatsFilledBar";

const ListenerDemoGraphicsContainer = () => {
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



	return (
		<div className='w-full h-fit relative'>
			<div className='grid grid-cols-1 mx-auto w-3/4'>
				<h3 className='text-2xl font-semibold text-white truncate uppercase mb-4'>Listener Demographics</h3>
				<div className='flex flex-col w-auto h-fit justify-start items-start space-y-4 text-[16px] font-glacial truncate uppercase text-white'>
					<h2>Women</h2>
					<StatsFilledBar value={prevStatsData.women} />
					<h2>Men</h2>
					<StatsFilledBar value={prevStatsData.men} />
					<h2>Age 18 - 34</h2>
					<StatsFilledBar value={prevStatsData.age1834} />
					<h2>AGE 35-59</h2>
					<StatsFilledBar value={prevStatsData.age3559} />
				</div>
			</div>
		</div>
	);
};

export default ListenerDemoGraphicsContainer;
