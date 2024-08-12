

import PropTypes from 'prop-types';
import submissionSuccess2 from '../../assets/iconsAnimated/submissionSuccess2.svg';
const SubmissionSuccessModal = ({ message, open }) => {
	if (!open) return null;

	return (
		<div className='absolute w-full h-full z-40 top-0 left-0 animate-fadeIn'>
			<div onClick={(e) => e.stopPropagation()} className='flex flex-col justify-center items-center place-content-center w-full h-full'>
				<h1 className='w-full text-2xl font-bold animate-pulse text-black text-center '></h1>
				{message}
				<div className='w-full h-fit bg-white'>
					<img src={submissionSuccess2} className='w-96 mx-auto bg-white' />
				</div>
			</div>
		</div>
	);
};

SubmissionSuccessModal.propTypes = {
	message: PropTypes.string.isRequired,
	open: PropTypes.bool.isRequired,
};



export default SubmissionSuccessModal;
