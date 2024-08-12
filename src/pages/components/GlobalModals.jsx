import { Modal, ErrorModal, WorkingModal } from "../components/Components";
import { useModal } from "../../context/ModalContext";
const GlobalModals = () => {
	const { error, message, isLoading, hideError, loadingType } = useModal();

	return (
		<Modal open={error || isLoading}>
			<ErrorModal onClose={hideError} error={error} open={error} />
			<WorkingModal open={isLoading} loadingType={loadingType} />
		</Modal>
	);
};

export default GlobalModals;
