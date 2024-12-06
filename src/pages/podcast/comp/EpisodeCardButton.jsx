import {
	ChevronDoubleRightIcon,
	BookmarkIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
const EpisodeCardButton = (props) => {
	const { onClick, open, index } = props;
	return (
		<div
			key={index}
			onClick={onClick}
			className="w-fit h-28 flex flex-col justify-center items-center px-2 text-white "
		>
			{/* <ChevronDoubleRightIcon
				className={`w-6 h-6 lg:w-8 lg:h-8 ${open ? "-rotate-180 " : "text-red-200"}  hover:text-green-500   transition-all hover:scale-150 duration-500 ease-in-out cursor-pointer`}
			/> */}
			{/* <BookmarkIcon
				className={`w-8 h-8  transition-all duration-500  hover:fill-blue-200 hover:scale-150 cursor-pointer ease-in-out ${open ? "visible stroke-blue-600" : "hidden"}`}
			/>
			<StarIcon
				className={`w-8 h-8 transition-all duration-500  hover:fill-yellow-100 hover:scale-150 cursor-pointer ease-in-out ${open ? "visible text-yellow-400" : "hidden"}`}
			/> */}
		</div>
	);
};

EpisodeCardButton.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	data: PropTypes.object,
	image: PropTypes.string,
	icon: PropTypes.string,
	open: PropTypes.bool,
	index: PropTypes.number,
};

export default EpisodeCardButton;
