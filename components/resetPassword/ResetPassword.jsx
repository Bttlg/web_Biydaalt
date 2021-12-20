import React, { useState } from "react";
import "./ResetPassword.css";

import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

const ResetPassword = ({ user, setReset, setShowTeachers }) => {
  const location = useLocation();
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordDawt, setNewPasswordDawt] = useState("");
  const submit = () => {
    if (newPassword === newPasswordDawt) {
      if (oldPassword === user.password) {
        const changePassword = {
          password: newPassword,
        };
        if (user.role === "teacher") {
          axios
            .put(
              `http://localhost:8000/api/teachers/${user._id}`,
              changePassword
            )
            .then((response) => {
              console.log(response.data);
            });
        } else {
          axios
            .put(
              `http://localhost:8000/api/students/${user._id}`,
              changePassword
            )
            .then((response) => {
              console.log(response.data);
            });
        }
        alert("Нууц үг амжилттай солигдлоо");
        setError(false);
        setErrorText(null);
        setReset(true);
        setShowTeachers(true);
      } else {
        setError(true);
        setErrorText("Хуучин нууц үг таарахгүй байна.");
      }
    } else {
      setError(true);
      setErrorText("Шинэ нууц үгийг зөв давтана уу.");
    }
  };
  return (
    <div className="resetPasswordContainer">
      <div className="reset-column-1">Нууц үг өөрчлөх</div>
      <div className="reset-column-2">
        {error ? <div className="resetError">{errorText}</div> : null}

        <div className="resetInput">
          <span className="resetText">Хуучин нууц үг</span>
          <input
            className="resetForm"
            type="password"
            placeholder="Хуучин нууц үг "
            onChange={(event) => setOldPassword(event.target.value)}
          />
        </div>
        <div className="resetInput">
          <span className="resetText">Шинэ нууц үг</span>
          <input
            className="resetForm"
            type="password"
            placeholder="Шинэ нууц үг "
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </div>
        <div className="resetInput">
          <span className="resetText">Шинэ нууц үг давт</span>
          <input
            className="resetForm"
            type="password"
            placeholder="Шинэ нууц үг давт"
            onChange={(event) => setNewPasswordDawt(event.target.value)}
          />
        </div>
        <div className="resetInput">
          <span className="resetText">{null}</span>
          <button className="resetButton" onClick={submit}>
            Өөрчлөх
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
