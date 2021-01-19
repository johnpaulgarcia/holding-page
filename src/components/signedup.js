import React from "react";
import "./signedup.css";
const SignedUp = ({
  handleClose,
  message = "You have signed up successfully",
  subtitle = "Minim ad ex sit eu aute laborum. Consequat",
}) => {
  return (
    <div className="signup-div">
      <div className="signup-div-content">
        <span className="signup-message">{message}</span>
        <span className="signup-message-subtitle">{subtitle}</span>
        <button
          onClick={() => handleClose()}
          className="submit-btn btn btn-close"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default SignedUp;
