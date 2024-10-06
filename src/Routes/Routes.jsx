import Cart from "../Components/ui/Cart";
import { createBrowserRouter } from "react-router-dom";
import Sample from "../Components/ui/Sample";
import HomePage from "../Components/Pages/HomePage";
import Products from "../Components/ui/Products";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>
    },
    {
        path:'/products',
        element:<Products/>
    }
    ,
    {
        path:'/carts',
        element:<Cart/>
    }
])