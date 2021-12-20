import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./Home.css";
import Navbar from "../navbar/Navbar";
import Dropdown from "./dropdown/Dropdown";
import Menu from "../menu/Menu";
import Modal from "../modal/Modal";
import Shadow from "../modal/shadow/Shadow";
import Profile from "../profile/Profile";
import Lesson from "../lesson/Lesson";
import Teacher from "../teachers/Teacher";

const Home = (props) => {
  const [tolow, setTolow] = useState(true);
  const [teachers, setTeachers] = useState(props.location.state.teachers);
  const [showModal, setShowModal] = useState(false);
  const [showLessons, setShowLessons] = useState(false);
  const [showTeachers, setShowTeachers] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  window.addEventListener(
    "resize",
    function (event) {
      setWindowWidth(event.target.innerWidth);
    },
    true
  );
  return (
    <div className="homeContainer" style={{ width: windowWidth }}>
      {showModal ? <Shadow /> : null}
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <div className="home-column-1">
        <Navbar tolow={tolow} setTolow={setTolow} />
        <Dropdown user={props.location.state} />
      </div>
      <div className="home-column-2">
        {tolow ? (
          <Menu
            showModal={showModal}
            setShowModal={setShowModal}
            setShowLessons={setShowLessons}
            setShowTeachers={setShowTeachers}
          />
        ) : null}
        <div
          className="home-row-1"
          style={{ height: windowHeight, width: "100%" }}
        >
          <Profile />

          {showLessons ? (
            <div className="lessonsContainer">
              <Lesson />{" "}
            </div>
          ) : null}

          {showTeachers ? (
            <div className="teachersContainer">
              {teachers.map((el, index) => {
                return <Teacher key={index} el={el} />;
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
