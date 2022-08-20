import React from 'react';

const Service = ({service}) => {
    return (
        <div className="card lg:max-w-lg shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="courses" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <button className='btn btn-primary'>GET COURSES</button>
            </div>
        </div>
    );
};

export default Service;