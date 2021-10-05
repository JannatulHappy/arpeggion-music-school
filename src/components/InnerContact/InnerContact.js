import React from "react";

const InnerContact = () => {
  return (
    <div>
      {/* titile */}
      <h2 className="title text-center mt-4">Contact Us</h2>
      <hr className="w-25 mx-auto text-danger  " />
      <section className="row mb-5">
        {/* left image of contact section */}
        <div className="col-lg-6 pt-5 ps-5">
          <img
            className="img-fluid mt-5 pt-5 ps-5"
            src="https://st3.depositphotos.com/1526816/12931/v/950/depositphotos_129316534-stock-illustration-many-kids-playing-different-musical.jpg"
            alt=""
          />
        </div>
        {/* contact form in contact section  */}
        <div className=" col-lg-6 ">
          <form className="contact">
            <div className="dark">
              <h2>Get Admission Now</h2>
              <form class="quote">
                <label>
                  <h6>Name</h6>
                </label>
                <br />
                <input type="text" placeholder="Enter Name" />
                <br />
                <label>
                  <h6>Email</h6>
                </label>
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <label>
                  <h6>Message</h6>
                </label>
                <br />
                <textarea rows="5" placeholder="Your requirement"></textarea>
                <button className="arpeggio-btn ">Get Now</button>
              </form>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default InnerContact;
