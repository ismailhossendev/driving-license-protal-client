import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../contexts/AuthContext';

const AppointmentModal = ({ bookingModal, selected }) => {
    const { user, loading } = useContext(authContext);
    const { name, slots } = bookingModal;
    const { register, handleSubmit } = useForm();
    if (loading) return
    const appointment = data => {
        data.date = format(selected, "PPP")
        console.log(data);
    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <form onSubmit={handleSubmit(appointment)} className="modal-box relative space-y-3">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <input type="text" className='input input-bordered input-primary w-full disabled:bg-gray-300' defaultValue={format(selected, "PPP")} disabled />
                    <select {...register('time')} className="select select-primary w-full ">
                        {
                            slots.map((slot, idx) => <option key={idx}>{slot}</option>)
                        }
                    </select>
                    <input placeholder='Full Name' {...register('name')} type="text" defaultValue={user.displayName} readOnly className='input w-full input-bordered border-primary' />
                    <input placeholder='Your Email' {...register('email')} defaultValue={user.email} readOnly type="email" name="email" className='input w-full input-bordered border-primary' />
                    <input placeholder='Phone Number'
                        {...register('phone', {
                            required: 'Phone number is required'
                        })} type="Number" name="phone" className='input w-full input-bordered border-primary'
                    />
                    <button type="submit" className='btn btn-accent w-full'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
};

export default AppointmentModal;