import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import "./layout.css";

const Main = ({ children }) => {
  return (
    <div className="layout-div">
      <Content>{children}</Content>
    </div>
  );
};

export default Main;
