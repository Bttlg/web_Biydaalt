import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
let w = window.innerWidth;
let h = window.innerHeight - 60;

const Menu = ({ setShowModal, setShowLessons, setShowTeachers, setReset }) => {
  const showModalConfirmation = () => {
    setShowModal(true);
  };
  const showLessonsList = () => {
    setShowTeachers(false);
    setShowLessons(true);
    setReset(true);
  };
  const showTeachersList = () => {
    setShowLessons(false);
    setShowTeachers(true);
    setReset(true);
  };
  return (
    <div className="menuContainer">
      <div className="homeRow-1" style={{ height: h }}>
        <ul>
          <Link to="/Home">
            <li>Нүүр хуудас</li>
          </Link>
          <li onClick={showTeachersList}>Багш нарын жагсаалт</li>
          <li onClick={showLessonsList}>Хичээлийн жагсаалт</li>
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
