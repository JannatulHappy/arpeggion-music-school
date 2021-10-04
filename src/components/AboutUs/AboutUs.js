import React from "react";
import "./AboutUs.css";
import Menubar from "../Menubar/Menubar";
import "./AboutUs.css";
import img from "../../image/about.jpg";

import img3 from "../../image/accordian2.jpg";
import { Accordion } from "react-bootstrap";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Menubar></Menubar>
      <h2 className="text-center mt-5 title ">About Us</h2>
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
        <h1 className="title text-center mt-5 ">Why Choosing Arpeggio</h1>
        <hr className="w-50 mt-3 mx-auto text-danger mb-4" />
      </div>
      <div className="row mb-5 ">
        <div className="col-lg-6">
        <img className="img-fluid" src={img3} alt="" />
        </div>
        <div className="col-lg-6 mt-5 ">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><h6 className="accordion-title">Lesson plan and methodology</h6></Accordion.Header>
              <Accordion.Body className="accordion-body">
                Our syllabus is made to guide the students step by step. We
                offer one-to-one lesson to understand everyone's inner soul. Our
                lesson plan is made to help the students play music on their own
                just like the way we use different languages to communicate in
                our daily life. We understand everyone is different, so we try
                to treat them as individuals.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header> <h6 className="accordion-title">Theoretical & Practical test</h6></Accordion.Header>
              <Accordion.Body className="accordion-body">
                After completing a grade, our students sit for an exam that
                contains both theoretical and practical tests. They must pass
                the test to step up to the next grade. This helps them face all
                the puzzles given in the lessons and makes them even better.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
            
               <h6 className="accordion-title"> Jamming session, Group playing & Listening session</h6>
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                We pick up students and arrange jamming sessions to let them
                understand the musical conversation. This is a way out toward
                the freedom of their own composition. We also arrange listening
                sessions for introducing them to new genres of music. They can
                share different music with each other to widen their listening.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header> <h6 className="accordion-title">Theoretical & Practical test</h6></Accordion.Header>
              <Accordion.Body className="accordion-body">
                After completing a grade, our students sit for an exam that
                contains both theoretical and practical tests. They must pass
                the test to step up to the next grade. This helps them face all
                the puzzles given in the lessons and makes them even better.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item  eventKey="4">
              <Accordion.Header><h6 className="accordion-title">Students performing session</h6></Accordion.Header>
              <Accordion.Body className="accordion-body">
                We arrange regular performing sessions for students to get rid
                of performance anxiety and stage fright. This helps them to grow
                more confident to become a better performer.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header><h6 className="accordion-title"> Scholarship</h6></Accordion.Header>
              <Accordion.Body className="accordion-body">
                We offer a scholarship for talented students. Especially for
                those who are unable to afford the tuition fees
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
