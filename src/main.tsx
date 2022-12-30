import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorElement from './components/ErrorElement'
import Contact from './components/Contact'
import './index.scss'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorElement/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={router}/>)