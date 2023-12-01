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
import GotMarried from "../Pages/DashBoard/GotMarried/GotMarried";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import SuccessStory from "../Pages/DashBoard/SuccessStory/SuccessStory";
import AboutUs from "../Pages/AboutUs/AboutUs";
import EditBioData from "../Pages/EditBioData/EditBioData";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ApprovedContact from "../Pages/ApprovedContact/ApprovedContact";

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
            element:<Biodatas></Biodatas>,
            loader:()=>fetch('http://localhost:5000/totalDataCount')
        },
        {
            path: 'about',
            element:<AboutUs></AboutUs>
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
        {
            path: 'contact',
            element:<ContactUs></ContactUs>
        },
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'editBioData',
          element:<CreateBioData></CreateBioData>

        },
        {
          path:'viewBioData',
          element:<ViewBioData></ViewBioData>,

        },
        {
          path:'update/:id',
          element:<EditBioData></EditBioData>,
          loader:({params})=>fetch(`http://localhost:5000/data/${params.id}`)

        },
        {
          path:'favourites',
          element:<FavouritesBioData></FavouritesBioData>

        },
        {
          path:'contact',
          element:<ContactRequest></ContactRequest>

        },
        {
          path:'married',
          element:<GotMarried></GotMarried>

        },
        // admin routes
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'premium',
          element:<AdminRoute><PremiumData></PremiumData></AdminRoute>
        },
        {
          path:'admin',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>,
          
        },
        {
          path:'story',
          element:<AdminRoute><SuccessStory></SuccessStory></AdminRoute>,
          loader:()=>fetch("http://localhost:5000/success")
        },
        {
          path:'approvedContact',
          element:<AdminRoute><ApprovedContact></ApprovedContact></AdminRoute>
        }
      ]
    }
  ]);