import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import Shop from "../../Pages/Shop/Shop";

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
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);

export default router;