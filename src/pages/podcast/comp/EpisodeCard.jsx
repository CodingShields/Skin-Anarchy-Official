import PropTypes from "prop-types";
const EpisodeCard = (props) => {
	const { children, onClick, open } = props;
	return (
		<div
			onClick={onClick}
			className={`inline-flex mx-auto my-4 border border-white  transition-all duration-700 ease-in-out overflow-hidden ${open ? "w-fit lg:w-[900px] left-1/4 min-h-64 shadow-2xl shadow-white/50" : "w-fit lg:w-96 min-h-16 lg:min-h-24  block"}`}
		>
			{children}
		</div>
	);
};

EpisodeCard.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	data: PropTypes.object,
	image: PropTypes.string,
	icon: PropTypes.node,
	open: PropTypes.bool,
};

export default EpisodeCard;
