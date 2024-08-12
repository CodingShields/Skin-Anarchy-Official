import { Modal, ErrorModal, WorkingModal, SubmissionSuccessModal } from "../components/Components";
import { useModal } from "../../context/ModalContext";
import PropTypes from "prop-types";
const GlobalModals = () => {
	const { error, message, isLoading, hideError, loadingType, showSubmissionSuccess, modalOpen} = useModal();

	return (
		<Modal open={modalOpen}>
			<ErrorModal onClose={hideError} error={error} open={error} />
			<WorkingModal open={isLoading} loadingType={loadingType} />
			<SubmissionSuccessModal open={showSubmissionSuccess} message={message} />
		</Modal>
	);
};

GlobalModals.propTypes = {
	error: PropTypes.bool.isRequired,
	message: PropTypes.string,
	isLoading: PropTypes.bool.isRequired,
	hideError: PropTypes.func.isRequired,
	loadingType: PropTypes.string.isRequired,
	successOpen: PropTypes.bool.isRequired,
	successClose: PropTypes.func.isRequired,
};

export default GlobalModals;
