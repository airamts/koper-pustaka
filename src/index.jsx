import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './pages/login';
import LandingPage from './pages/home';
import SignIn from './pages/signIn';
import ChangePassword from './pages/changePassword';
import ForgotPassword from './pages/forgotPassword';
import HomeLog from './pages/homeLog';
import JelajahPage from "./pages/jelajah";
import DetailPage from "./pages/detail";
import PinjamBukuPage from "./pages/pinjam";
import FormKoleksiPage from "./pages/FormKoleksi";
import DataDiriPage from "./pages/Datadiri";
import AlamatPage from "./pages/Alamat";
import IdentitasPage from "./pages/Identitas";
import Modal from "react-modal";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

Modal.setAppElement('#root');
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
    },
    {
    path: "/jelajah",
    element: <JelajahPage />,
    },
    {
    path: "/book/:title",
    element: <DetailPage />,
    },
    {
    path: "/book/:title/:id/pinjam",
    element: <PinjamBukuPage />,
    },
    {
    path: "/datadiri",
    element: <DataDiriPage />,
    },
    {
    path: "/Alamat",
    element: <AlamatPage />,
    },
    {
    path: "/identitas",
    element: <IdentitasPage />,
    },
    {
    path: "/formkoleksi",
    element: <FormKoleksiPage />,
    }
]);

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
