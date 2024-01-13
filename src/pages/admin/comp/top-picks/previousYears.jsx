import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { storage } from "../../../../fireBase/firebaseConfig";
import { v4 } from "uuid";

const PreviousYears = () => {
	const [state, setState] = useState({
		loading: false,
		uploading: false,
		error: null,
		errorMessage: "",
		commitClicked: false,
		previousYears: [],
    });
    

	return (
		<div>
			<h1>Previous Years</h1>
			<div className='flex flex-col items-center justify-start w-11/12 h-full space-y-6 py-6 px-6 bg-white shadow-lg shadow-black rounded-md hover:bg-gray-400 group'>
				<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 border-b-2 border-black group-hover:text-white group-hover:border-white'>
					Previous Top Picks
				</h1>
				<div className='flex flex-row items-center justify-between w-96 h-full mt-2'>
					<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white'>What year?</h1>
					<select
						name='year'
						value={prevTopPicksData.year}
						onChange={handlePrevOnchange}
						className='w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center '
					>
						{yearList()}
					</select>
				</div>
				<div className='flex flex-row items-center justify-between w-96 h-full mt-2'>
					<h1 className='text-2xl font-bold text-black w-fit text-center mr-2 truncate group-hover:text-white'>Category?</h1>
					<select
						value={prevTopPicksData.category}
						onChange={handlePrevOnchange}
						name='category'
						className='w-48 hover:font-bold hover:ring-4 hover:ring-blue-500 text-center'
					>
						{topPicksCategoryListArray.map((category, index) => {
							return <option key={index}>{category}</option>;
						})}
					</select>
				</div>
			</div>
		</div>
	);
};

export default PreviousYears;
