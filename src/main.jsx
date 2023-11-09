import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ListProducts from './pages/ListUsers/ListProducts.jsx';
import Product from './pages/ListUsers/Product.jsx';
import Error404 from './pages/Error404/Error404.jsx';
import Login from './pages/Login/Login.jsx';
import { LoginContextProvider } from './context/LoginContext.jsx';
import { DarkModeProvider } from './context/DarkModeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/products",
    element: <ListProducts />,
  },
  {
    path: "/login",
    element: <Login />
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
  <DarkModeProvider>
    <LoginContextProvider>
      <RouterProvider router={router} />
    </LoginContextProvider>
  </ DarkModeProvider>

)
