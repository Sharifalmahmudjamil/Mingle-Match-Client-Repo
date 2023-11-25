import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard/DashBoard";

import CreateBioData from "../Pages/DashBoard/CreateBioData/CreateBioData";

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

        }
      ]
    }
  ]);