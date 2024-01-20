import { useEffect, useState } from "react";

const TechSupport = () => {
	return (
		<div className='flex flex-col h-full w-full'>
				<h1 className='text-4xl font-bold text-black mx-auto py-4'>Admin Tech Support Tool</h1>
			<div className='w-fit h-fit flex-row flex justify-center items-center mt-4 shadow-gray-600 shadow-xl mx-auto rounded-xl'>
				<button className='text-xl font-bold text-black px-8 py-4 bg-blue-400 rounded-l-xl active:translate-y-2 hover:text-black hover:bg-blue-200'>
					Submit New Ticket
				</button>
				<button className='text-xl font-bold text-black px-8 py-4 bg-blue-400 active:translate-y-2 hover:text-black hover:bg-blue-200'>
					View Open Tickets
				</button>
				<button className='text-xl font-bold text-black px-8 py-4 bg-blue-400 rounded-r-xl active:translate-y-2 hover:text-black hover:bg-blue-200 '>
					View Closed Tickets
				</button>
			</div>
			<div
			className="w-full h-full flex flex-col justify-center items-center"
			>

			</div>
		</div>
	);
};

export default TechSupport;
