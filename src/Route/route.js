import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointments from "../Pages/Appointments/Appointments";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers";
import AllAppointments from "../Pages/Dashboard/Admin/AllAppointments";
import BanUsers from "../Pages/Dashboard/Admin/BanUsers";
import Messages from "../Pages/Dashboard/Admin/Messages";
import StaffUsers from "../Pages/Dashboard/Admin/StaffUsers";
import Users from "../Pages/Dashboard/Admin/Users";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllServices from "../Pages/Dashboard/ManageService/AllServices";
import MyAppointments from "../Pages/Dashboard/MyAppointments";
import SideBar from "../Pages/Dashboard/SideBar";
import Home from "../Pages/Home/Home";
import Login from "../Pages/loginSignUp/Login";
import SignUp from "../Pages/loginSignUp/SignUp";
import Success from "../Pages/Payment/Success";
import AdminRoute from "./AdminRoute";
import LoginRoute from "./LoginRoute";
import StaffRoute from "./StaffRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: ([
            {
                path: "/", element: <Home />
            },
            {
                path: '/appointment',
                element: <Appointments />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/confirmation/:id',
                element: <Success />,
                loader: ({ params }) => fetch(`http://localhost:5000/confirmation/${params.id}`)
            }
        ])
    },
    {
        path: '/dashboard',
        element: <LoginRoute><SideBar /></LoginRoute>,
        children: ([
            {
                path: '/dashboard',
                element: <MyAppointments />
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><Users /></AdminRoute>
            },
            {
                path: '/dashboard/admins',
                element: <AdminRoute><AdminUsers /></AdminRoute>
            },
            {
                path: '/dashboard/ban-users',
                element: <AdminRoute><BanUsers /></AdminRoute>
            },
            {
                path: '/dashboard/staffs',
                element: <AdminRoute><StaffUsers /></AdminRoute>
            },
            {
                path: '/dashboard/messages',
                element: <StaffRoute><Messages /></StaffRoute>
            },
            {
                path: '/dashboard/all-Appointments',
                element: <StaffRoute><AllAppointments /></StaffRoute>
            },
            {
                path: '/dashboard/services',
                element: <AdminRoute><AllServices /></AdminRoute>
            },
        ])
    }
])