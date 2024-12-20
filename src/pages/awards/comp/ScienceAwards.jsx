const ScienceAwards = ({ children, active }) => {
	return (
		<div
			className={`animate-fadeIn h-fit grid grid-cols-2 lg:grid-cols-5 mx-auto mb-24 lg:mb-36 gap-2 lg:gap-8 w-10/12 lg:w-3/4 `}
		>
			{children}
		</div>
	);
};

export default ScienceAwards;
