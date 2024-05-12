import { createBrowserRouter } from "react-router-dom";
import Root from './../Layout/Root';
import Home from "../Pages/Home/Home"
import Register from "../Auth/Register";
import LogIn from "../../src/Auth/LogIn"
import Error from '../Pages/Error/Error'
import AllService from '../Pages/Services/AllService';
import AddService from '../Pages/Services/AddService';
import ServiceDetails from "../Components/ServiceDetails";
import PrivateRoute from '../Router/PrivateRoute';
import Details from "../Components/Details";
import ManageService from "../Pages/Services/ManageService";
import Update from "../Components/Update";
import SingleService from "../Pages/Services/SingleService";
import BookService from "../Pages/Services/BookService";
import ServiceToDo from "../Pages/Services/ServiceToDo";


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
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
      },
      {
        path: '/allService',
        element: <AllService></AllService>,
      },
      {
        path: '/manageService',
        element: <PrivateRoute><ManageService/></PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update/></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/card/${params.id}`)
      },
      {
        path:'/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/card/${params.id}`)
      },
      {
        path: '/addService',
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: '/singleService',
        element: <PrivateRoute><SingleService/></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/card')
      },
      {
        path:'/bookService',
        element: <PrivateRoute><BookService/></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cards?status=confirm')
      },
      {
        path:'/service',
        element: <PrivateRoute><ServiceToDo/></PrivateRoute>
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