import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/home/Home";
import Error from "../pages/error/Error";
import Appointment from "../pages/appointment/Appointment";
import GetAvailableDoctor from "../pages/getAvailableDoctor/GetAvailableDoctor";
import Details from "../pages/details/Details";
import Dashboard from "../dashboard/Dashboard";
import UserProfile from "../pages/usserProfile/UserProfile";
import DoctorProfile from "../pages/doctorProfile/DoctorProfile";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactPage from "../pages/contactPage/ContactPage";


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
        {
            path: "/getAvailableDoctor",
            element: <GetAvailableDoctor></GetAvailableDoctor>
        },
        {
            path: "/details",
            element: <Details></Details>
        },
        {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
        },
        {
            path: "/contactUs",
            element: <ContactPage></ContactPage>
        },
        {
            path: "/doctorProfile",
            element: <DoctorProfile></DoctorProfile>
        },
        {
            path: "/userProfile",
            element: <UserProfile></UserProfile>
        },
      
        
      ]
    },

    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      // children: [

      //   {
      //     index: true,
      //     element: <MainDash></MainDash>
      //   },

      // ], 
    }
  ]);

