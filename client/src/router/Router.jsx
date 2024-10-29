import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/home/Home";
import Error from "../pages/error/Error";
import Appointment from "../pages/appointment/Appointment";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/appointment",
            element: <Appointment></Appointment>
        },
      
        
      ]
    },
  ]);

