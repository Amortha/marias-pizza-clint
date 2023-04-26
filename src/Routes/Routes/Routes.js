import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Blogings from "../../Pages/Bloging/Blogings";
import AboutUs from "../../Pages/AboutUs/AboutUs"
import ContectUs from "../../Pages/ContectUs/ContectUs";
import Shops from "../../Pages/Shop/Shops";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shops',
                element: <Shops></Shops>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contactus',
                element: <ContectUs></ContectUs>
            },
            {
                path: '/blogings',
                element:<Blogings></Blogings>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);

export default router;