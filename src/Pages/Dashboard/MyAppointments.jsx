import React, { useState } from 'react';
import { format } from 'date-fns';
import DateModal from './DateModal';
import MyTable from './MyTable';
const MyAppointments = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <div className="flex justify-between  text-accent">
                <h3 className="text-2xl">My Appointment</h3>
                <div className="relative">
                    <label htmlFor='date-modal' className="btn">{format(selected, "PP")}</label>
                </div>
            </div>
            <MyTable selected={selected} />
            <DateModal selected={selected} setSelected={setSelected} />
        </div>
    );
};

export default MyAppointments;