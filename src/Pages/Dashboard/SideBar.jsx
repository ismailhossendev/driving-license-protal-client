import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import { FaUserFriends, FaUserShield, FaUserAstronaut, FaRegCalendarAlt, FaUsers, FaAngleDown, FaCommentAlt } from "react-icons/fa";
import Navbar from '../../components/Navbar';

const SideBar = () => {
    const { user } = useContext(authContext);
    return (
        <>
            <Navbar />
            <div className="drawer drawer-mobile container mx-auto">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <Link to='/dashboard' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                            <FaRegCalendarAlt />
                            <span className="ml-3 text-sm font-medium">My Appointments </span>
                        </Link>
                        {user.role === 'admin' &&
                            <details className="group">
                                <summary className="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <FaUsers />
                                    <span className="ml-3 text-sm font-medium"> Users </span>
                                    <span className="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                                        <FaAngleDown />
                                    </span>
                                </summary>
                                <nav aria-label="Teams Nav" className="mt-1.5 ml-8 flex flex-col">
                                    <Link to='/dashboard/users' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <FaUserFriends />
                                        <span className="ml-3 text-sm font-medium"> All Users </span>
                                    </Link>
                                    <Link to='/dashboard/admins' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <FaUserShield />
                                        <span className="ml-3 text-sm font-medium"> Admin Users</span>
                                    </Link>
                                    <Link to='/dashboard/ban-users' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                        </svg>
                                        <span className="ml-3 text-sm font-medium">Ban Users </span>
                                    </Link>
                                    <Link to='/dashboard/staffs' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                        <FaUserAstronaut />
                                        <span className="ml-3 text-sm font-medium">Staffs</span>
                                    </Link>
                                </nav>
                            </details>
                        }
                        {(user.role === "admin" || user.role === "staff") &&
                            <>

                                <Link to='/dashboard/messages' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <FaCommentAlt />
                                    <span className="ml-3 text-sm font-medium">Public Messages</span>
                                </Link>
                                <Link to='/dashboard/all-Appointments' className="flex items-center rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                    <FaRegCalendarAlt />
                                    <span className="ml-3 text-sm font-medium">All Appointments</span>
                                </Link>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>
    );
};

export default SideBar;