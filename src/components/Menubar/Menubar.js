import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.css'

const Menubar = () => {
    return (
        <nav class=" p-2 justify-content-between d-flex fs-5">
        <div>
          <h1>ARPEGGIO</h1>
        </div>
        <div className="d-flex fs-5 me-5">
          <Link to="/home" className="nav-item" >
            Home
          </Link>
          <Link to="/about"className="nav-item" >
            About Us
          </Link>
          <Link to="/courses" className="nav-item" >
            Courses
          </Link>
          <Link to="/gallery" className="nav-item" >
            Gallery
          </Link>
          <Link to="/contact" className="nav-item" >
            Contact
          </Link>
        </div>
      </nav>
    );
};

export default Menubar;