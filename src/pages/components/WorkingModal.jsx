import workingCircle from "../../assets/iconsAnimated/workingCircle.svg";
const WorkingModal = ({ message, open }) => {
	if (!open) return null;

	return (
		<div className='absolute w-full h-full z-40 top-0 left-0 animate-fadeIn'>
			<div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-center items-center place-content-center w-full h-full'>
				<h1 className='w-full text-2xl font-bold animate-pulse text-black text-center '></h1>
				{message}
				<div className='w-fit h-fit'>
					<img src={workingCircle} className='w-96 mx-auto' />
				</div>
			</div>
		</div>
	);
};

export default WorkingModal;
