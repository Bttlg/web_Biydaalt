import React, { useEffect, useState } from "react";
import "./LessonDelgerengui.css";

import axios from "axios";

const LessonDelgerengui = ({ lessonId, lesson }) => {
  return (
    <div className="lessonDelgerenguiContainer">
      <div className="delgerengui-column-1">Хичээлийн мэдээлэл</div>
      <div className="delgerengui-column-2">
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">Сургууль, тэнхим:</span>
          <div className="lesson-medeelel-element-2">{lesson.school}</div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">Хичээлийн нэр:</span>
          <div className="lesson-medeelel-element-2">
            {lesson.lessonName} ({lesson.lessonIndex})
          </div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">Түвшин:</span>
          <div className="lesson-medeelel-element-2">{lesson.tuwshin}</div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">Багц цаг:</span>
          <div className="lesson-medeelel-element-2">{lesson.credit}</div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">
            Долоо хоногт орох цаг (үргэлжлэх хугацаа):
          </span>
          <div className="lesson-medeelel-element-2">
            {lesson.lecture} <br />
            {lesson.seminar}
          </div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">
            Ерөнхий эрдмийн хичээл мөн эсэх:
          </span>
          <div className="lesson-medeelel-element-2">{lesson.yronhiiTolow}</div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">
            Хуваарьтай хичээл мөн эсэх:
          </span>
          <div className="lesson-medeelel-element-2">{lesson.huwaariTolow}</div>
        </div>
        <div className="delgerengui-column-2-element">
          <span className="lesson-medeelel-element-1">Орох улирал:</span>
          <div className="lesson-medeelel-element-2">{lesson.uliral}</div>
        </div>
        <div className="delgerengui-column-2-element-about">
          <span className="lesson-medeelel-element-about-1">Зорилго</span>
          <div className="lesson-medeelel-element-about-2">
            {lesson.zorilgo}
          </div>
        </div>
        <div className="delgerengui-column-2-element-about">
          <span className="lesson-medeelel-element-about-1">Товч агуулга</span>
          <div className="lesson-medeelel-element-about-2">
            {lesson.aguulga}
          </div>
        </div>
        <div className="delgerengui-column-2-element-about">
          <span className="lesson-medeelel-element-about-1">
            Хичээлээр эзэмших мэдлэг, чадвар, дадал
          </span>
          <div className="lesson-medeelel-element-about-2">{lesson.medleg}</div>
        </div>
        <div className="delgerengui-column-2-element-about">
          <span className="lesson-medeelel-element-about-1">Ном зүй</span>
          <div className="lesson-medeelel-element-about-2">{lesson.nomzui}</div>
        </div>
      </div>
    </div>
  );
};

export default LessonDelgerengui;
