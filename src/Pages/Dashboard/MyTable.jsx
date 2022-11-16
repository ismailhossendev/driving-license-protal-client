import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext } from 'react';
import { authContext } from '../../contexts/AuthContext';

const MyTable = ({ selected }) => {
    const { user } = useContext(authContext);
    const date = format(selected, "PP")
    const { data, isLoading } = useQuery({
        queryKey: ['myAppointments', date],
        queryFn: async () => {
            const req = await fetch(`http://localhost:5000/booking?email=${user?.email}&date=${date}`);
            const data = await req.json();
            return data;
        }
    })
    if (isLoading) {
        return
    }
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>NAME</th>
                        <th>SERVICE</th>
                        <th>TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((booking, idx) => {
                            return <tr>
                                <th>{idx + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{booking.serviceName}</td>
                                <td>{booking.time}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTable;