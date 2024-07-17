import PropTypes from 'prop-types';
const FormModal = ({ children, open }) => {
	if (!open) return null;
	return (
		<div className='absolute bg-opacity-50 bg-gray-600 w-full min-h-screen z-20 top-0 left-0 animate-fadeIn'>
			<div className='flex justify-center items-center place-content-center w-full h-full relative mt-24 animate-fadeIn'>{children}</div>
		</div>
	);
};

FormModal.propTypes = {
	children: PropTypes.node.isRequired,
	open: PropTypes.bool.isRequired,
};

export default FormModal;
