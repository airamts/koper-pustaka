import React from 'react'
import ReactDOM from 'react-dom/client'
import KoperPustakaApp from './components/KoperPustakaApp';
import LoginPage from './pages/login';
import HomePage from './pages/home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router =  createBrowserRouter ([
    {
        path: '/',
        element: <KoperPustakaApp />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
        path: '/home',
        element: <HomePage />
      },
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )

