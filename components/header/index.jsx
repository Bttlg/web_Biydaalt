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

import Login from "../login";

const Header = () => {
  return (
    <div className="headerContainer">
      <HashRouter>
        <Login />
        <div className="componentContainer">
          <Switch>
            <Route path="/Login" component={Login} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  );
};

export default Header;
