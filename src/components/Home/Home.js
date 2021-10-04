import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopCourses from '../TopCourses/TopCourses';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TopCourses></TopCourses>
            <Footer></Footer>
        </div>
    );
};

export default Home;