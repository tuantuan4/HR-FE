import LayoutForm from "../layouts/LayoutForm";
import TableForm from "../components/table";
import PageNotFound from "../components/Notification/PageNotFound";
import DashBoard from "../pages/dashboard/DashBoard";
import ListDepartment from "../pages/department/ListDepartment";
import CreateDepartment from "../pages/department/CreateDepartment";

export const routes = (

    [
        {
            path: "/",
            element: <LayoutForm contentComponent={<DashBoard/>}/>,
            // children: [
            //     {
            //         path: "dashboard",
            //         element: <PageNotFound />,
            //     },
            //     {
            //         path: "about",
            //         element: <PageNotFound />,
            //     },
            // ],
        },
        {
            path: "/departments",
            element: <LayoutForm contentComponent={<CreateDepartment/>}/>
        },
        {
            path: "*",
            element: <LayoutForm contentComponent={<PageNotFound/>}/>
        }
    ]
)