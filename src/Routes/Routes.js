import { createBrowserRouter } from "react-router-dom"
import Home from "../Componenets/Home"
import Login from "../Componenets/Shared/Login"
import Main from "../Layout/Main"

export const router =createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path : '/login',
                element: <Login></Login>
            }
        ]
    }
])