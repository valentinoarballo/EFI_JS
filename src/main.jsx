import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import  Home  from './pages/Home.jsx'
import  Contact  from './pages/Contact.jsx'
import Protected from './pages/Protected';
import ListProducts from './pages/ListProducts';
import Product from './pages/Product';
import Error404 from './pages/Error404';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/protected",
    element: <Protected />,
  },
  {
    path: "/products",
    element: <ListProducts />,
  },

  {
    path: "/products/:productId",
    element: <Product />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
