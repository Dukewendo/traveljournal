import React from "react";
import globe from "../components/globe.svg";

function Header() {
  return (
    <div>
      <h1 className="page--header">My travel journal</h1>
      <img src={globe} alt="" />
    </div>
  );
}

export default Header;
