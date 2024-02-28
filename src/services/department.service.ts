import apiClient from "./index";
import {Department} from "../interfaces/department.interface";

const findAll = async () => {
    const response = await apiClient.get<Department[]>("/departments")
    return response.data
}

const findById = async (id: any) => {
    const response = await apiClient.get<Department>(`/departments/${id}`);
    return response.data;
}

const findByTitle = async (title: string) => {
    const response = await apiClient.get<Department[]>(`/departments?title=${title}`);
    return response.data;
}

const create = async ({ name, displayName }: Department) => {
    const response = await apiClient.post<any>("/departments", { name, displayName });
    return response.data;
}

const update = async (id: any, { name, displayName }: Department) => {
    const response = await apiClient.put<any>(`/departments/${id}`, {  name, displayName  });
    return response.data;
}

const deleteById = async (id: any) => {
    const response = await apiClient.delete<any>(`/departments/${id}`);
    return response.data;
}

const deleteAll = async () => {
    const response = await apiClient.delete<any>("/departments");
    return response.data;
}

const DepartmentDataService = {
    findAll,
    findById,
    findByTitle,
    create,
    update,
    deleteById,
    deleteAll
}
export default DepartmentDataService
