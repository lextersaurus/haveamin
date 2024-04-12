import { createBrowserRouter, redirect } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home'
import AuthLayout from '../layouts/AuthLayout'
import UserEvents from '../pages/UserEvents/UserEvents'
import EventCategory from '../components/EventCategory/EventCategory'
import EventPage from '../pages/Event/Event'
import UserProfile from '../pages/UserProfile/UserProfile'
import CreateEvent from '../pages/CreateEvent/CreateEvent'

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
                path: 'miseventos',
                element: <UserEvents/>
            },
            {
                path: 'miperfil',
                element: <UserProfile/>
            },
            {
                path: 'categoria/:categoryId',
                element: <EventCategory />
            },
            {
                path: 'evento/:eventId',
                element: <EventPage />
            },
            {
                path: 'evento/crear',
                element: <CreateEvent />
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
    }

])