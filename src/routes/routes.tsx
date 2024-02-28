import {Outlet, Route, Routes} from "react-router-dom";
import LayoutForm from "../layouts/LayoutForm";
import TableForm from "../components/table";
import CreateForm from "../components/form/CreateForm";
import CreatePizzaPage from "../pages/CreatePizzaPage";

export const routes = (

    [
        {
            path: "/",
            element: <LayoutForm contentComponent={<TableForm/>}></LayoutForm>
        },
        {
            path: "/test1",
            element: <LayoutForm contentComponent={<CreatePizzaPage/>}></LayoutForm>
        }
    ]
)