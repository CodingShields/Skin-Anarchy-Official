import { useState } from "react";
import Mission from "./comp/mission";
import Stats from "./comp/stats";

const AboutPage = () => {

	return (
		<div className='flex flex-col h-full bg-gray-900'>
			<Mission />
			<Stats />
		</div>

	);
}

export default AboutPage