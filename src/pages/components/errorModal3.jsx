




const ErrorModal3 = ({ error, onClose }) => {
    return (
        <Modal
        show={error}
        onHide={onClose}
        backdrop="static"
        keyboard={false}
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
            Close
            </Button>
        </Modal.Footer>
        </Modal>
    );
    }