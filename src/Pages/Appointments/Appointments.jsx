import React, { useState } from 'react';
import AppointmentHeader from './AppointmentHeader';
import AppointmentsOptions from './AppointmentsOptions';

const Appointments = () => {

    const [selected, setSelected] = useState(new Date());
    return (
        <div className='container mx-auto px-2 md:px-0 space-y-10'>
            <AppointmentHeader
                setSelected={setSelected}
                selected={selected}
            />
            <AppointmentsOptions
                selected={selected}
            />
        </div>
    );
};

export default Appointments;