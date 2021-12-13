import React from "react";
import css from "./style.module.css";
import "./style.module.css";
import ClientCaptcha from "react-client-captcha";

const Login = () => {
  let captchaCode = "";
  let w = window.innerWidth;
  let h = window.innerHeight;
  return (
    <div className="loginContainer">
      <div className="row-1">
        <div className="column-1">
          <img
            src="https://sisi.num.edu.mn/sisi_v4/modules/login/Content-num75/logo-white.png"
            alt=""
            width="35%"
            height="auto"
          />
          <p className="sisiTitle">SISi мэдээллийн систем 4.0</p>
          <input
            type="text"
            className="usernameInput"
            placeholder="Хэрэглэгчийн нэр / Username"
          />
          <input
            type="password"
            className="passwordInput"
            placeholder="Нууц үг / Password"
          />
          <div className="captcha">
            <ClientCaptcha
              captchaCode={(code) => {
                captchaCode = code;
              }}
            />
          </div>
          <input
            type="text"
            className="captchaInput"
            placeholder="Дээрх кодыг оруулна уу / Enter code"
          />
          <p className="resetPassword">
            Нууц үгээ мартсан уу? / Forget Password?
          </p>
          <button className="newtrehButton">Нэвтрэх / Sign in</button>
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
