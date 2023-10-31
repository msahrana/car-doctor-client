import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRouter from './router/MainRouter.jsx';
import ErrorPage from './error/ErrorPage.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './provider/AuthProvider';
import CheckOut from './pages/CheckOut/CheckOut';
import Booking from './pages/Booking/Booking';
import PrivateRoute from './components/Private/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRouter></MainRouter>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivateRoute><Booking></Booking></PrivateRoute>
      },
      // {
      //   path: '/booking/:email',
      //   element: <PrivateRoute><Booking></Booking></PrivateRoute>,
      //   loader: ({params}) => fetch(`http://localhost:5000/booking?email=${params.email}`)
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
