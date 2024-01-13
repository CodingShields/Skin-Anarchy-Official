import { useState, useEffect } from "react";
import PreviousYears from "./science-of-skin/previousYears";
import UpdateTool from "./science-of-skin/updateTool";
import Contact from "./science-of-skin/contact";
const ScienceOfSkinAwards = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		renderPreviousYears: false,
		renderUpdateTool: false,
		renderContact: false,
	});

	const handleOnClick = (e) => {
		const name = e.target.value;
		if (name === "prev") {
			setState({ ...state, renderPreviousYears: true, renderUpdateTool: false, renderContact: false });
		} else if (name === "update") {
			setState({ ...state, renderPreviousYears: false, renderUpdateTool: true, renderContact: false });
		} else if (name === "contact") {
			setState({ ...state, renderContact: true, renderPreviousYears: false, renderUpdateTool: false });
		} else {
			return;
		}
	};

	return (
		<div className='flex flex-col items-center justify-start w-full h-full '>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Science Of Skin Awards </h1>
			<div className='flex flex-row items-center justify-center w-fit h-fit rounded-md shadow-lg shadow-black mb-2'>
				<button
					value={"contact"}
					onClick={(e) => handleOnClick(e)}
					className='bg-blue-600 text-white text-lg px-4 py-2 w-64 rounded-l-md border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
				>
					Contact New Winner
				</button>
				<button
					value={"prev"}
					onClick={(e) => handleOnClick(e)}
					className='bg-blue-600 text-white text-lg px-4 py-2 w-64  border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
				>
					Previous Years
				</button>
				<button
					value={"update"}
					onClick={(e) => handleOnClick(e)}
					className='bg-blue-600 text-white text-lg  px-4 py-2 w-64 rounded-r-md border-blue-600 border-2 hover:bg-blue-400 hover:font-bold active:translate-y-2'
				>
					Update Tool
				</button>
			</div>
			<div className='w-full h-11/12'>
				{state.renderContact ? <Contact /> : ""}
				{state.renderPreviousYears ? <PreviousYears /> : ""}
				{state.renderUpdateTool ? <UpdateTool /> : ""}
			</div>
		</div>
	);
};

export default ScienceOfSkinAwards;
