import { useEffect, useState } from "react";
import TopPicksCurrentYear from "./top-picks/TopPicksCurrentYear";
import TopPicksUpdateTool from "./top-picks/TopPicksUpdateTool";
import TopPicksPreviousYears from "./top-picks/TopPicksPreviousYears";
import DataUpload from "./top-picks/DataUpload";
const AdminTopPicks = () => {
	const [state, setState] = useState({
		error: false,
		errorMessage: "",
		loading: false,
		success: false,
		successMessage: "",
		renderPreviousYears: false,
		renderUpdateTool: false,
		renderCurrentYear: false,
		renderDataUpload: false,
	});
	const handleOnClick = (e) => {
		const name = e.target.value;
		if (name === "prev") {
			setState({ ...state, renderPreviousYears: true, renderUpdateTool: false, renderCurrentYear: false });
		} else if (name === "update") {
			setState({ ...state, renderPreviousYears: false, renderUpdateTool: true, renderCurrentYear: false });
		} else if (name === "current") {
			setState({ ...state, renderPreviousYears: false, renderUpdateTool: false, renderCurrentYear: true });
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
		<div className='flex flex-col items-center justify-start w-full h-full '>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Top Picks</h1>
			<a href='https://youtu.be/BUtt3KfiKd0' target='_blank' rel='noreferrer'>
				<p className='text-lg font-bold text-blue underline w-full  text-center py-2'>Click here for a video tutorial on how to use this tool</p>
			</a>
			<h1 className='text-4xl font-bold text-center h-fit w-full my-4'>**Data Upload Tool Tab ** will be deleted after old data is uploaded</h1>

			<div className='flex flex-row items-center justify-start w-fit h-fit '>
				<button
					value={"dataUpload"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-red-600 text-white text-lg px-4 py-2 w-64 rounded-l-md  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderPreviousYears ? "font-bold bg-blue-400" : ""
					)}
				>
					Data Upload
				</button>
				<button
					value={"prev"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-blue-600 text-white text-lg px-4 py-2 w-64 rounded-l-md  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderPreviousYears ? "font-bold bg-blue-400" : ""
					)}
				>
					Previous Years
				</button>

				<button
					value={"current"}
					onClick={(e) => handleOnClick(e)}
					className={classNames(
						`bg-blue-600 text-white text-lg px-4 py-2 w-64  hover:bg-blue-400 hover:font-bold active:translate-y-2`,
						state.renderCurrentYear ? "font-bold bg-blue-400" : ""
					)}
				>
					Current Year
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

			<div className='w-full h-11/12'>
				{state.renderCurrentYear ? <TopPicksCurrentYear /> : ""}
				{state.renderUpdateTool ? <TopPicksUpdateTool /> : ""}
				{state.renderPreviousYears ? <TopPicksPreviousYears /> : ""}
				{state.renderDataUpload ? <DataUpload /> : ""}
			</div>
		</div>
	);
};

export default AdminTopPicks;
