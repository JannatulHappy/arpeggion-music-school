import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InnerContact from '../InnerContact/InnerContact';
import TopCourses from '../TopCourses/TopCourses';
import './Home.css'
// -----home area--------
const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopCourses></TopCourses>
            <About></About>
            <InnerContact></InnerContact>
            <Footer></Footer>
        </div>
    );
};

export default Home;