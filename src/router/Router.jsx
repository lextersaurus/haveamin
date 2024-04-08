import { createBrowserRouter, redirect } from "react-router-dom";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
/* import CategoryEvent from "../pages/CategoryEvent/CategoryEvent";
 */import UserEvents from "../pages/UserEvents/UserEvents";
import AllEvents from "../pages/AllEvents/AllEvents";
import EventCategory from "../components/EventCategory/EventCategory";

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
            },
            {
                path: '/miseventos',
                element: <UserEvents/>
            },
            /*     {
                    path: '/categories',
                    element: <CategoryEvent/>
            }, */
            {
                path: '/events',
                element: <AllEvents/>
            },
            {
                path: 'category/:categoryId',
                element: <EventCategory />
            },
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
    }

])