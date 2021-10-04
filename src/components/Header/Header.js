import React from "react";
import Menubar from "../Menubar/Menubar";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Menubar></Menubar>
      <div className="middle-text">
        <h1 className="ms-5 fw-bold fs-2">ADMISSION GOING ON</h1>
        <h4 className="ms-5 ps-5 mt-4 mb-3">Session: October 2021</h4>
        <h2>Arpeggio Music School & Workshop</h2>
        <button class="arpeggio-btn">Know More</button>
      </div>
    </header>
  );
};

export default Header;
