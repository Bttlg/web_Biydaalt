import React, { useState } from "react";
import "./Dropdown.css";

import { IoMdArrowDropdown } from "react-icons/io";

const Dropdown1 = ({ user }) => {
  const [seeDropdown, setSeeDropdown] = useState(false);
  const seeDropdownFunc = () => {
    if (seeDropdown) setSeeDropdown(false);
    else setSeeDropdown(true);
  };
  return (
    <div className="dropdownContainer">
      <div className="dropdown-menu unselect" onClick={seeDropdownFunc}>
        <img
          src="https://sisi.num.edu.mn/sisi_v4/modules/student/getstpic.ashx?id=6464a2aa-04ca-474d-b875-c0c2cbd6b956"
          alt=""
          width="24px"
          height="29px"
        />
        <p className="username">Баттулга</p>
        <IoMdArrowDropdown className="arrow" />
      </div>
      {seeDropdown ? (
        <ul className="dropdown-element unselect">
          <li className="elements">Хувийн мэдээлэл</li>
          <li className="elements">Нууц үг солих</li>
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown1;
