import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, logout, loading } = useContext(authContext);
    return (
        <>
            <div className="navbar bg-base-100 container mx-auto px-2 md:px-0">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/appointment'>Appointment</Link></li>
                            {user?.uid &&
                                <>
                                    <li><Link to='/dashboard'>Dashboard</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Driving License</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        {user?.uid &&
                            <>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                            </>
                        }
                        <li><Link to='/appointment'>Appointment</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                    {user?.uid ?
                        <button onClick={logout} className='btn norma'>SignOut</button>
                        :
                        <Link to='/login' className='btn btn-accent' >Login</Link>
                    }
                </div>
            </div>
            {loading &&
                <div className="flex items-center justify-center space-x-2" bis_skin_checked="1">
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                    <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400" bis_skin_checked="1"></div>
                </div>

            }
        </>
    );
};

export default Navbar;