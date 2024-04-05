import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                path: '',
                element: <Home />,
                loader: () => {
                    if (localStorage.getItem('token')){
                        return null
                    }else {
                        return redirect('/login')
                    }
                }
            }
        ]
    }
])