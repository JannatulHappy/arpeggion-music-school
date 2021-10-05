import React from "react";
import Menubar from "../Menubar/Menubar";
import Footer from "../Footer/Footer";
import "./Contact.css";
import InnerContact from "../InnerContact/InnerContact";
// set contact section
const Contact = () => {
  return (
    <div>
      <Menubar></Menubar>
      <InnerContact></InnerContact>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
