import React from "react";
import "./Footer.css";
// footer area
const Footer = () => {
  return (
    <footer className="ps-5 pb-5 pt-5 text-center fw-bold fs-6">
      <section className="contact ps-5 ms-5 pb-5">
        <div className="container">
          <div className="row">
            {/* left side of footer */}
            <div className="col-lg-4">
              <div className="about">
                <h4>about Arpeggio Music School & Workshop</h4>
                <p className="my-3">
                  The best Music School in this port city !! For more than a
                  decade, it’s serving the desire of many young and even old
                  people to become a musician.
                </p>
                <ul className="list-unstyled me-5 pe-5">
                  <li className="list-inline-item">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-twitter"></i>
                  </li>
                  <li className="list-inline-item">
                    <i className="fab fa-instagram"></i>
                  </li>
                </ul>
              </div>
            </div>
            {/* middle side of footer */}
            <div className="col-lg-4">
              <div className="download">
                <h4>download</h4>
                <p className="my-3">
                  Download our app for get more benefits.We are at your door.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <span>Android Users</span>
                    <i className="fab fa-google-play"></i>
                  </li>
                  <li>
                    <span>IOS Users</span>
                    <i className="fab fa-apple"></i>
                  </li>
                </ul>
              </div>
            </div>
            {/* right side of footer */}
            <div className="col-lg-4">
              <div className="contact-info">
                <h4>contact</h4>
                <ul className="list-unstyled my-3 ">
                  <li>
                    <i className="fas fa-map-marker-alt my-2"></i>
                    <span>
                      +123, Main Street, Your City, New York, USA 789456
                    </span>
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt my-2"></i>
                    <span>+123 4567 8900</span>
                  </li>
                  <li>
                    <i className="fas fa-envelope my-2"></i>
                    <span>free@arpeeggio.com</span>
                  </li>
                  <li>
                    <i className="fas fa-mouse-pointer my-2"></i>
                    <span>www.arpeggio.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      Arpeggio Music School & Workshop &copy All right deserved
    </footer>
  );
};

export default Footer;
