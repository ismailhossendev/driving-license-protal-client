import React from 'react';
import BtnPrimary from '../../components/BtnPrimary';
const HomeAppointments = () => {
    return (
        <div className=' bg-[url(https://images.pexels.com/photos/38570/lamborghini-car-speed-prestige-38570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center  mt-24 mb-10 rounded-md'>
            <div className="
            h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex items-center
            ">
                <img className='h-full hidden lg:block lg:w-1/2 -mt-32' src='https://www.reddrivingschool.com/wp-content/uploads/2021/04/New-Clio-Master-Pic-4-compressed.png' alt="" />
                <div className="text-gray-300 p-10 space-y-2">
                    <h4 className='text-secondary'>Appointment</h4>
                    <h3 className="text-3xl font-serif font-semibold text-white">Make an appointment Today</h3>
                    <p>
                        Make an appointment with our professional instructors and get your driving license in no time.

                    </p>
                    <BtnPrimary>Get started</BtnPrimary>

                </div>
            </div>
        </div>
    );
};

export default HomeAppointments;