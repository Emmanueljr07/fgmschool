import React, { useState } from "react";
import "./TeacherLogin.css"; // Importing CSS file
import { Email, Lock } from "@mui/icons-material";
import fgmlogo from "../../assets/FGM LOGO.jpg";

const TeacherLogin = () => {
  const [loading, setLoading] = useState(false);

  const LoginbtnClick = () => {
    setLoading(true);
  };

  return (
    <div className="container">
      <div className="header">
        <span>
          <img src={fgmlogo} alt=""></img>
        </span>
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <Email
            sx={{
              color: "black",
              ml: 1,
              mr: 1,
            }}
          />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <Lock
            sx={{
              color: "black",
              ml: 1,
              mr: 1,
            }}
          />
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
