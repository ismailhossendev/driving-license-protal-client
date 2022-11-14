
import React from 'react';
import MyAppointments from './MyAppointments';
import SideBar from './SideBar';

const Dashboard = () => {

    return (
        <div className='container mx-auto grid lg:grid-cols-5 p-2'>
            <SideBar />
            <div className=" lg:col-span-4 my-10 px-2">
                <MyAppointments />
            </div>
        </div>
    );
};

export default Dashboard;