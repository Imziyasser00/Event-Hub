import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Events from "../pages/Events";

const allRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/events',
        element: <Events />
    },
    {
        path: '/event/:id',
        element: <div>event data</div>
    },
])

export default allRoutes