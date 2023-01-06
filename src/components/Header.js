import React from "react";
import globe from "../components/globe.svg";

function Header() {
  return (
    <div className="page--header">
      <img className="header--image" src={globe} alt="" />
      <h1 className="header--text">My travel journal</h1>
    </div>
  );
}

export default Header;
