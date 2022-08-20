import React from 'react';
import people from '../Image/people.jpg';
import people2 from '../Image/people2.jpg';
import people3 from '../Image/people3.jpg';
import Review from './Review';


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people
        },
        {
            _id: 2,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Herry',
            review: '',
            location: 'california',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='text-center'>
                <div>
                    <h4 className="text-3xl text-primary font-bold">From The Educare Community</h4>
                    <h2 className='text-2xl'>87+ million people are already learning on Educare</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};


export default Reviews;