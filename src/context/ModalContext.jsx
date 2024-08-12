import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [modalOpen, setOpenModal] = useState(false);
	const [showSubmissionSuccess, setShowSubmissionSuccess] = useState(false);
	const showError = (message) => setError(message);
	const hideError = () => setError(null);

	const showModal = async () => setOpenModal(true);
	const hideModal = async () => {
		setOpenModal(false)
		setError(null)
		setShowSubmissionSuccess(false)
		setIsLoading(false)
	}

	const showLoading = async () => {
		setOpenModal(true)
		setIsLoading(true)
	};
	const hideLoading = async () => setIsLoading(false);

	const showSuccess = async () => setShowSubmissionSuccess(true);
	const hideSuccess = async () => setShowSubmissionSuccess(false);

	return (
		<ModalContext.Provider
			value={{
				error,
				isLoading,
				showError,
				hideError,
				showLoading,
				hideLoading,
				showSuccess,
				hideSuccess,
				hideModal,
				showModal,
				modalOpen,
				showSubmissionSuccess,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};

ModalProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
