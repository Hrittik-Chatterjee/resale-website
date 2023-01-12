import { createBrowserRouter } from "react-router-dom"
import Blog from "../Componenets/Blog"
import Error from "../Componenets/Error"
import Home from "../Componenets/Home"
import Login from "../Componenets/Login"
import SignUp from "../Componenets/SignUp"
import SpecificWatchList from "../Componenets/SpecificWatchList/SpecificWatchList"
import Main from "../Layout/Main"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error> ,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/watchComName/:id',
                element: <SpecificWatchList></SpecificWatchList>,
                loader: ({ params }) => fetch(`http://localhost:5000/watchComName/${params.id}`)
            },
        ]
    }
])