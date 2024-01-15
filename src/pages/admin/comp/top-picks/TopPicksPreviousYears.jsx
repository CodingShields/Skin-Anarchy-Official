import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";

const TopPicksPreviousYears = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		commitClicked: false,
		previousYears: [],
    });
    

	return (
		<div className='flex w-fit h-fit justify-center bg-zinc-700 py-6 px-12 rounded-lg  space-x-12 mx-auto my-8 shadow-xl shadow-gray-500'>
			<h1>Previous Years</h1>
			<div className='flex flex-col items-center justify-start w-11/12 h-full space-y-6 py-6 px-6 rounded-m group'>
				<h1 className='text-2xl hover:font-semibold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white'>
					Previous Top Picks
				</h1>
				<div className='flex flex-row items-center justify-between w-96 h-full mt-2'>
					<h1 className='text-2xl hover:font-semibold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white'>
						What year?
					</h1>
					<select name='year' className='w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center '></select>
				</div>
				<div className='flex flex-row items-center justify-between w-96 h-full mt-2'>
					<h1 className='text-2xl hover:font-semibold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white'>Category?</h1>
					<select
						// value={prevTopPicksData.category}
						// onChange={handlePrevOnchange}
						name='category'
						className='w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center'
					>
						{/* {topPicksCategoryListArray.map((category, index) => {
							return <option key={index}>{category}</option>;
						})} */}
					</select>
				</div>
			</div>
		</div>
	);
};

export default TopPicksPreviousYears;
