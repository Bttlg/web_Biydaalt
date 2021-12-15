import React from "react";

import { Link } from "react-router-dom";
import "./Modal.css";

const Modal = ({ showModal, setShowModal }) => {
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <div className="modalContainer">
      <h5>Гарахыг зөвшөөрч байна уу?</h5>
      <div className="buttonContainer">
        <Link to="/Login">
          <button className="yesButton btn">Тийм</button>
        </Link>
        <button className="noButton btn" onClick={hideModal}>
          Үгүй
        </button>
      </div>
    </div>
  );
};

export default Modal;
