const AddCircleBtn = ({ onClick, name }) => {
	const btn = "increase";

	return (
		<svg
			className='w-6 h-6 text-white hover:scale-125 hover:fill-green-100 hover:stroke-green-600 active:translate-y-2 hover:cursor-pointer'
			onClick={() => onClick(name)}
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			name={btn}
		>
			<path strokeLinecap='round' strokeLinejoin='round' d='M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
		</svg>
	);
};
export default AddCircleBtn;
