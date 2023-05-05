import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Leyout from './components/Leyout/Leyout';
import Login from './components/User/Login';
import App from './App';
import Recipies from './components/Recipies/Recipies';
import Blog from './components/Blog/Blog';
import Chefs from './components/Chef/Chefs';
import Register from './components/User/Register';
import ChefRecipe from './components/ChefRecipe/ChefRecipe';
import ErrorPage from './components/Error/ErrorPage'
import AuthProvider from './Providers/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import About from './components/About/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Leyout></Leyout>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/recipe",
        element: <Recipies></Recipies>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () => fetch ("https://server-imtiazimran.vercel.app/blog")
      },
      {
        path: "/chef",
        element: <Chefs></Chefs>
      },
      {
        path: "/chef/:chefId",
        element: <PrivetRoute><ChefRecipe></ChefRecipe></PrivetRoute>,
        loader: ({ params }) => fetch(`https://server-imtiazimran.vercel.app/chef/${params.chefId}`)
      },
      {
        path: "/about",
        element: <About></About>
      }

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
