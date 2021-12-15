import React from "react";

import "./Home.css";
import Navbar from "../navbar/Navbar";
let w = window.innerWidth;
let h = window.innerHeight;

const Home = () => {
  return (
    <div className="homeContainer">
      <Navbar />
      <div className="homeColumn-2">
        <div className="homeRow-1" style={{ height: h }}>
          <ul>
            <li>Нүүр хуудас</li>
            <li>Багш нарын жагсаалт</li>
            <li>Хичээлийн жагсаалт</li>
          </ul>
          <p className="logout" style={{ marginTop: h / 1.8 }}>
            Гарах
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
