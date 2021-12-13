import React from "react";
import ReactDOM from "react-dom";

import "./Header.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className="headerContainer">
      {/* <HashRouter>
        <Navbar />
        <div className="componentContainer">
          <Switch>
            <Route path="/firstPage" component={FirstPage} />
            <Route path="/secondPage" component={SecondPage} />
          </Switch>
        </div>
      </HashRouter> */}
    </div>
  );
};

export default Header;
