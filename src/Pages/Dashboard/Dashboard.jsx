
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SideBar from './SideBar';

const Dashboard = () => {

    return (
        <>
            <Navbar />
            <div className='container mx-auto grid lg:grid-cols-5 p-2'>
                <SideBar />
                <div className=" lg:col-span-4 my-10 px-2">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Dashboard;