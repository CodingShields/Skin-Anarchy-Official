import { useEffect, useState } from "react";
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

import DeleteBtn from "../../components/buttons/deleteBtn";

const AdminSponsor = () => {
  const [state, setState] = useState({
    error: false,
    errorMessage: "",
    loading: false,
    success: false,
    successMessage: "",
  });

  const [prevSponsors, setPrevSponsors] = useState([]);

  const [sponsorUpdate, setSponsorUpdate] = useState({
    sponsorName: "",
    sponsorLogo: "",
    episodeLink: "",
    episodeTitle: "",
    episodeDate: "",
    episodeDescription: "",
    episodeImage: "",
  });
  const initializeState = () => {
    setState({
      error: false,
      errorMessage: "",
      loading: false,
      success: false,
      successMessage: "",
    });
  };

  useEffect(() => {
    initializeState();
    setState({ ...state, loading: true });
    setPrevSponsors([]);
    const getStats = async () => {
      const colRef = collection(db, "sponsorData");
      const q = query(colRef);
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setPrevSponsors(doc.data());
        console.log(doc.id, " => ", doc.data());
      });
    };
    getStats();
  }, []);

  return (
		<div className='flex flex-col items-center justify-start w-full h-full mt-20 pb-10'>
			<h1 className='text-3xl font-bold text-red-500 mb-2 text-center py-2'>This Tool is not active</h1>
			{/* <div className="w-11/12  h-full  flex flex-row py-4 space-x-4">
        <div className="w-full h-11/12 flex flex-col items-center justify-start bg-white shadow-black shadow-xl rounded-lg">
          <h1 className="text-2xl font-bold text-black w-11/12 border-b-2 border-black text-center mt-4 pb-2">
            Current Sponsors
                  </h1>
                  {prevSponsors.length === 0 && <h1 className="text-2xl font-bold text-black w-11/12 text-center mt-4 pb-2">
                    No Sponsor Data Was Loaded
                    </h1>}
          {prevSponsors.map((sponsor, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-start w-full h-fit"
              >
                <h1 className="text-2xl font-bold text-black w-fit text-center mr-2">
                  Sponsor Name
                </h1>
                <h1>{sponsor.sponsorName}</h1>
                <div className="flex flex-col w-full h-fit items-center justify-center space-y-4">
                  <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                    Sponsor Logo
                  </h1>
                  <img src={sponsor.sponsorLogo} alt="image-preview" />
                </div>
                <div className="flex flex-row items-center justify-between w-fit h-fit px-2 py-8 mx-2">
                  <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                    <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                      Episode Title
                    </h1>
                    <h1>{sponsor.episodeTitle}</h1>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                    <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                      Episode Date
                    </h1>
                    <h1>{sponsor.episodeDate}</h1>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                    <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                      Episode Link
                    </h1>
                    <a href={sponsor.episodeLink}>Episode Link</a>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                    <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                      Episode Description
                    </h1>
                    <h1>{sponsor.episodeDescription}</h1>
                  </div>
                    </div>
                    <div className="flex flex-row justify-center items-center w-full h-fit">
                      <DeleteBtn />
                    </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-11/12 flex flex-col items-center justify-start bg-white shadow-black shadow-xl rounded-lg">
          <h1 className="text-2xl font-bold text-black w-11/12 border-b-2 border-black text-center mt-4 pb-2">
            Submit New Sponsor
          </h1>
          <div className="w-11/12 h-full flex flex-col items-center justify-start">
            <h1 className="text-2xl font-bold text-black w-fit border-b-2 border-black text-center mt-8">
              Instructions Here{" "}
            </h1>
            <div className="w-full h-fit flex flex-col items-center justify-center">
              <h1 className="text-lg font-bold text-black w-fit text-center my-2">
                Sponsor Name
              </h1>
              <input
                onChange={(e) =>
                  setSponsorUpdate({
                    ...sponsorUpdate,
                    sponsorName: e.target.value,
                  })
                }
                type="text"
                placeholder="Sponsor Name"
                className="border-2 w-64 h-12 border-black rounded-md"
              />
            </div>
            <div className="flex flex-col w-full h-fit items-center justify-center space-y-4">
              <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                Sponsor Logo
              </h1>
              <img src="" alt="image-preview" />
              <input
                onChange={(e) =>
                  setSponsorUpdate({
                    ...sponsorUpdate,
                    sponsorLogo: e.target.files[0],
                  })
                }
                type="file"
                placeholder="Sponsor Logo"
              />
            </div>
            <div className="flex flex-row items-center justify-between w-fit h-fit px-2 py-8 mx-2">
              <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                  Episode Title
                </h1>
                <input
                  onChange={(e) =>
                    setSponsorUpdate({
                      ...sponsorUpdate,
                      episodeTitle: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Episode Title"
                  className="border-2 w-64 h-12 border-black rounded-md"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                  Episode Date
                </h1>
                <input
                  onChange={(e) =>
                    setSponsorUpdate({
                      ...sponsorUpdate,
                      episodeDate: e.target.value,
                    })
                  }
                  type="date"
                  placeholder="Episode Date"
                  className="border-2 w-64 h-12 border-black rounded-md"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-full h-full mx-2">
                <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                  Episode Link
                </h1>
                <input
                  onChange={(e) =>
                    setSponsorUpdate({
                      ...sponsorUpdate,
                      episodeLink: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Episode Link"
                  className="border-2 w-64 h-12 border-black rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full h-full mx-2">
              <h1 className="text-lg font-bold text-black w-fit text-center mr-2">
                Episode Description
              </h1>
              <textarea
                onChange={(e) =>
                  setSponsorUpdate({
                    ...sponsorUpdate,
                    episodeDescription: e.target.value,
                  })
                }
                type="textArea"
                placeholder="Episode Date"
                className="border-2 w-11/12 h-32 border-black rounded-md"
              />
              <button className="w-64 h-12 bg-gray-600 text-white rounded-md mt-12">
                Update
              </button>
            </div>
          </div>
        </div>
      </div> */}
		</div>
	);
};

export default AdminSponsor;
