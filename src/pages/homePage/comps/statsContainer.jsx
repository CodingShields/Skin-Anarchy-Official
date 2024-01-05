import { useState, useEffect } from "react";

import {
  collection,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../fireBase/firebaseConfig";
import { podcastStats } from "../../../assets/data/admin/statsPage/statsArray.jsx";
import FilledBar from "../../../assets/data/admin/statsPage/demographicBar.jsx";
import rotatingMicrophone from "../../../assets/video/rotatingMicrophone.mp4";
import headset from "../../../assets/icons/homepage/statsContainer/headset.svg";
import mic from "../../../assets/icons/homepage/statsContainer/mic.svg";
import people from "../../../assets/icons/homepage/statsContainer/people.svg";
import link from "../../../assets/icons/homepage/statsContainer/link.svg";

const StatsContainer = () => {
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    success: false,
    successMessage: "",
  });

  const [prevStatsData, setPrevStatsData] = useState({});

  const [counts, setCounts] = useState({
    downloadsPerWeek: 0,
    episodesRecorded: 0,
    subscribers: 0,
    socialFollowers: 0,
  });

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

  // useEffect(() => {
  //   const animationDuration = 2000; // Change this value to control the animation speed
  //   const framesPerSecond = 30;

  //   const animateCount = (statistic, endValue) => {
  //     const step =
  //       (endValue - counts[statistic]) /
  //       (animationDuration / (1000 / framesPerSecond));
  //     let currentCount = counts[statistic];

  //     const intervalId = setInterval(() => {
  //       currentCount += step;
  //       if (currentCount >= endValue) {
  //         currentCount = endValue;
  //         clearInterval(intervalId);
  //       }
  //       setCounts((prevCounts) => ({
  //         ...prevCounts,
  //         [statistic]: currentCount,
  //       }));
  //     }, 1000 / framesPerSecond);
  //   };

  //   animateCount("downloadsPerWeek", prevStatsData.downloadsPerWeek);
  //   animateCount("episodesRecorded", prevStatsData.episodesRecorded);
  //   animateCount("subscribers", prevStatsData.subscribers);
  //   animateCount("socialFollowers", prevStatsData.socialFollowers);
  // }, [prevStatsData]);

  return (
    <div className="flex flex-col justify-center items-center text-center h-full w-full relative pt-10">
      <div className="flex w-full h-72 bg-gradient-to-t from-black to-transparent "></div>
      <div className=" h-full w-full z-10 overflow-hidden bg-black ">
        <video
          className="w-full opacity-40"
          autoPlay
          muted
          loop
          id="video"
          src={rotatingMicrophone}
        ></video>
      </div>
      <div className="absolute flex flex-col h-full w-full p-4 mb-8 text-5xl font-bold text-center text-white z-10 top-1/4">
        <h3 className="text-4xl font-semibold text-white truncate uppercase">
          PODCAST ANALYTICS
        </h3>

        <div className="flex flex-row h-fit justify-evenly mt-32">
          <div className="flex flex-col w-96 h-72  px-2 py-2 bg-black rounded-lg shadow-2xl justify-center items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 ">
            <h3 className="mt-1 text-4xl font-semibold text-violet-500 mb-4">
              <img src={headset} alt="headSetBounceIn" />
              {prevStatsData.downloadsPerWeek}
            </h3>
            <h3 className="mr-4 text-xl font-medium text-white truncate uppercase">
              Downloads Per Week
            </h3>
          </div>

          <div className="flex flex-col w-96  h-72 px-2 py-2 bg-black rounded-lg shadow-2xl justify-center items-center  bg-opacity-80  shadow-violet-700 ring-4 ring-violet-700 ">
            <h3 className="mt-1 text-4xl font-semibold text-violet-500 mb-4">
              <img src={mic} alt="micBounceIn" />
              {prevStatsData.episodesRecorded}
            </h3>
            <h3 className="mr-4 text-xl font-medium text-white truncate uppercase">
              Episodes Recorded
            </h3>
          </div>

          <div className="flex flex-col w-96 h-72 px-2 py-2  bg-black rounded-lg shadow-2xl justify-center items-center  bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 ">
            <h3 className="mt-1 text-4xl font-semibold text-violet-500 mb-4">
              <img className="h-36" src={people} alt="micBounceIn" />

              {prevStatsData.subscribers}
            </h3>

            <h3 className="mr-4 text-xl font-medium text-white truncate uppercase">
              SUBSCRIBERS ACROSS PLATFORMS:
            </h3>
          </div>
          <div className="flex flex-col h-72  w-96 px-2 py-2 bg-black rounded-lg shadow-2xl justify-center items-center  bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 ">
            <h3 className="mt-1 text-4xl font-semibold text-violet-500 mb-4">
              <img src={link} alt="micBounceIn" />
              {prevStatsData.socialFollowers}
            </h3>

            <h3 className="text-2xl font-semibold text-white truncate uppercase"></h3>
          </div>
        </div>
        <div className="flex flex-col mt-30 w-full px-40 ">
          <h3 className="text-2xl font-semibold text-white truncate uppercase">
            Listener Demographics
          </h3>
          <div className="flex flex-col w-auto h-fit justify-start items-start space-y-4">
            <h2 className="text-sm font-medium text-gray-400 truncate uppercase">
              Women
            </h2>

            <FilledBar value={prevStatsData.women} />
            <h2 className="text-sm font-medium text-gray-400 truncate uppercase">
              Men
            </h2>
            <FilledBar value={prevStatsData.men} />
            <h2 className="text-sm font-medium text-gray-400 truncate uppercase">
              Age 18 - 34
            </h2>
            <FilledBar value={prevStatsData.age1834} />
            <h2 className="text-sm font-medium text-gray-400 truncate uppercase">
              AGE 35-59
            </h2>
            <FilledBar value={prevStatsData.age3559} />
          </div>
        </div>
        <div className=" flex flex-col bg-gradient-to-b from-black via-gray-500 to-white"></div>
      </div>
    </div>
  );
};

export default StatsContainer;
