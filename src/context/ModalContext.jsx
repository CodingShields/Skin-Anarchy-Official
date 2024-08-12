import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const showError = (message) => setError(message);
	const hideError = () => setError(null);

	const showLoading = () => setIsLoading(true);
	const hideLoading = () => setIsLoading(false);

	return <ModalContext.Provider value={{ error, isLoading, showError, hideError, showLoading, hideLoading }}>{children}</ModalContext.Provider>;
};

ModalProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
