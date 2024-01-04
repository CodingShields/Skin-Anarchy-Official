import { useState, useEffect } from "react";
import podcastIcons from "../../../assets/data/podcastIconLinks";
import {
  podcastStats,
  podcastDemographics,
} from "../../../assets/data/admin/statsPage/statsArray";
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

const AdminStats = () => {
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    success: false,
    successMessage: "",
  });
  const [statsData, setStatsData] = useState({
    date: "",
    age1834: 0,
    age3559: 0,
    downloadsPerWeek: 0,
    episodesRecorded: 0,
    men: 0,
    socialFollowers: 0,
    women: 0,
    subscribers: 0,
  });

  const [prevStatsData, setPrevStatsData] = useState({});

  const date = new Date();

  const handleStatsChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStatsData({ ...statsData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();
    try {
      const colRef = collection(db, "statsData");
      const docRef = doc(colRef, date.toString(date));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        await setDoc(docRef, statsData);
      } else {
        await setDoc(docRef, statsData);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    setStatsData({ ...statsData, date: date.toString() });
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
    <div className="flex w-full h-full bg-gray-200 border-2">
      <div className="flex flex-col justify-start items-center w-11/12 h-fit bg-gray-200 ">
        <div>
          <h1 className="text-4xl font-bold text-center text-gray-800 mt-20 mb-6">
            Podcast Stats Update Tool
          </h1>
          <div className="flex flex-col justify-center items-center w-11/12 h-fit bg-gray-200 border-2 border-black rounded-md shadow-black shadow-lg rounded-b-md">
            <h1>Get Stats</h1>
            <div>
              <h1>icons with links</h1>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-11/12 h-full bg-white border-2 border-black rounded-md shadow-black shadow-lg  mt-4">
          <h1 className="text-4xl font-bold text-center underline px-4 py-2 mx-2 my-2 w-fit">
            Podcast Stats
          </h1>
          <h1 className="text-2xl font-bold text-center text-gray-800 px-4 py-2 mx-2 my-2 w-fit rounded-md">
            Podcast Stats Last Update:{" "}
            <span className="text-red-500 text-2xl font-bold text-center bg-gray-200 px-4 py-2 mx-2 my-2 shadow-md shadow-black w-fit rounded-md">
              {prevStatsData.date}
            </span>
          </h1>
          <div className="flex flex-row w-full h-fit  justify-center items-center text-center text-lg font-bol px-4 bg-white rounded-t-md ">
            {podcastStats.map((stat, id) => (
              <div
                className="flex flex-col justify-center items-center w-1/4 h-fit mb-8"
                key={id}
              >
                <h1 className="h-fit w-fit text-2xl font-bold text-center text-gray-800 mt-4 mb-2 normal-case	">
                  {stat.name}
                </h1>
                <h1 className="font-bold text-md">
                  Previous Stat:{" "}
                  <span className="text-red-500">
                    {prevStatsData[stat.value]}
                  </span>
                </h1>
                <input
                  name={stat.value}
                  onChange={handleStatsChange}
                  className=" focus:bg-blue-200 border-black rounded-md shadow-black shadow-md overscroll-none"
                  type="text"
                />
              </div>
            ))}
          </div>
          <h1 className="text-3xl font-bold text-center underline px-4 py-2 mx-2 my-2 w-fit">
            Demographics Stats
          </h1>
          <div className="flex flex-row w-full h-fit  justify-center items-center text-center text-lg font-bol px-4 bg-white rounded-t-md ">
            {podcastDemographics.map((stat, id) => (
              <div
                className="flex flex-col justify-center items-center w-1/4 h-fit mb-8"
                key={id}
              >
                <h1 className="h-fit w-fit text-2xl font-bold text-center text-gray-800 mt-4 mb-2">
                  {stat.name}
                </h1>
                <h1 className="font-bold text-md">
                  Previous Stat:{" "}
                  <span className="text-red-500">
                    {prevStatsData[stat.value]}
                    {"%"}
                  </span>
                </h1>
                <input
                  onChange={handleStatsChange}
                  name={stat.value}
                  className=" focus:bg-blue-200 border-black rounded-md shadow-black shadow-md"
                  type="text"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-fit h-fit bg-gray-200 border-2 border-black rounded-md shadow-black shadow-md rounded-b-md mt-4 px-4 py-2 mb-4"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
