import React from 'react';
import ReactDOM from 'react-dom/client';
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
import { FormKoleksiContext } from './components/formKoleksi-page/FormKoleksi/FormulirValidasiKoleksi';
import ProtectedRoute from './ProtectedRoute';

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
      element: (
        <ProtectedRoute>
          <HomeLog />
        </ProtectedRoute>
      )
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
    path: '/book/:title',
    element: <DetailPage />,
  },
  {
    path: '/book/:title/:id/pinjam',
    element: <PinjamBukuPage />,
    },
    {
      path: "/datadiri",
      element: (
        <ProtectedRoute>
          <DataDiriPage />
        </ProtectedRoute>
      )
    },
    {
    path: "/Alamat",
    element: <AlamatPage />,
  },
  {
    path: '/identitas',
    element: <IdentitasPage />,
    },
    {
      path: "/formkoleksi",
      element: (
        <ProtectedRoute>
          <FormKoleksiPage />
        </ProtectedRoute> 
      )
    }
]);

Modal.setAppElement('#root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormKoleksiContext.Provider>
      <RouterProvider router={router} />
    </FormKoleksiContext.Provider>
  </React.StrictMode>
);
