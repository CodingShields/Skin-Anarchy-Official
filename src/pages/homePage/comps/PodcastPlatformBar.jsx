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
		<div className='w-3/4 h-64 grid grid-cols-12 relative mx-auto py-48'>
			{podcastIconLinks.map((item, id) => (
				<div className=' h-32 w-20' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} key={id}>
					<a href={item.link} target='_blank' rel='noreferrer'>
						<img
							id={item.id}
							className='w-auto h-12 transition-all duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125'
							src={item.icon}
							alt={item.icon}
							name={item.name}
						/>{" "}
						<h1
							className={
								open && activeIcon === item.name
									? "transition-all duration-300 ease-in-out text-white animate-fadeIn translate-y-2 whitespace-nowrap text-start"
									: "transition-all duration-300 ease-in-out animate-fadeOut whitespace-nowrap text-start "
							}
						>
							{activeIcon}
						</h1>
					</a>
				</div>
			))}
		</div>
	);
};

export default PodcastPlatformBar;
