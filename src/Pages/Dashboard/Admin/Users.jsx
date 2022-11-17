import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                setUsers(data)
            })
    }, [])

    const HandleRole = (role, id) => {
        const agree = window.confirm(`Sure Make it ${role}?`);
        if (agree === false) {
            return
        }
        fetch(`http://localhost:5000/admin/role`, {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`,
                "content-type": "application/json"
            },
            body: JSON.stringify({ id, role })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`User Updated to ${role}`)
                } else {
                    toast.error(data.message)
                }
            })

    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) => {
                                if (!user?.role) {
                                    user.role = 'member'
                                }
                                return <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <select onChange={(e) => HandleRole(e.target.value, user._id)} defaultValue={user.role} className='select bg-gray-500 text-white'>
                                            <option value="admin">Admin</option>
                                            <option value="staff">Staff</option>
                                            <option value="member">Member</option>
                                            <option value="ban">Ban</option>
                                        </select>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;