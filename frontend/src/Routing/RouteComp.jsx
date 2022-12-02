import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from '../App'
import Answerholder from '../Components/Answerholder'
import Askquestion from '../Components/Askquestion'
import ErrorPage from '../Components/ErrorPage'
import Login from '../Components/Login'
import Questionsholder from '../Components/Questionsholder'
import Signup from '../Components/Signup'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/home",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Questionsholder />,
                errorElement: <ErrorPage />
            },
            {
                path: 'answers',
                element: <Answerholder />
            },
            {
                path: 'ask-question',
                element: <Askquestion />
            }
        ]
    }
])