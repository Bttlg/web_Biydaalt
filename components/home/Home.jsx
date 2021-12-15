import React, { useState } from "react";

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
      console.log(event.target.innerWidth);
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
      <Navbar tolow={tolow} setTolow={setTolow} />
      {tolow ? (
        <Menu showModal={showModal} setShowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Home;
