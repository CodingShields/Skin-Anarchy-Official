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
		<div className="w-full h-fit border-y ">
			<div className="w-10/12 h-full flex flex-row justify-between items-center text-black/50 py-3 mx-auto">
				<div className="inline-flex justify-center items-center space-x-4">
					<HeartIcon className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-red-300 hover:stroke-red-500 ease-in-out transition-all duration-300" />
					<ChatBubbleOvalLeftIcon className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-zinc-400 hover:stroke-black ease-in-out transition-all duration-300" />
					{openFullScreen ? (
						<ArrowsPointingInIcon
							onClick={handleClick}
							className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-zinc-400 hover:stroke-black ease-in-out transition-all duration-300"
						/>
					) : (
						<ArrowsPointingOutIcon
							onClick={handleClick}
							className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-zinc-400 hover:stroke-black ease-in-out transition-all duration-300"
						/>
					)}
				</div>
				<div className="inline-flex justify-center items-center space-x-3">
					{!bookMarked ? (
						<BookmarkIcon className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-gold-500 hover:stroke-black ease-in-out transition-all duration-300" />
					) : (
						<BookmarkSlashIcon className="w-12 stroke-zinc-400" />
					)}
					<PlayIcon className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-green-500 hover:stroke-green-500 ease-in-out transition-all duration-300" />
					<ArrowUpOnSquareIcon className="w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer  hover:stroke-black ease-in-out transition-all duration-300" />
				</div>
			</div>
		</div>
	);
};

export default BlogUserResponse;
