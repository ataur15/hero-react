import React from 'react';
import img1 from '../../../images/img1.png';
import img2 from '../../../images/img2.png';
import img3 from '../../../images/img3.png';
import icon1 from '../../../images/icon/delivery1.png';
import icon2 from '../../../images/icon/delivery2.png';
import icon3 from '../../../images/icon/alarm.png';

const ChooseUs = () => {
    return (
        <div>
            <div className="lg:w-96 mb-10">
                <h2 className="text-3xl font-medium mb-3">Why you choose us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit omnis placeat enim eaque suscipit. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                    <div className="mb-6"><img src={img1} alt="" /></div>
                    <div className="flex">
                        <div className="w-14">
                            <img src={icon1} alt="" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-medium mb-2">Fast Delivery</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur elit. Aut dolore distinctio porro debitis eius tenetur non  placeat enim eaque suscipit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-6"><img src={img2} alt="" /></div>
                    <div className="flex">
                        <div className="w-14">
                            <img src={icon3} alt="" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-medium mb-2">Good Auto Responder</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur elit. Aut dolore distinctio porro debitis eius tenetur non  placeat enim eaque suscipit.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-6"><img src={img3} alt="" /></div>
                    <div className="flex">
                        <div className="w-14">
                            <img src={icon2} alt="" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-medium mb-2">Home Delivery</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet consectetur elit. Aut dolore distinctio porro debitis eius tenetur non  placeat enim eaque suscipit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;