import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointments from "../Pages/Appointments/Appointments";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/loginSignUp/Login";
import SignUp from "../Pages/loginSignUp/SignUp";
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
        element: <LoginRoute><Dashboard /></LoginRoute>
    }
])