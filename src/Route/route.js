import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointments from "../Pages/Appointments/Appointments";
import AdminUsers from "../Pages/Dashboard/Admin/AdminUsers";
import BanUsers from "../Pages/Dashboard/Admin/BanUsers";
import StaffUsers from "../Pages/Dashboard/Admin/StaffUsers";
import Users from "../Pages/Dashboard/Admin/Users";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyAppointments from "../Pages/Dashboard/MyAppointments";
import Home from "../Pages/Home/Home";
import Login from "../Pages/loginSignUp/Login";
import SignUp from "../Pages/loginSignUp/SignUp";
import AdminRoute from "./AdminRoute";
import LoginRoute from "./LoginRoute";

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
            }
        ])
    },
    {
        path: '/dashboard',
        element: <LoginRoute><Dashboard /></LoginRoute>,
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
        ])
    }
])