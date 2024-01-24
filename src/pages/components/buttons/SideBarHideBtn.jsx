import { useState, useEffect } from "react";
import DoubleChevLeftBtn from "./doubleChevLeftBtn";
import DoubleChevRightBtn from "./doubleChevRightBtn";

const SideBarHideBtn = ({ onClick }) => {
	const [sideBar, setSideBar] = useState(false);

	const handleSideBar = () => {
		setSideBar(!sideBar);
		onClick(sideBar);
	};

	useEffect(() => {	
		setSideBar(false);
	}
	, []);


	return (
		<div
			onClick={handleSideBar}
			className='w-fit h-fit cursor-pointer group hover:scale-125 hover:text-green-500 hover:animate-pulse '
		>
			<h1 className='flex flex-col mx-auto whitespace-nowrap w-full text-center text-white text-md group-hover:text-green-500 group-hover:font-semibold'>
				{sideBar ? <DoubleChevRightBtn /> : <DoubleChevLeftBtn />}
				{!sideBar ? "Close Left Panel" : "Open Data Panel"}
			</h1>
		</div>
	);
};

export default SideBarHideBtn;
