import React from "react";
import { Link } from "react-router-dom";
import Menubar from "../Menubar/Menubar";

import "./Header.css";
// ----------header area-------
const Header = () => {
  return (
    <header className="header">
      <Menubar></Menubar>
      <div className="middle-text">
        <h1 className="ms-5 fw-bold fs-2">ADMISSION GOING ON</h1>
        <h4 className="ms-5 ps-5 mt-4 mb-4">Session : October 2021</h4>
        <h2 >Arpeggio Music School & Workshop</h2>
        <Link to="/about">
          <button class="arpeggio-btn">Know More</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
