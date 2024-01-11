import { useState, useEffect } from "react";
import PreviousYears from "./science-of-skin/previousYears";
import UpdateTool from "./science-of-skin/updateTool";

const ScienceOfSkinAwards = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		renderPreviousYears: false,
		renderUpdateTool: false,
	});

	const handleOnClick = (e) => {
		const name = e.target.value;
		if (name === "prev") {
			setState({ ...state, renderPreviousYears: true, renderUpdateTool: false });
		} else if (name === "update") {
			setState({ ...state, renderPreviousYears: false, renderUpdateTool: true });
		} else {
			return;
		}
	};

	return (
		<div className='flex flex-col items-center justify-start w-full h-full '>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Science Of Skin Awards </h1>
			<div className='flex flex-row items-center justify-center w-fit h-fit rounded-md shadow-lg shadow-black mb-2'>
				<button
					value={"prev"}
					onClick={(e) => handleOnClick(e)}
					className='bg-blue-600 text-white text-lg px-4 py-2 w-48 rounded-l-md border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
				>
					Previous Years
				</button>
				<button
					value={"update"}
					onClick={(e) => handleOnClick(e)}
					className='bg-blue-600 text-white text-lg  px-4 py-2 w-48 rounded-r-md border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
				>
					Update Tool
				</button>
			</div>
			<div className='block w-3/4 h-11/12 overscroll-y-auto overflow-y-scroll grow-0 overflow-x-none '>
				{state.renderPreviousYears ? <PreviousYears /> : ""}
				{state.renderUpdateTool ? <UpdateTool /> : ""}
			</div>
		</div>
	);
};

export default ScienceOfSkinAwards;
