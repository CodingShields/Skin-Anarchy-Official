import { useState, useEffect } from "react";
import {
	HeartIcon,
	ArrowUpOnSquareIcon,
	PlayIcon,
	BookmarkIcon,
	BookmarkSlashIcon,
	ChatBubbleOvalLeftIcon,
	ArrowsPointingOutIcon,
	ArrowsPointingInIcon,
} from "@heroicons/react/24/outline";
const BlogUserResponse = ({ handleFullScreenMode }) => {
	const [bookMarked, setBookMarked] = useState(false);
	const [openFullScreen, setOpenFullScreen] = useState(false);

	const handleClick = () => {
		handleFullScreenMode();
		setOpenFullScreen(!openFullScreen);
	};

	return (
		<div className="w-full h-fit border-y lg:w-1/2">
			<div className="w-10/12 h-full flex flex-row justify-between items-center text-black/50 py-3 mx-auto">
				<div className="inline-flex justify-center items-center space-x-4">
					<HeartIcon className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-red-300 lg:hover:stroke-red-500 ease-in-out transition-all duration-300" />
					<ChatBubbleOvalLeftIcon className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-black lg:hover:stroke-black/50 ease-in-out transition-all duration-300" />
					{openFullScreen ? (
						<ArrowsPointingInIcon
							onClick={handleClick}
							className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-black lg:hover:stroke-black/50 ease-in-out transition-all duration-300"
						/>
					) : (
						<ArrowsPointingOutIcon
							onClick={handleClick}
							className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-black hover:stroke-black/50 ease-in-out transition-all duration-300"
						/>
					)}
				</div>
				<div className="inline-flex justify-center items-center space-x-3">
					{!bookMarked ? (
						<BookmarkIcon className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-gold-500 lg:hover:stroke-black/50 ease-in-out transition-all duration-300" />
					) : (
						<BookmarkSlashIcon className="w-12 stroke-black/50" />
					)}
					<PlayIcon className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer lg:hover:fill-green-500 lg:hover:stroke-green-500 ease-in-out transition-all duration-300" />
					<ArrowUpOnSquareIcon className="w-6 stroke-black/50 lg:hover:animate-pulse cursor-pointer  lg:hover:stroke-black/50 ease-in-out transition-all duration-300" />
				</div>
			</div>
		</div>
	);
};

export default BlogUserResponse;
