import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/events',
        element: <div>events</div>
    },
    {
        path: '/event/:id',
        element: <div>event data</div>
    },
])

export default router