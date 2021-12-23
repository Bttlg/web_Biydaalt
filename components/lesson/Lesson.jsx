import React, { useEffect, useState } from "react";
import "./Lesson.css";

import axios from "axios";

import { AiFillStar } from "react-icons/ai";

const Lesson = ({
  setShowLessonsDelgerengui,
  setLessonId,
  setLesson,
  teacherShowLesson,
  teacherId,
}) => {
  const [lessons, setLessons] = useState([]);
  var myArr = [];
  const [teacher, setTeacher] = useState([]);
  const [teacherLessons, setTeacherLessons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/lessons")
      .then((response) => {
        if (teacherShowLesson) setTeacher(response.data.data);
        else setLessons(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (teacherShowLesson) {
      axios
        .get(`http://localhost:8000/api/teachers/${teacherId}`)
        .then((response) => {
          setTeacherLessons(response.data.data.lessons);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const bagshiinHicheel = () => {
    teacherLessons.forEach((index) => {
      teacher.forEach((el) => {
        if (index === el.lessonIndex) myArr.push(el);
      });
    });
  };

  return (
    <div className="lessonContainer">
      {teacherShowLesson ? bagshiinHicheel() : null}
      {teacherShowLesson
        ? myArr.map((el, index) => {
            return (
              <div
                className="lessonElement"
                onClick={() => {
                  setLessonId(el._id);
                  setShowLessonsDelgerengui(true);
                  axios
                    .get(`http://localhost:8000/api/lessons/${el._id}`)
                    .then((response) => {
                      setLesson(response.data.data);
                    });
                }}
                key={el._id}
              >
                <AiFillStar className="starIcon" />
                <span className="lessonName">
                  {el.lessonIndex} - {el.lessonName} ({el.credit})
                </span>
              </div>
            );
          })
        : lessons.map((el, index) => {
            return (
              <div
                className="lessonElement"
                onClick={() => {
                  setLessonId(el._id);
                  setShowLessonsDelgerengui(true);
                  axios
                    .get(`http://localhost:8000/api/lessons/${el._id}`)
                    .then((response) => {
                      setLesson(response.data.data);
                    });
                }}
                key={el._id}
              >
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
