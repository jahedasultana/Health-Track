import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/home/Home";
import Error from "../pages/error/Error";
import Appointment from "../pages/appointment/Appointment";
import GetAvailableDoctor from "../pages/getAvailableDoctor/GetAvailableDoctor";
import Details from "../pages/details/Details";
import AboutUs from "../pages/aboutUs/AboutUs";
import ContactPage from "../pages/contactPage/ContactPage";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import DashboardLayout from "../layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import Users from "../pages/Users/Users";
import Doctors from "../pages/Doctors/Doctors";
import Dashboard from "../pages/Dashboard/Dashboard";
import DoctorRoute from "./DoctorRoute";
import UserRoute from "./UserRoute";
import UserProfile from '../pages/userProfile/UserProfile'
import DoctorService from "../pages/doctorService/DoctorService";
import DoctorProfile from "../pages/Dashboard/DoctorProfile";


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
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: 'sign-in',
        element: <SignIn/>
      },
      {
          path: "/getAvailableDoctor",
          element: <GetAvailableDoctor></GetAvailableDoctor>
      },
      {
          path: "/getAvailableDoctor/:id",
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
    ]
  },

  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [

      {
        index: true,
        element: <Dashboard/>
      },
      // admin routes
      {
        path: 'all-users',
        element: <AdminRoute><Users/></AdminRoute>
      },
      {
        path: 'all-doctors',
        element: <AdminRoute><Doctors/></AdminRoute>
      },
      // doctor route
      {
        path: 'doctor-service',
        element: <DoctorRoute> <DoctorService/> </DoctorRoute>
      },
      {
        path: 'doctor-profile',
        element: <DoctorRoute> <DoctorProfile/> </DoctorRoute>
      },
      // user route
      {
        path: 'user-profile',
        element: <UserRoute> <UserProfile/> </UserRoute>
      }
      
    ], 
  }

]);

