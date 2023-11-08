import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Protected from './pages/Protected';
import ListProducts from './pages/ListProducts';
import Product from './pages/Product';
import Error404 from './pages/Error404';
import Login from './pages/Login.jsx';
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
    path: "/protected",
    element: <Protected />,
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
