import React from "react";

import "./Home.css";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import { useState } from "react/cjs/react.development";

const Home = () => {
  const [tolow, setTolow] = useState(true);
  return (
    <div className="homeContainer">
      <Navbar tolow={tolow} setTolow={setTolow} />
      {tolow ? <Menu /> : null}
      {/* <div className="logoutSelect">
        <p>Та гарахыг зөвшөөрч байна уу?</p>
        <p>Тийм</p>
        <p>Үгүй</p>
      </div> */}
    </div>
  );
};

export default Home;
