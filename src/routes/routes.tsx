import {Outlet, Route, Routes} from "react-router-dom";
import LayoutForm from "../layouts/LayoutForm";
import TableForm from "../components/table";
import PageNotFound from "../components/Notification/PageNotFound";
import DashBoard from "../pages/dashboard/DashBoard";

export const routes = (

    [
        {
            path: "/",
            element: <LayoutForm contentComponent={<DashBoard/>}/>,
            children: [
                {
                    path: "dashboard",
                    element: <PageNotFound />,
                },
                {
                    path: "about",
                    element: <PageNotFound />,
                },
            ],
        },
        {
            path: "/departments",
            element: <LayoutForm contentComponent={<TableForm/>}/>
        },
        {
            path: "*",
            element: <LayoutForm contentComponent={<PageNotFound/>}/>
        }
    ]
)