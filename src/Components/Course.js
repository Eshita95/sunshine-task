import React from 'react';

const Course = ({course}) => {
    return (
        <div className="card card-side lg:max-w-lg shadow-xl">
            <div className="pt-4 px-4">
                <img src={course.img} alt="course" className="rounded-xl h-20 w-40" />
            </div>
            <div className="card-body">
                <p className='font-bold'>{course.name}</p>
                <p>{course.description}</p>
            </div>
        </div>
    );
};

export default Course;