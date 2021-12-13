import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link to="/Login">
        <p>Dar</p>
      </Link>
    </div>
  );
};

export default Navbar;
