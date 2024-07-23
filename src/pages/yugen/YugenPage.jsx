import {useState, useEffect} from "react";

import YugenBook from "./YugenBook";
import yugenbg from "../../assets/images/yugen/yugenbg.jpeg";
import yugenbg2 from "../../assets/images/yugen/yugenbg2.jpeg";
import yugenbg3 from "../../assets/images/yugen/yugenbg3.jpeg";
import yugenbg4 from "../../assets/images/yugen/yugenbg4.jpeg";
import yugenbg5 from "../../assets/images/yugen/yugenbg5.jpeg";
const YugenPage = () => {



	return (
		<div className='w-full h-screen animate-fadeIn'>
			<div className='w-full h-full flex justify-center items-center space-x-2'>
				<YugenBook />
			</div>
		</div>
	);
};

export default YugenPage;
