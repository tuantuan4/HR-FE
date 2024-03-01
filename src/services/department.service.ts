import apiClient from "./index";
import {Department} from "../interfaces/department.interface";

const findAll = async () => {
    const response = await apiClient.get<Department[]>("/products")
    return response.data
}

const findById = async (id: any) => {
    const response = await apiClient.get<Department>(`/departments/${id}`);
    return response.data;
}

const create = async ({ name, description }: Department) => {
    const response = await apiClient.post<any>("/products/create", { name, description });
    return response.data;
}

const update = async (id: any, { name, description }: Department) => {
    const response = await apiClient.put<any>(`/departments/${id}`, {  name, description  });
    return response.data;
}

const deleteById = async (id: any) => {
    const response = await apiClient.delete<any>(`/departments/${id}`);
    return response.data;
}


const DepartmentDataService = {
    findAll,
    findById,
    create,
    update,
    deleteById,
}
export default DepartmentDataService
