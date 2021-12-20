import React from "react";
import "./Profile.css";

import { MdLocationOn, MdOutlineEmail, MdPhoneIphone } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { GrTask } from "react-icons/gr";
import { RiBarChart2Fill } from "react-icons/ri";
import { BsCheck2Square } from "react-icons/bs";

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profileColumn-1">Монгол Улсын Их Сургууль</div>
      <div className="profileColumn-2 border">
        <img
          style={{ borderRadius: "5px", float: "left" }}
          src="https://sisi.num.edu.mn/sisi_v4/modules/student/getstpic.ashx?id=6464a2aa-04ca-474d-b875-c0c2cbd6b956"
          alt=""
          width="60px"
          height="80px"
        />
        <div className="studentName">
          <p>Баттулга</p>
          <p className="lastName">Батжаргал</p>
        </div>
      </div>
      <div className="profileColumn-3 border row">
        <MdLocationOn className="icons" />
        <div>Хэрэглээний шинжлэх ухаан, инженерчлэлийн сургууль</div>
      </div>
      <div className="profileColumn-4 border row">
        <GiGraduateCap className="icons" />
        <div style={{ color: "#428BCA" }}>
          Мэдээллийн технологи (Бакалаврын Өдрийн сургалт - D 061304
        </div>
      </div>
      <div className="profileColumn-5 border row">
        <GrTask className="icons" />
        <div>Сургалтын төлөвлөгөө 2014</div>
      </div>
      <div className="profileColumn-6 border row">
        <RiBarChart2Fill className="icons" />
        <div>Идэвхтэй сурч байгаа</div>
      </div>
      <div className="profileColumn-7 border row">
        <BsCheck2Square className="checkIcon icons" />
        <div>19b1num0017</div>
      </div>
      <div className="profileColumn-8 border row">
        <MdPhoneIphone className="icons" />
        <div>94201427</div>
      </div>
      <div className="profileColumn-9 border row">
        <MdOutlineEmail className="icons" />
        <div>19b1num0017@stud.num.edu.mn</div>
      </div>
    </div>
  );
};

export default Profile;
