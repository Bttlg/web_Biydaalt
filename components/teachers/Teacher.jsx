import React from "react";
import "./Teacher.css";

import Table from "./table/Table";

import { BsArrowRight } from "react-icons/bs";

const Teacher = ({
  el,
  setTeacherShowLesson,
  setShowLessons,
  setShowTeachers,
  setTeacherId,
}) => {
  return (
    <div className="teacherContainer">
      <div className="teacherColumn-1">
        <div className="undsenMedeelel">Багшийн мэдээлэл</div>
        <button
          className="delgerenguiHarah"
          onClick={() => {
            setShowLessons(true);
            setTeacherShowLesson(true);
            setShowTeachers(false);
            setTeacherId(el._id);
          }}
        >
          <BsArrowRight />
        </button>
      </div>
      <div className="teacherColumn-2">
        <div className="teacherImageContainer">
          <img className="teacherImg" src={el.photo} alt="" />
        </div>
        <Table el={el} />
      </div>
    </div>
  );
};

export default Teacher;
