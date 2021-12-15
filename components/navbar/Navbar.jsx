import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import "./Navbar.css";

let w = window.innerWidth;
let h = window.innerHeight;

const Navbar = () => {
  return (
    <div className="navbarContainer" style={{ width: w }}>
      <div className="navbarRow-1">
        <BiMenu className="menuIcon" />
        <img
          src="https://sisi.num.edu.mn/sisi_v4/static/image/sisi-logo-black.png"
          alt=""
          style={{ marginLeft: "10px" }}
        />
      </div>
      <div className="navbarRow-2"></div>
    </div>
  );
};

export default Navbar;
