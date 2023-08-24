import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Components/Login';
import { AuthProvider } from './Components/AuthContext';
import Home from './Components/Home';
import Beers from './Components/Beers';
import PrivateRoute from './PrivateRoute.';
import Banner from './Components/Banner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: "/",
        element: <Banner></Banner>
      },
    ]

  },
  {
    path: "/beers",
    element: <PrivateRoute><Beers></Beers></PrivateRoute>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
