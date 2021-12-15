import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
let w = window.innerWidth;
let h = window.innerHeight;

const Menu = ({ setShowModal }) => {
  const showModalConfirmation = () => {
    setShowModal(true);
  };
  return (
    <div className="homeColumn-2">
      <div className="homeRow-1" style={{ height: h }}>
        <ul>
          <li>Нүүр хуудас</li>
          <li>Багш нарын жагсаалт</li>
          <li>Хичээлийн жагсаалт</li>
        </ul>
        <p
          className="logout"
          style={{ marginTop: h / 1.8 }}
          onClick={showModalConfirmation}
        >
          Гарах
        </p>
      </div>
    </div>
  );
};

export default Menu;
