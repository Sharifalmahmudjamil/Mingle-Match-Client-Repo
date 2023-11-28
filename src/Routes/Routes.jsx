import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard/DashBoard";

import CreateBioData from "../Pages/DashBoard/CreateBioData/CreateBioData";
import ViewBioData from "../Pages/DashBoard/ViewBioData/ViewBioData";
import AllUsers from "../Layout/DashBoard/Allusers/Allusers";
import AdminRoute from "./PrivateRoute/AdminRoute";
import Biodatas from "../Pages/BioDatas/Biodatas";
import BioDetails from "../Pages/BioDetails/BioDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import FavouritesBioData from "../Pages/FavouritesBioData/FavouritesBioData";
import PremiumData from "../Pages/DashBoard/PremiumData/PremiumData";
import CheckOut from "../Pages/CheackOut/CheckOut";
import ContactRequest from "../Pages/DashBoard/ContactRequest/ContactRequest";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: 'bioDatas',
            element:<Biodatas></Biodatas>
        },
        {
            path: 'bioDetails/:id',
            element:<PrivateRoute><BioDetails></BioDetails></PrivateRoute>,
           loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
        },
        {
            path: 'checkOut/:id',
            element:<CheckOut></CheckOut>,
            loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)
          
        },
       
        {
            path: 'login',
            element:<Login></Login>
        },
        {
            path: 'signUp',
            element:<SignUp></SignUp>
        },
      ]
    },
    {
      path:'dashboard',
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'editBioData',
          element:<CreateBioData></CreateBioData>

        },
        {
          path:'viewBioData',
          element:<ViewBioData></ViewBioData>

        },
        {
          path:'favourites',
          element:<FavouritesBioData></FavouritesBioData>

        },
        {
          path:'contact',
          element:<ContactRequest></ContactRequest>

        },
        // admin routes
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'premium',
          element:<AdminRoute><PremiumData></PremiumData></AdminRoute>
        }
      ]
    }
  ]);