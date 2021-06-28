import React from "react";
import downarrow from "./down-arrow.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={downarrow} alt="" />
    </div>
  );
}
