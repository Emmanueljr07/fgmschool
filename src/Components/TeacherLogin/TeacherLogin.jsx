import React, { useState } from "react";
import "./TeacherLogin.css"; // Importing CSS file
import { Email, Password } from "@mui/icons-material";

const TeacherLogin = () => {
  const [loading, setLoading] = useState(false);

  const LoginbtnClick = () => {
    setLoading(true);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={<Email />} alt="" />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <img src={<Password />} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {
        <div className="forgot-password">
          Lost Password? <span>Click Here!</span>
        </div>
      }

      <div className="submit-container">
        {/* "submit gray" */}
        <div
          className={loading ? "submit gray" : "submit"}
          onClick={() => LoginbtnClick()}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
