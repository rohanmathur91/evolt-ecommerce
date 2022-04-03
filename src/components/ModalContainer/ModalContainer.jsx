import React from "react";
import ReactDOM from "react-dom";
import "./ModalContainer.css";

export const ModalContainer = ({ children, handleShowModal }) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => handleShowModal(false)}
      className="modal-container flex-row flex-center"
    >
      {children}
    </div>,
    document.body
  );
};
