import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast';


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Route';
import AuthProvider from './Providers/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
       <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)
