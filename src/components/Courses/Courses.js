import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { coursesContext } from "../../App";
import Menubar from "../Menubar/Menubar";
import img from "../../image/online.jpg";
import img2 from "../../image/online2.jpg";
import "./Courses.css";
import Footer from "../Footer/Footer";
// courses area
const Courses = () => {
  // getting data from context api
  const [courses] = useContext(coursesContext);
  return (
    <div>
      <Menubar></Menubar>
      <div className=" courses">
        <h1 className="text-center mt-5 title border">Regular Courses</h1>
        <hr className="w-50 mx-auto text-danger mb-4" />
        {/* regular courses area */}
        <div className="row g-4">
          {courses?.map((course) => (
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="course">
                <div className="course-img">
                  <img className="img-fluid" src={course.image} alt="" />
                </div>
                <div className="text-area mt-2">
                  <h1 className="fw-bold">{course.courseName}</h1>
                  <hr className="w-50  mx-auto text-danger" />
                  <h4>Course Duration : {course.courseDuration}</h4>
                  <h4>Admission Fee : {course.admissionFee}</h4>
                  <p className="text-secondary mb-3">
                    {course.admissionFeeDetails}
                  </p>
                  <h6>{course.class}</h6>
                  <Link to="/contact">
                    <button className="arpeggio-button fs-5 mt-3">
                      Get Admission Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* short courses area */}
        <h1 className="text-center mt-5 border mb-5 title">Short Courses</h1>
        <div className="row g-4">
          {courses.slice(4, 8)?.map((course) => (
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="course">
                <div className="course-img">
                  <img className="img-fluid" src={course.image} alt="" />
                </div>
                <div className="text-area mt-2">
                  <h1 className="fw-bold">{course.courseName}</h1>
                  <hr className="w-50  mx-auto text-danger" />
                  <h4>Course Duration : {course.courseDuration}</h4>
                  <h4>Admission Fee : {course.admissionFee}</h4>
                  <p className="text-secondary mb-3">
                    {course.admissionFeeDetails}
                  </p>
                  <h6>{course.class}</h6>
                  <Link to="/contact">
                    <button className="arpeggio-button fs-5 mt-3">
                      Get Admission Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* online courses area */}
        <h1 className="text-center mt-5 mb-5 border title">Online Courses</h1>
        {/* img of online courses area */}
        <div className="online-course mx-5 ps-5 d-flex">
          <img src={img} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Courses;
