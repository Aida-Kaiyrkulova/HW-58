import React, { useState } from "react";
import Modal from "./components/UI/Modal/Modal";
import Alert from "./components/UI/Alert/Alert";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWarning, setShowWarning] = useState(true);
  const [showSuccess, setShowSuccess] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const closeWarning = () => setShowWarning(false);
  const closeSuccess = () => setShowSuccess(false);
  const closeDanger = () => setShowDanger(false);

  return (
    <div className="container mt-5">
      <button className="btn btn-primary" onClick={openModal}>
        Open Modal
      </button>

      {showWarning && (
        <Alert type="warning" onDismiss={closeWarning}>
          This is a warning type alert
        </Alert>
      )}

      {showSuccess && (
        <Alert type="success" onDismiss={closeSuccess}>
          This is a success type alert
        </Alert>
      )}

      {showDanger && (
        <Alert type="danger" onDismiss={closeDanger}>
          This is a danger type alert
        </Alert>
      )}

      <Modal show={showModal} onClose={closeModal} title="Modal title">
        <p>This is modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
