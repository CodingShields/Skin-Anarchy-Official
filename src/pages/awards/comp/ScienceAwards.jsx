const ScienceAwards = ({ children, active }) => {
	return (
		<div
			className={`animate-fadeIn h-fit grid grid-cols-2 lg:grid-cols-3 mx-auto mb-36 gap-8 w-3/4 `}
		>
			{children}
		</div>
	);
};

export default ScienceAwards;
