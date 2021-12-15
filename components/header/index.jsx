import React from "react";
import ReactDOM from "react-dom";

import "./style.module.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link,
  HashRouter,
  Redirect,
} from "react-router-dom";

import Login from "../login";
import Navbar from "../navbar/Navbar";
import Home from "../home/Home";

const Header = () => {
  return (
    <div className="headerContainer">
      <HashRouter>
        <div className="componentContainer">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} />
            {/* <Route exact path="/" component={Login} /> */}
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default Header;
