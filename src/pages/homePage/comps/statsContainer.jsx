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
import rotatingMicrophone from "../../../assets/video/rotatingMicrophone.mp4";

const StatsContainer = () => {
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    success: false,
    successMessage: "",
  });
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
    <div className="flex flex-col justify-center items-center text-center h-full w-full relative ">
      <div className="flex w-full h-32 bg-gradient-to-t from-black to-transparent "></div>
      <div className=" h-144 w-full z-10 overflow-hidden bg-gradient ">
        <video
          className="w-full "
          autoPlay
          muted
          loop
          id="video"
          src={rotatingMicrophone}
        ></video>
      </div>

      <div className="absolute flex flex-col h-full w-full p-4 mb-8 text-4xl font-bold text-center text-white z-10 mt-80 ">
        <p>PODCAST ANALYTICS</p>
        <div className="flex flex-row h-fit justify-evenly mt-10">
          <div className="flex flex-col max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse">
            <dd className="mt-1 text-3xl font-semibold text-white">
              {prevStatsData.downloadsPerWeek}
            </dd>
            <h3 className="mr-4 text-xl font-medium text-white truncate uppercase">
              Downloads Per Week
            </h3>
          </div>

          <div className="flex flex-col max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80  shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse">
            <h3 className="mt-1 text-3xl font-semibold text-white">
              {prevStatsData.episodesRecorded}
            </h3>
            <h3 className="mr-4 text-xl font-medium text-white truncate uppercase">
              Episodes Recorded
            </h3>
          </div>

          <div className="flex flex-col max-w-lg px-10 py-5  bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse">
            <dd className="mt-1 text-3xl font-semibold text-white">
              {prevStatsData.subscribers}
            </dd>

            <dt className="mr-4 text-xl font-medium text-white truncate uppercase">
              SUBSCRIBERS ACROSS PLATFORMS:
            </dt>
          </div>
          <div className="flex flex-col max-w-lg px-10 py-5 bg-black rounded-lg shadow-2xl place-items-center bg-opacity-80 shadow-violet-700 ring-4 ring-violet-700 hover:animate-pulse">
            <dd className="mt-1 text-3xl font-semibold text-white">
              {prevStatsData.socialFollowers}
            </dd>

            <dt className="mr-4 text-xl font-medium text-white truncate uppercase">
              Social Followers
            </dt>
          </div>
        </div>
        <div className=" bg-gradient-to-b from-black to-transparent "></div>
      </div>
    </div>
  );
};

export default StatsContainer;
