import "./App.css";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import AboutUs from "./components/AboutUs/AboutUs";
import Courses from "./components/Courses/Courses";
import Gallery from "./components/Gallery/Gallery";
export const coursesContext = createContext();
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="App">
      <coursesContext.Provider value={[courses]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route exact path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </coursesContext.Provider>
    </div>
  );
}

export default App;
