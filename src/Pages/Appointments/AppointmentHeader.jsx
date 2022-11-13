import React from 'react';
import headerImage from '../../assets/images/hero-image.svg'

//day picker
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentHeader = ({ setSelected, selected }) => {

    return (
        <div className=' grid md:grid-cols-2 grid-cols-1 mt-10'>
            <div className="lg:h-[355px] lg:mx-auto">
                <img className='h-full ' src={headerImage} alt="" />
            </div>
            <div className=" mx-auto ">
                <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                />

            </div>
        </div>
    );
};

export default AppointmentHeader;