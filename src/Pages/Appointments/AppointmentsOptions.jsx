import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentsOption from './AppointmentsOption';

const AppointmentsOptions = ({ selected }) => {
    const [options, setOptions] = useState([]);
    const [bookingModal, setBookingModal] = useState(null);

    useEffect(() => {
        fetch('appointmentOption.json')
            .then(res => res.json())
            .then(data => {
                setOptions(data)
            })
    }, [])
    return (
        <div>
            <p className='text-center text-accent font-semibold font-serif text-xl'>Available Appointments on {format(selected, 'PP')}</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
                {
                    options.map(option => <AppointmentsOption
                        key={option._id}
                        option={option}
                        setBookingModal={setBookingModal}
                    />)
                }
                {bookingModal &&
                    <AppointmentModal
                        bookingModal={bookingModal}
                        selected={selected}
                    />
                }
            </div>
        </div>
    );
};

export default AppointmentsOptions;