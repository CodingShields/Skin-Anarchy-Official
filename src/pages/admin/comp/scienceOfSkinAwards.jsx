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
		renderContactForm: false,
		renderDataUpload: false,
	});

	const handleOnClick = (e) => {
		const name = e.target.value;
		if (name === "prev") {
			setState({ ...state, renderPreviousYears: true, renderUpdateTool: false, renderContactForm: false });
		} else if (name === "update") {
			setState({ ...state, renderPreviousYears: false, renderUpdateTool: true, renderContactForm: false });
		} else if (name === "contact") {
			setState({ ...state, renderContactForm: true, renderPreviousYears: false, renderUpdateTool: false });
		} else if (name === "dataUpload") {
			setState({ ...state, renderDataUpload: true, renderPreviousYears: false, renderUpdateTool: false, renderContactForm: false });
		} else {
			return;
		}
	};

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

	return (
		<div className='flex flex-col items-center w-full h-full '>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Science Of Skin Awards </h1>
			<a href='https://youtu.be/OKsbW1LrUbU' target='_blank' rel='noreferrer'>
				<p className='text-lg font-bold text-blue underline w-full  text-center py-2'>Click here for a video tutorial on how to use this tool</p>
			</a>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>**Data Upload Tool Tab ** will be deleted after old data is uploaded</h1>

			<div className='flex flex-row items-center justify-center w-fit h-fit rounded-md shadow-lg shadow-black mb-4'>
				<button
					value={"dataUpload"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-red-600 text-white text-lg px-4 py-2 w-64 rounded-l-md  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderContactForm ? "font-bold bg-blue-400" : ""
					)}
				>
					Data Upload
				</button>
				<button
					value={"contact"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-blue-600 text-white text-lg px-4 py-2 w-64 rounded-l-md  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderContactForm ? "font-bold bg-blue-400" : ""
					)}
				>
					Contact New Winner
				</button>

				<button
					value={"prev"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-blue-600 text-white text-lg px-4 py-2 w-64  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderPreviousYears ? "font-bold bg-blue-400" : ""
					)}
				>
					Previous Years
				</button>
				<button
					value={"update"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-blue-600 text-white text-lg px-4 py-2 w-64 rounded-r-md hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderUpdateTool ? "font-bold bg-blue-400" : ""
					)}
				>
					Update Tool
				</button>
			</div>
			<div className='w-full h-full'>
				{state.renderContactForm ? <Contact /> : ""}
				{state.renderPreviousYears ? <PreviousYears /> : ""}
				{state.renderUpdateTool ? <UpdateTool /> : ""}
			</div>
		</div>
	);
};

export default ScienceOfSkinAwards;
