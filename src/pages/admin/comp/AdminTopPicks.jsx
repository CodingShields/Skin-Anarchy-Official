import { useEffect, useState } from "react";
import TopPicksCurrentYear from "./top-picks/TopPicksCurrentYear";
import TopPicksUpdateTool from "./top-picks/TopPicksUpdateTool";
import TopPicksPreviousYears from "./top-picks/TopPicksPreviousYears";
const AdminTopPicks = () => {



	return (
		<div className='flex flex-col items-center justify-start w-full h-full '>
			<h1 className='text-3xl font-bold text-red-500 mb-2 text-center py-2'>This Tool is not active</h1>

			{/* <h1 className='text-4xl font-bold text-center h-fit w-full my-4'>Top Picks</h1>
			<a href='https://youtu.be/BUtt3KfiKd0' target='_blank' rel='noreferrer'>
				<p className='text-lg font-bold text-blue underline w-full  text-center py-2'>Click here for a video tutorial on how to use this tool</p>
			</a> */}
			{/* <h1 className='text-4xl font-bold text-center h-fit w-full my-4'>**Data Upload Tool Tab ** will be deleted after old data is uploaded</h1> */}

			{/* <div className='flex flex-row items-center justify-start w-fit h-fit '>
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

			<div className='w-full h-11/12 flex justify-center relative'>
				{state.renderCurrentYear ? <TopPicksCurrentYear /> : ""} */}
			{/* <TopPicksUpdateTool />  */}
			{/* {state.renderPreviousYears ? <TopPicksPreviousYears /> : ""}
				{state.renderDataUpload ? <DataUpload /> : ""}
			</div> */}
		</div>
	);
};

export default AdminTopPicks;
