import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../contexts/AuthContext';
import ContactUs from '../Home/ContactUs';

const MyTable = ({ selected }) => {
    const { user, loading } = useContext(authContext);
    const date = format(selected, "PP")
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:5000/booking?email=${user.email}&date=${date}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(result => {

                setData(result);
            })
    }, [date, user?.email])

    if (loading) {
        return
    }
    if (user.role === "ban") {
        return <><h2 className="text-3xl text-red-700 font-bold">You Banned Contact Us</h2> <ContactUs /></>
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
                    {user.role !== "ban" &&
                        data.map((booking, idx) => {
                            return <tr key={idx}>
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