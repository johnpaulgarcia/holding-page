import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-div">
      <div>
        <a href="/" className="link-agree">
          <span className="left-tag-1 header-text">AM Insights</span>
        </a>
      </div>
      <div>
        <button className="cancel-btn btn header-bold">Get in touch</button>
      </div>
    </div>
  );
};
export default Header;
