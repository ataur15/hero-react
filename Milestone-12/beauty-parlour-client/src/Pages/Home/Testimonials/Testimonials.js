import React from 'react';
import StarRatings from 'react-star-ratings';
import testmonial1 from '../../../images/testmonial1.png';
import testmonial2 from '../../../images/testmonial2.png';
import testmonial3 from '../../../images/testmonial3.png';

const testimonials = [
    {
        id: 1,
        name: 'Steve Evans',
        desc: 'Lovely manicure from Gemma today. Will be going again. Relaxing atmosphere. Will send the wife and kids soon!',
        rating: 4.5,
        image: testmonial1
    },
    {
        id: 2,
        name: 'Jennifer',
        desc: 'Excellent service, inviting and warm welcome. I do not live locally and travel for almost an hour to go to the salon',
        rating: 4,
        image: testmonial2
    },
    {
        id: 3,
        name: 'Jacqui Porter',
        desc: 'Highly recommend - Great pedicure!! very relaxing with champagne and massage chair. Will be going again.',
        rating: 5,
        image: testmonial3
    }
]


const Testimonials = () => {
    return (
        <div className="max-w-6xl m-auto px-4 mb-10 md:mb-20">
            <h2 className="text-4xl text-center font-bold mb-16">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {
                    testimonials.map(testimonial =>
                        <div key={testimonial.id}>
                            <div><img className="w-20 m-auto" src={testimonial.image} alt="" /></div>
                            <h3 className="text-lg font-medium mt-2">{testimonial.name}</h3>
                            <p className="text-gray-500 mb-3">{testimonial.desc}</p>
                            <div>
                                <StarRatings
                                    rating={testimonial.rating}
                                    starRatedColor="#ffac0c"
                                    starDimension="20px"
                                    starSpacing="1px"
                                />
                            </div>
                        </div>)
                }

            </div>
        </div>
    );
};

export default Testimonials;