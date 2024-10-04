import Cart from "../Cart";
import { createBrowserRouter } from "react-router-dom";
import Sample from "../Sample";
export const router=createBrowserRouter([
    {
        path:'/',
        element:<Cart/>
    }
])