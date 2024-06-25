import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { BookmarkSlashIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const YugenTools = ({ handleMagToggle }) => {

    const handleMag = () => {
        handleMagToggle();
    }

	return (
		<div className='flex h-full relative mt-48 pl-4 animate-fadeIn'>
			<div className='flex flex-col border-2 bg-black/50 border-white rounded-2xl h-1/4 p-4 space-y-4 justify-center items-center'>
                <MagnifyingGlassIcon onClick={handleMag} className='w-8 h-8 stroke-none fill-white  hover:fill-gold-500/50 cursor-pointer   transition-all ease-in-out duration-300' />
				<BookmarkIcon className='w-8 h-8 text-white fill-none stroke-white cursor-pointer hover:stroke-gold-500/50 transition-all ease-in-out duration-300' />
				<PencilSquareIcon className='w-8 h-8 text-white  cursor-pointer hover:stroke-gold-500/50 transition-all ease-in-out duration-300' />
			</div>
		</div>
	);
};
0.
export default YugenTools;
