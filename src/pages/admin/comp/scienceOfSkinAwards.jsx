import { useState, useEffect } from "react";


const categoryArray = [
  "Best New Skincare Treatment",
  "Best New Skincare Product",
  "Best New Skincare Brand",
  "Best New Skincare Brand",
  "Best New Skincare Brand",
];

const ScienceOfSkinAwards = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
	});

	const yearList = () => {
		let years = [];
		for (let i = 2018; i < 2030; i++) {
			years.push(i);
		}
		return years;
  };
  
  

	return (
		<div className='flex flex-col items-center justify-start w-full h-full '>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Science Of Skin Awards Update Tool</h1>
			<div className='flex flex-col items-center justify-start w-11/12 h-11/12 space-y-8'>
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Select Year</h1>
				<select>
					{yearList().map((year) => {
						return <option value={year}>{year}</option>;
					})}
				</select>
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Select Category</h1>
				add category list dropdown
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Brand Name</h1>
				<input type='text' />
				<h1 className='text-2xl font-bold text-center h-fit w-full'>Brand Logo</h1>
        <input type='file' />
        <h1 className='text-2xl font-bold text-center h-fit w-full'>Product Name</h1>
        <input type='text' />
        <h1 className='text-2xl font-bold text-center h-fit w-full'>Product Image</h1>
        <input type='file' />
        <h1 className='text-2xl font-bold text-center h-fit w-full'>Product Link</h1>
        <input type='text' /> Link Should Be Trackable
			</div>
		</div>
	);
};

export default ScienceOfSkinAwards;
