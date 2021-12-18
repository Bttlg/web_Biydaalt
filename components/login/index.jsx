import React, { useState, useEffect } from "react";
import css from "./style.module.css";
import "./style.module.css";
import ClientCaptcha from "react-client-captcha";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

let captchaArray = [
  "svr",
  "Gkj",
  "6GR",
  "5aS",
  "MMM",
  "t5S",
  "R54",
  "F55",
  "GGW",
  "Hae",
  "YuS",
  "ITU",
  "8wD",
];

const Login = () => {
  const [users, setUsers] = useState();
  let user = null;
  const [error, setError] = useState();
  const history = useHistory();
  const location = useLocation();
  const [captcha, setCaptcha] = useState(
    captchaArray[Math.floor(Math.random() * captchaArray.length)]
  );
  const [captchaValue, setCaptchaValue] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let w = window.innerWidth;
  let h = window.innerHeight;

  useEffect(() => {
    axios.get("http://localhost:8000/api/users").then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  const newtreh = (event) => {
    if (event.key === "Enter" || event.type == "click") {
      if (captcha === captchaValue && username !== "" && password !== "") {
        // history.push("/Navbar");
        event.preventDefault();
        users.forEach((el, index) => {
          if (username === el.username && password === el.password) {
            user = el;
            setUsername("");
            setPassword("");
            setError("");
            document.querySelector(".alert").classList.remove("alert-danger");
            window.location.replace("/#/Home");
            return;
          }
        });
        setCaptcha(
          captchaArray[Math.floor(Math.random() * captchaArray.length)]
        );
        document.querySelector(".alert").classList.add("alert-danger");
        setError("Та нэвтрэх боломжгүй байна.");
      } else if (captchaValue === "" || username === "" || password === "") {
        document.querySelector(".alert").classList.add("alert-danger");
        setError("Шаардлагатай талбарыг бөглөнө үү.");
        setCaptcha(
          captchaArray[Math.floor(Math.random() * captchaArray.length)]
        );
      } else {
        document.querySelector(".alert").classList.add("alert-danger");
        setError("Та нэвтрэх боломжгүй байна.");
        setCaptcha(
          captchaArray[Math.floor(Math.random() * captchaArray.length)]
        );
      }
    }
  };

  return (
    <div className="loginContainer">
      <div className="row-1">
        <div className="column-1">
          <img
            className="numLogo"
            src="https://sisi.num.edu.mn/sisi_v4/modules/login/Content-num75/logo-white.png"
            alt=""
            width="50%"
            height="auto"
          />
          <div className="alert">{error}</div>
          <p className="sisiTitle">SISi мэдээллийн систем 4.0</p>
          <input
            type="text"
            className="usernameInput"
            placeholder="Хэрэглэгчийн нэр / Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="passwordInput"
            placeholder="Нууц үг / Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="captcha">{captcha}</div>
          <input
            type="text"
            className="captchaInput"
            placeholder="Дээрх кодыг оруулна уу / Enter code"
            onChange={(event) => {
              setCaptchaValue(event.target.value);
            }}
            onKeyPress={newtreh}
          />
          <p className="resetPassword">
            Нууц үгээ мартсан уу? / Forget Password?
          </p>
          <button className="newtrehButton" onClick={newtreh}>
            Нэвтрэх / Sign in
          </button>
        </div>
        <div className="column-2">Монгол Улсын Их сургууль @ 2017</div>
      </div>
      <div className="row-2" style={{ height: h }}>
        <img
          src="https://www.num.edu.mn/img/num75/MUIS-building.jpg"
          alt=""
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default Login;
