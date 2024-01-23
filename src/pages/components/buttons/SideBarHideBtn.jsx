import { useState } from "react";
import DoubleChevLeftBtn from "./doubleChevLeftBtn";
import DoubleChevRightBtn from "./doubleChevRightBtn";

const SideBarHideBtn = ({ onClick }) => {
	const [sideBar, setSideBar] = useState(false);

	const handleSideBar = () => {
		setSideBar(!sideBar);
		onClick(sideBar);
	};

	return (
		<div
			onClick={handleSideBar}
			className='w-full h-fit flex flex-col justify-center items-center cursor-pointer group hover:scale-125 hover:text-green-500 hover:animate-pulse '
		>
			{sideBar ? <DoubleChevRightBtn /> : <DoubleChevLeftBtn />}
			<h1 className='whitespace-nowrap text-white text-md group-hover:text-green-500 group-hover:font-semibold'>
				{sideBar ? "Close Left Panel" : "Open Data Panel"}
			</h1>
		</div>
	);
};

export default SideBarHideBtn;
