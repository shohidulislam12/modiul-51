import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import AuthProvider from './Providers/AuthProvider';
import Order from './Component/Order';
import PrivetRoute from './Route/PrivetRoute';
import Profile from './Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'orders',
        element:<PrivetRoute> <Order></Order></PrivetRoute>
      },
      {
        path:'profile',
        element:<PrivetRoute><Profile  ></Profile></PrivetRoute>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </StrictMode>,
)
