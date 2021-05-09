import React from "react";
import { Modal } from "react-bootstrap";
import "./Modal.scss";

function CustomModal({
  title,
  isModalOpen,
  handleClose,
  children,
  isModalHeaderImageShow,
}) {
  return (
    <>
      <Modal
        show={isModalOpen}
        onHide={handleClose}
        backdrop={true}
        keyboard={false}
      >
        {!isModalHeaderImageShow ? (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        ) : (
          <Modal.Header className="modal-header-img" closeButton></Modal.Header>
        )}

        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
}

export default CustomModal;
