import PropTypes from "prop-types";
const Modal = ({ children, open, error, isLoading, hideError, hideLoading }) => {
	if (!open) return null;
	return (
		<div
			className={`h-screen w-full fixed z-50 top-0 left-0 
		${hideError || hideLoading ? "" : "animate-fadeIn bg-black/70 "}
		 `}
		>
			<div className='w-full h-full flex justify-center items-center'>{children}</div>
		</div>
	);
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    open: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    hideError: PropTypes.func.isRequired,
    hideLoading: PropTypes.func.isRequired
}

export default Modal;
