import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Courses></Courses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;