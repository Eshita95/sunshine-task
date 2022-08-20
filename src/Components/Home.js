import React from 'react';
import Banner from './Banner';
import Courses from './Courses';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Courses></Courses>
        </div>
    );
};

export default Home;