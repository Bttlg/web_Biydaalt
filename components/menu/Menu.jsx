import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
let w = window.innerWidth;
let h = window.innerHeight - 60;

const Menu = ({
  setShowModal,
  setShowLessons,
  setShowTeachers,
  setReset,
  setShowLessonsDelgerengui,
}) => {
  const showModalConfirmation = () => {
    setShowModal(true);
  };
  const showLessonsList = () => {
    setShowTeachers(false);
    setShowLessons(true);
    setReset(true);
    setShowLessonsDelgerengui(false);
  };
  const showTeachersList = () => {
    setShowLessons(false);
    setShowTeachers(true);
    setReset(true);
    setShowLessonsDelgerengui(false);
  };
  return (
    <div className="menuContainer">
      <div className="homeRow-1" style={{ height: h }}>
        <ul>
          <li onClick={showTeachersList}>Нүүр хуудас</li>
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
