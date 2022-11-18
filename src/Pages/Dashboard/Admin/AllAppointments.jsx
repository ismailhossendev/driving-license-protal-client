import React, { useContext } from 'react';
import { authContext } from '../../../contexts/AuthContext';
import useFetch from '../../../hooks/useFetch';

const AllAppointments = () => {
    const { user } = useContext(authContext)
    const url = "http://localhost:5000/all-appointments"
    const [appointments] = useFetch(url);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>DATE</th>
                            <th>TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.role !== "ban" &&
                            appointments.map((booking, idx) => {
                                return <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{booking.name}</td>
                                    <td>{booking.serviceName}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.time}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppointments;