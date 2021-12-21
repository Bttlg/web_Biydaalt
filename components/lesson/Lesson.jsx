import React, { useEffect, useState } from "react";
import "./Lesson.css";

import axios from "axios";

import { AiFillStar } from "react-icons/ai";

const Lesson = ({ setShowLessonsDelgerengui }) => {
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/lessons")
      .then((response) => {
        console.log(response.data.data);
        setLessons(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clickLesson = () => {
    setShowLessonsDelgerengui(true);
  };

  return (
    <div className="lessonContainer">
      {lessons.map((el, index) => {
        return (
          <div className="lessonElement" onClick={clickLesson} key={index}>
            <AiFillStar className="starIcon" />
            <span className="lessonName">
              {el.lessonIndex} - {el.lessonName} ({el.credit})
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Lesson;
