import React from "react";
import "./AboutUs.css";
import Menubar from "../Menubar/Menubar";
import "./AboutUs.css";
import img from "../../image/about.jpg";
import img2 from "../../image/accordian.jpg";
import img3 from "../../image/accordian2.jpg";

const AboutUs = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h2 className="text-center border mt-5 title ">About Us</h2>
      <hr className="w-25 mx-auto text-danger mb-4" />
      <div className="row d-flex container">
        <div className="col-lg-6 col-md-12">
          <img className=" ms-5 img-fluid" src={img} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 ">
          <h3 className="ms-5 ps-5 text-center mt-4 fs-5 about-text">
            ARPEGGIO" - Music School & Workshop
          </h3>
          <p className="ms-5 ps-5 about-text mt-4 fs-5">
            ARPEGGIO Established on April 2009, Arpeggio has established itself
            as Chattogram’s go-to provider for music lessons and tuition for all
            ages and levels. Our journey started with 20 students, and since
            then we've been fortunate enough to train more than 4000 students.
            Whatever your skill level may be, whether you're an established
            player or you've never picked up an instrument before, Arpeggio’s
            modern facilities and devoted teachers will help you achieve your
            goals.
          </p>
        </div>
      </div>
      <div className="row">
        <h1 className="title text-center mt-5 border">Why chossing Us</h1>
      </div>
      <div className="row mb-5">
        <div className="col-lg-6">
          <img className="img-fluid" src={img2} alt="" />
        </div>
        <div className="col-lg-6 mt-5 pt-5">
          <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
