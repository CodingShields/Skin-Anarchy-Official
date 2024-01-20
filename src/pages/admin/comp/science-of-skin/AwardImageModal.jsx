import scienceOfSkinAwardTemplate from "../../../../assets/images/logos/scienceOfSkinAwardTemplate.svg";

const AwardImageModal = () => {
	return (
		<div className='w-fit h-fit justify-center items-center absolute overflow-auto	'>
			<div className='w-96 h-96 bg-white flex justify-center items-center shadow-2xl shadow-black'>
				<img src={scienceOfSkinAwardTemplate} alt='science of skin award template' className='h-32 w-32 object-' />
			</div>
		</div>
	);
};

export default AwardImageModal;
