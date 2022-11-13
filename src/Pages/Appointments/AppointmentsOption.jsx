import React from 'react';

const AppointmentsOption = ({ option, setBookingModal }) => {
    const { name, slots } = option;
    return (
        <div>
            <div className="card bg-base-100 shadow-md shadow-slate-500">
                <div className="card-body text-center relative">
                    <div className="h-[120px]">
                        <h2 className="text-2xl font-serif font-semibold text-accent">{name}</h2>
                        <p className=''>{slots.length > 0 ? slots[0] : 'Slot Not Available'}</p>
                        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    </div>
                    <div className="w-full">
                        <label
                            disabled={slots.length === 0}
                            onClick={() => setBookingModal(option)}
                            htmlFor="appointment-modal"
                            className="btn w-full btn-primary"
                        >
                            BOOK NOW
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOption;