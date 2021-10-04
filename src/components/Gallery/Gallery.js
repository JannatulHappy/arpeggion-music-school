import React from "react";
import Footer from "../Footer/Footer";
import img1 from "../../image/gallery-1.jpg"
import img2 from "../../image/gallery-2.jpg"
import img3 from "../../image/gallery-3.jpg"
import img4 from "../../image/gallery-4.jpg"
import img5 from "../../image/about.jpg";
import img6 from "../../image/gallery-6.jpg"
import img7 from "../../image/gallery-7.jpg"

import Menubar from "../Menubar/Menubar";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h2 className="title text-center mt-4">Our Gallery</h2>
      <hr className="w-25 mx-auto text-danger  mb-4" />
      <div className="row w-75 mx-auto h-75">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src={img1}
            className="w-100 shadow-1-strong img-fluid rounded mb-4"
            alt=""
          />

          <img
            src={img2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={img3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={img4}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src={img5}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />

          <img
            src={img6}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
          <img
            src={img7}
            className="w-100 shadow-1-strong rounded mb-4"
            alt=""
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
