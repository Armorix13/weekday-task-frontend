import React from "react";
import "./Button.css";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Button = ({ backgroundColor, text, textColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div className="button" style={buttonStyle}>
      <div className="button_inner" style={{ color: textColor }}>
        {textColor ? (
          <div className="person">
            <AccountCircleIcon />
          </div>
        ) : (
          <div className="easy">
            <BoltIcon />
          </div>
        )}
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Button;
