import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup />
    }
])