import React from 'react';
import machine from '../Image/machine.jpg';
import python from '../Image/python.jpeg';
import aws from '../Image/aws.jpg';
import lead1 from '../Image/lead1.jpg';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Supervised machine learning: Regression and classification',
            description: 'Deep Learning',
            img: machine
        },
        {
            _id: 2,
            name: 'Programming for Everybody (Getting Started with Python)',
            description: 'University Of Michigan',
            img: python
        },
        {
            _id: 3,
            name: 'AWS Cloud Technical Essentials',
            description: 'Amazon Web Services',
            img: aws
        },
        {
            _id: 4,
            name: 'Leading Teams: Developing as a Leader',
            description: 'University of Illinois at Urbana-Champaign',
            img: lead1
        }
    ];
    return (
        <div className='px-10'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Start Learning with Courses</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default Services;