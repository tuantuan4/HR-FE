import React from 'react';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {routes} from "./routes/routes";
;
const App: React.FC = () => {
    const router = createBrowserRouter(routes);
    return (
        <div>
            <RouterProvider router={router} />

        </div>
    );
};

export default App;