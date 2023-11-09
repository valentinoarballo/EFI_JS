import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import ListUsers from './pages/ListUsers/ListUsers.jsx';
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
    path: "/users",
    element: <ListUsers />,
  },
  {
    path: "/login",
    element: <Login />
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
