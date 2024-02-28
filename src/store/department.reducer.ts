import {Department} from "../interfaces/department.interface";
import {createAction, createReducer} from "@reduxjs/toolkit";
import {initalDepartmentList} from "../constants";


interface DepartmentState {
    departmentList: Department[]
    editingDepartment: Department | null

}

const initialState: DepartmentState = {
    departmentList: initalDepartmentList,
    editingDepartment: null
}

export const addDepartment = createAction<Department>('blog/addDepartment')
export const deleteDepartment = createAction<string>('blog/deleteDepartment')
export const startEditingDepartment = createAction<string>('blog/startEditingDepartment')
export const cancelEditingDepartment = createAction('blog/cancelEditingDepartment')
export const finishEditingDepartment = createAction<Department>('blog/finishEditingDepartment')

const departmentReducer = createReducer(initialState, builder => {

})

export default departmentReducer