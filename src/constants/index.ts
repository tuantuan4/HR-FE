import {Department} from "../interfaces/department.interface";
import {List} from "antd";
import displayName = List.displayName;

export const BASE_URL_REQUEST = "localhost"

export const initalDepartmentList: Department[] = [
    {
        id: '1',
        name: 'DEV1',
        displayName: 'Phat trien phan mem 1'
    },
    {
        id: '2',
        name: 'DEV2',
        displayName: 'Phat trien phan mem 2'
    },
    {
        id: '3',
        name: 'DEV3',
        displayName: 'Phat trien phan mem 3'
    },

]