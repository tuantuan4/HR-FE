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

export const addDepartment = createAction<Department>('attendance/addDepartment')
export const deleteDepartment = createAction<string>('attendance/deleteDepartment')
export const startEditingDepartment = createAction<string>('attendance/startEditingDepartment')
export const cancelEditingDepartment = createAction('attendance/cancelEditingDepartment')
export const finishEditingDepartment = createAction<Department>('attendance/finishEditingDepartment')

const departmentReducer = createReducer(initialState, builder => {
    builder.addCase(addDepartment, (state, action) => {
        const department =action.payload
        state.departmentList.push(department)
    })
})

export default departmentReducer