
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, {useState } from 'react';
import AppointmentModal from './AppointmentModal';
import AppointmentsOption from './AppointmentsOption';

const AppointmentsOptions = ({ selected }) => {
    const [bookingModal, setBookingModal] = useState(null);
    const { data: options = [], isLoading, refetch } = useQuery({
        queryKey: ['appointOptions', selected],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointment-options?date=${format(selected, "PP")}`);
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return
    };
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
                        setBookingModal={setBookingModal}
                        selected={selected}
                        refetch={refetch}
                    />
                }
            </div>
        </div>
    );
};

export default AppointmentsOptions;