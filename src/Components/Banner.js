import React from 'react';
import pic1 from '../Image/pic1.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={pic1} alt='' class="max-w-sm max-height:497px rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-6xl font-bold">Learn without limits</h1>
                    <p class="py-6 text-2xl">Start, switch, or advance your career with more than 5,000 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                    <button class="btn btn-primary uppercase text-xl font-bold">Join For Learning</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;