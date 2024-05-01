import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login';
import LandingPage from './pages/home';
import SignIn from './pages/signIn';
import ChangePassword from './pages/changePassword';
import ForgotPassword from './pages/forgotPassword';
import HomeLog from './pages/homeLog';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router =  createBrowserRouter ([
    {
      path: '/',
      element: <LandingPage />
    },  
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signIn',
      element: <SignIn/>
    },
    {
      path: '/homeLog',
      element: <HomeLog/>
    },
    {
      path: '/changePassword',
      element: <ChangePassword />
    },
    {
      path: '/forgotPassword',
      element: <ForgotPassword />
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )

