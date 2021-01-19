import React from "react";
import "./left.css";
const LeftTouch = ({ signup, contact }) => {
  return (
    <div className="left-div">
      <div>
        <span className="left-tag-1">AM Insights</span>
      </div>
      <div>
        <h3 className="left-tag-2">Fund research as it should be</h3>
      </div>
      <div>
        <h3 className="left-tag-3">COMING SOON</h3>
      </div>
      <div className="btn-div">
        <button onClick={() => signup()} className="signup-btn btn">
          Signup for Early Access
        </button>
        <button onClick={() => contact()} className="touch-btn btn">
          Get in touch
        </button>
      </div>
    </div>
  );
};
export default LeftTouch;
