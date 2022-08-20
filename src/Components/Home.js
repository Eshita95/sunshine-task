import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Courses></Courses>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;