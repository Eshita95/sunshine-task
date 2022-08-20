import React from 'react';
import download from '../Image/download.jpg';
import download1 from '../Image/download1.jpg';
import download2 from '../Image/download2.jpg';
import download3 from '../Image/download3.jpg';
import download4 from '../Image/download4.jpg';
import download5 from '../Image/download5.jpg';
import download6 from '../Image/download6.jpg';
import download7 from '../Image/download7.jpg';
import download8 from '../Image/download8.jpg';
import download9 from '../Image/download9.jpg';
import download10 from '../Image/download10.jpg';
import Course from './Course';

const Courses = () => {
    const courses = [
        {
            _id: 1,
            name: 'Data Science',
            description: '120 Courses',
            img: download
        },
        {
            _id: 2,
            name: 'Business',
            description: '140 Courses',
            img: download1
        },
        {
            _id: 3,
            name: 'Computer Science',
            description: '668 Courses',
            img: download2
        },
        {
            _id: 4,
            name: 'Social',
            description: '50 Courses',
            img: download3
        },
        {
            _id: 5,
            name: 'Web Development',
            description: '230 Courses',
            img: download4
        },
        {
            _id: 6,
            name: 'Arts And Humanities',
            description: '338 Courses',
            img: download5
        },
        {
            _id: 7,
            name: 'Information Technology',
            description: '450 Courses',
            img: download6
        },
        {
            _id: 8,
            name: 'Health',
            description: '47 Courses',
            img: download7
        },
        {
            _id: 9,
            name: 'Math And Logic',
            description: '230 Courses',
            img: download8
        },
        {
            _id: 10,
            name: 'Language Learning',
            description: '20 Courses',
            img: download9
        },
        {
            _id: 11,
            name: 'Programming',
            description: '250 Courses',
            img: download10
        }
    ];
    return (
        <div className='pt-28 px-10'>
            <div className='text-center mb-8'>
                <h3 className='text-primary text-3xl font-bold uppercase'>Explore Coursera</h3>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;