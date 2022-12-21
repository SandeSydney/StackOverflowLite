import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import App from '../App'
import Answerholder from '../Components/Answerholder'
import Askquestion from '../Components/Askquestion'
import ErrorPage from '../Components/ErrorPage'
import Login from '../Components/Login'
import MostAnswered from '../Components/MostAnswered'
import MostUpvoted from '../Components/MostUpvoted'
import MyQuestions from '../Components/MyQuestions'
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
                path: 'question/:question_id/answers',
                element: <Answerholder />
            },
            {
                path: 'ask-question',
                element: <Askquestion />
            },
            {
                path: 'most-answered',
                element: <MostAnswered />
            },
            {
                path: 'most-upvoted',
                element: <MostUpvoted />
            },
            {
                path: 'my-questions',
                element: <MyQuestions />
            }
        ]
    }
])