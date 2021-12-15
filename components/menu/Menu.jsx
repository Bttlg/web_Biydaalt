import React from "react";
import { Link } from "react-router-dom";

import "./Menu.css";
let w = window.innerWidth;
let h = window.innerHeight;

const Menu = () => {
  return (
    <div className="homeColumn-2">
      <div className="homeRow-1" style={{ height: h }}>
        <ul>
          <li>Нүүр хуудас</li>
          <li>Багш нарын жагсаалт</li>
          <li>Хичээлийн жагсаалт</li>
        </ul>
        <Link to="/Login">
          <p className="logout" style={{ marginTop: h / 1.8 }}>
            Гарах
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
