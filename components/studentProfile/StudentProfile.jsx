import React from "react";
import "./StudentProfile.css";

import { MdLocationOn, MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { GrTask } from "react-icons/gr";
import { RiBarChart2Fill } from "react-icons/ri";
import { BsCheck2Square } from "react-icons/bs";

const StudentProfile = ({ user }) => {
  return (
    <div className="profileContainer">
      <div className="profileColumn-1">Монгол Улсын Их Сургууль</div>
      <div className="profileColumn-2 border">
        <img
          style={{ borderRadius: "5px", float: "left" }}
          src={user.photo}
          alt=""
          width="60px"
          height="80px"
        />
        <div className="studentName">
          <p>{user.firstName}</p>
          <p className="lastName">{user.lastName}</p>
        </div>
      </div>
      <div className="profileColumn-3 border row">
        <MdLocationOn className="icons" />
        <div>{user.school}</div>
      </div>
      <div className="profileColumn-4 border row">
        <GiGraduateCap className="icons" />
        <div style={{ color: "#428BCA" }}>{user.hotolbor}</div>
      </div>
      <div className="profileColumn-5 border row">
        <GrTask className="icons" />
        <div>{user.tolowlogoo}</div>
      </div>
      <div className="profileColumn-6 border row">
        <RiBarChart2Fill className="icons" />
        <div>{user.tolow}</div>
      </div>
      <div className="profileColumn-7 border row">
        <BsCheck2Square className="checkIcon icons" />
        <div>{user.username}</div>
      </div>
      <div className="profileColumn-8 border row">
        <MdPhoneIphone className="icons" />
        <div>{user.phone}</div>
      </div>
      <div className="profileColumn-9 border row">
        <MdOutlineEmail className="icons" />
        <div>{user.email}</div>
      </div>
    </div>
  );
};

export default StudentProfile;
