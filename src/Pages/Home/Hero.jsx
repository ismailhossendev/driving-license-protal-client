import React from 'react';
import hero_image from '../../assets/images/hero-image.svg';
import BtnPrimary from '../../components/BtnPrimary';
const Hero = () => {
    return (
        <div className="hero relative bg-[url(https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-cover bg-center bg-no-repeat">
            <div
                className="absolute z-10 inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"
            ></div>
            <div className="flex items-center z-50 p-4 flex-col lg:flex-row-reverse justify-between w-full">
                <img src={hero_image} className="lg:w-1/2 rounded-lg " alt='' />
                <div className='lg:text-start text-center'>
                    <h1 className="text-5xl font-bold ">Welcome To Driving <br /> <span className='bg-gradient-to-r text-transparent bg-clip-text from-red-500 to-rose-900'>License Portal</span></h1>
                    <p className="py-6">
                        Making Your Driving test appointment is now easy and fast. <br />
                    </p>
                    <BtnPrimary>Book Now</BtnPrimary>
                </div>
            </div>
        </div >
    );
};

export default Hero;