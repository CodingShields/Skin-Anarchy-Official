import { useState } from "react";

const Podcast = () => {
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
		<div className='w-full h-fit bg-black py-12 mt-36 z-50'>
			<div className='w-full h-full space-y-12'>
				<h1 className='text-4xl text-center font-playfair text-white z-50'>LISTEN TO OUR TOP PODCASTS</h1>

				<iframe
					className='w-[1100px] h-96 
					mx-auto'
					id='embedPlayer'
					src='https://embed.podcasts.apple.com/us/podcast/skincare-anarchy/id1522162686?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark'
					sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation'
					allow='autoplay *; encrypted-media *; clipboard-write'
				></iframe>
			</div>
		</div>
	);
};

export default Podcast;
