import React, { useState } from "react";
import "./Dropdown.css";

import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown1 = ({ user, setReset }) => {
  const [seeDropdown, setSeeDropdown] = useState(false);
  const seeDropdownFunc = () => {
    if (seeDropdown) setSeeDropdown(false);
    else setSeeDropdown(true);
  };
  return (
    <div className="dropdownContainer">
      <div className="dropdown-menu unselect" onClick={seeDropdownFunc}>
        <img
          src={user.photo}
          alt=""
          width="24px"
          height="29px"
          style={{ marginRight: "5px" }}
        />
        <p className="username">{user.firstName}</p>
        <IoMdArrowDropdown className="arrow" />
      </div>
      {seeDropdown ? (
        <ul className="dropdown-element unselect">
          <li className="elements">Хувийн мэдээлэл</li>
          <li
            className="elements"
            onClick={() => {
              setReset(false), setSeeDropdown(false);
            }}
          >
            Нууц үг солих
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown1;
