import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./Home.css";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import Modal from "../modal/Modal";
import Shadow from "../modal/shadow/Shadow";

const Home = () => {
  const [tolow, setTolow] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener(
    "resize",
    function (event) {
      setWindowWidth(event.target.innerWidth);
      console.log(userData);
    },
    true
  );
  return (
    <div className="homeContainer" style={{ width: windowWidth }}>
      {showModal ? <Shadow /> : null}
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}
      <Navbar tolow={tolow} setTolow={setTolow} />
      {tolow ? (
        <Menu showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Home;
