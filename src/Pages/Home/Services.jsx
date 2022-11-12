import React from 'react';
import { ourService } from '../../data/data';
import Service from './Service';
const Services = () => {
    return (
        <div className='my-10'>
            <div className="text-center">
                <h3 className='text-xl text-secondary font-semibold'>OUR SERVICES</h3>
                <h2 className='text-[36px] text-accent'>Services We Provide</h2>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5">
                {
                    ourService.map(service => <Service key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;