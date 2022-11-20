import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';

const AppointmentsOption = ({ option, setBookingModal }) => {
    const { name, slots, image } = option;
    const { user } = useContext(authContext);
    return (
        <div>
            <div className="card bg-base-100 shadow-md shadow-slate-500">
                <div className="card-body text-center relative">
                    <div className="h-[220px]">
                        <img className='h-[100px] object-cover' src={image} alt="" />
                        <h2 className="text-2xl font-serif font-semibold text-accent">{name}</h2>
                        <p className=''>{slots.length > 0 ? slots[0] : 'Slot Not Available'}</p>
                        <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    </div>
                    <div className="w-full">
                        {user?.email ? <label
                            disabled={slots.length === 0}
                            onClick={() => setBookingModal(option)}
                            htmlFor="appointment-modal"
                            className="btn w-full btn-primary"
                        >
                            BOOK NOW
                        </label> :
                            <Link to='/login' className='btn w-full btn-error'>Login</Link>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsOption;