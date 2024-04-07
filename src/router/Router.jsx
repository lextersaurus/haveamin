import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import CategoryEvent from "../pages/CategoryEvent/CategoryEvent";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Home />,
                loader: () => {
                    if (localStorage.getItem('token')){
                        return null
                    }else {
                        return redirect('/auth/login')
                    }
                }
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/categories',
        element: <CategoryEvent/>
    }
])