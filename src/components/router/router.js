// import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from '../../App';
import Home from "../pages/home/home";
import Productpage from "../pages/productpage/productpage";
// import Products from "../pages/home/home";
// import About from "../about";
// import Count from "../cont/count";
import ErrorPage from "../pages/home/error-page";

export const Hello= createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element:<Home />},
            {
                path: "/productpage",
                element: <Productpage/>
            },

            // { 
            //     path: "/home", 
            //     element:<Products />},
            // // { 
            //     path: "/about", 
            //     element:<About />},
            // { 
            //     path: "/count", element:<Count />}
        ]
    },
])
