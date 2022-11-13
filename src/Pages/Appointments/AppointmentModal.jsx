import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ bookingModal, selected }) => {
    const { name, slots } = bookingModal;
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <form className="modal-box relative space-y-3">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <input type="text" name="" className='input input-bordered input-primary w-full' defaultValue={format(selected, "PPP")} disabled />
                    <select className="select select-primary w-full ">
                        {
                            slots.map((slot, idx) => <option key={idx}>{slot}</option>)
                        }
                    </select>
                    <input placeholder='Full Name' type="text" name="name" className='input w-full input-bordered border-primary' />
                    <input placeholder='Your Email' type="email" name="email" className='input w-full input-bordered border-primary' />
                    <input placeholder='Phone Number' type="Number" name="phone" className='input w-full input-bordered border-primary' />
                    <button type="submit" className='btn btn-accent w-full'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;