const CloseButton = ({ onClick, color }) => {
	return (
		<div onClick={onClick} className='absolute top-0 right-0 z-50 cursor-pointer hover:scale-110 mr-4 mt-4'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				stroke-width='1.5'
				stroke='currentColor'
				className={`hover:scale-125 w-6 h-6 transition-all ease-in-out duration-200 text-${color}` }
			>
				<path stroke-linecap='round' stroke-linejoin='round' d='M6 18 18 6M6 6l12 12' />
			</svg>
		</div>
	);
};

export default CloseButton;
