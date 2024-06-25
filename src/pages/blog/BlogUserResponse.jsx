import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { PlayIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { BookmarkSlashIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
const BlogUserResponse = () => {
	const [bookMarked, setBookMarked] = useState(false);

	return (
		<div className='w-full h-fit border-y '>
			<div className='w-11/12 h-full flex flex-row justify-between items-center text-white mx-auto py-2'>
				<div className='inline-flex justify-center items-center space-x-6 ml-4'>
					<HeartIcon className='w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-red-300 hover:stroke-red-500 ease-in-out transition-all duration-300' />
					<ChatBubbleOvalLeftIcon className='w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-zinc-400 hover:stroke-black ease-in-out transition-all duration-300' />
				</div>
				<div className='inline-flex justify-center items-center space-x-6 mr-4'>
					{!bookMarked ? (
						<BookmarkIcon className='w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-gold-500 hover:stroke-black ease-in-out transition-all duration-300' />
					) : (
						<BookmarkSlashIcon className='w-12 stroke-zinc-400' />
					)}
					<PlayIcon className='w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer hover:fill-green-500 hover:stroke-green-500 ease-in-out transition-all duration-300' />
					<ArrowUpOnSquareIcon className='w-6 stroke-zinc-400 hover:animate-pulse cursor-pointer  hover:stroke-black ease-in-out transition-all duration-300' />
				</div>
			</div>
		</div>
	);
};

export default BlogUserResponse;
