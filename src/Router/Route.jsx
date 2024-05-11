import { createBrowserRouter } from "react-router-dom";
import Root from './../Layout/Root';
import Home from "../Pages/Home/Home"
import Register from "../Auth/Register";
import LogIn from "../../src/Auth/LogIn"
import Error from '../Pages/Error/Error'
import AllService from '../Pages/Services/AllService';
import AddService from '../Pages/Services/AddService';
import ServiceDetails from "../Components/ServiceDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/service')
      },
      {
        path:'/serviceDetails/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/allService',
        element: <AllService></AllService>,
      },
      {
        path: '/addService',
        element: <AddService></AddService>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
    ]
  },
]);