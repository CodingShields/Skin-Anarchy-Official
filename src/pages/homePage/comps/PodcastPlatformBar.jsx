import podcastIconLinks from "../../../assets/data/podcastIconLinks";
import { useState } from "react";

const PodcastPlatformBar = () => {
	const [open, setOpen] = useState(false);
	const [activeIcon, setActiveIcon] = useState("");

	const handleMouseOver = (e) => {
		const name = e.target.name;
		setOpen(true);
		setActiveIcon(name);
	};

	const handleMouseOut = () => {
		console.log("test");
		setOpen(false);
	};
	return (
		<div className='w-[1700px] h-48 grid grid-cols-12 justify-evenly items-center mx-auto  '>
			{podcastIconLinks.map((item, id) => (
				<div className='w-20' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={id}>
					<a href={item.link} target='_blank' rel='noreferrer'>
						<img
							id={item.id}
							className='lg:w-12 w-20 h-auto mx-auto transition-all duration-300 ease-in-out grayscale hover:grayscale-0'
							src={item.icon}
							alt={item.icon}
							name={item.name}
						/>
					</a>
					<h1
						className={
							open && activeIcon === item.name
								? "transition-all duration-300 ease-in-out text-white before::animate-fadeIn translate-y-6 whitespace-nowrap text-center w-20"
								: "transition-all duration-300 ease-in-out after::animate-fadeOut whitespace-nowrap text-center"
						}
					>
						{activeIcon}
					</h1>
				</div>
			))}
		</div>
	);
};

export default PodcastPlatformBar;
