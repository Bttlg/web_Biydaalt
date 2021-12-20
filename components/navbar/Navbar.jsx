import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

import "./Navbar.css";

let w = window.innerWidth;
let h = window.innerHeight;

const Navbar = ({ tolow, setTolow }) => {
  const changeTolow = () => {
    if (tolow) {
      setTolow(false);
    } else {
      setTolow(true);
    }
  };
  return (
    <div
      className="navbarContainer"
      style={{
        width: "100%",
      }}
    >
      <div className="navbarRow-1">
        <BiMenu className="menuIcon" onClick={changeTolow} />
        <img
          className="sisiLogoBlack"
          src="https://sisi.num.edu.mn/sisi_v4/static/image/sisi-logo-black.png"
          alt=""
        />
      </div>
      <div className="navbarRow-2"></div>
    </div>
  );
};

export default Navbar;
