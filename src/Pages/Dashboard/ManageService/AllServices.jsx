import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../../contexts/AuthContext';
import useFetch from '../../../hooks/useFetch';
import AddServiceModal from './AddServiceModal';

const AllServices = () => {
    const [services, loading, reLoad, setReload] = useFetch('http://localhost:5000/services')
    const { user } = useContext(authContext);
    const [modalOpen, setModalOpen] = useState(false);
    if (loading) {
        return
    }
    return (
        <div className='my-5'>
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold">All Services</h2>
                <label onClick={() => setModalOpen(true)} htmlFor="add-service-modal" className="btn">Add Service</label>
            </div>
            <div className="overflow-x-auto h-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service Name</th>
                            <th>Total Appointments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((service, i) => {
                                const handleDelete = () => {
                                    fetch(`http://localhost:5000/service-delete?id=${service._id}&email=${user?.email}`, {
                                        method: 'DELETE',
                                        headers: {
                                            authorization: `Bearer ${localStorage.getItem('token')}`,
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(data => {
                                            if (data.success) {
                                                toast.success(data.messages)
                                            } else {
                                                toast.error(data.messages)
                                            }

                                            setReload(!reLoad)
                                        })
                                }


                                return <tr key={service._id}>
                                    <th>{i + 1}</th>
                                    <td>{service.name}</td>
                                    <td>{service.total}</td>
                                    <td><button onClick={handleDelete} className='btn btn-xs'>Delete</button></td>
                                </tr>
                            })

                        }

                    </tbody>
                </table>
                {modalOpen &&
                    <AddServiceModal
                        setModalOpen={setModalOpen}
                        reLoad={reLoad}
                        setReload={setReload}
                    />

                }
            </div>
        </div>
    );
};

export default AllServices;