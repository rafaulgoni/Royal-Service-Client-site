import { createBrowserRouter } from "react-router-dom";
import Root from './../Layout/Root';
import Home from "../Pages/Home/Home"
import Register from "../Auth/Register";
import LogIn from "../../src/Auth/LogIn"
import Error from '../Pages/Error/Error'

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/register",
          element: <Register></Register>,
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
      ]
    },
  ]);