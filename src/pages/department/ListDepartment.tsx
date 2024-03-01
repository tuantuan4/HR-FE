import TableForm from "../../components/table";
import DepartmentDataService from "../../services/department.service";
import {useEffect, useState} from "react";
import {Department} from "../../interfaces/department.interface";

export default function ListDepartment() {

    const [departments, setDepartments] = useState<Department[]>([]);
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Description', dataIndex: 'description', key: 'description' },
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const departments = await DepartmentDataService.findAll()
                setDepartments(departments);
            } catch (error) {
                console.log('Error')
            }
        }
        fetchData();
    }, [])
    const handleDelete = () => {
        // Xử lý logic xóa ở đây
        console.log('Item deleted');
    };
    return (
        <TableForm data={departments} columns={columns} handleDelete={()=> handleDelete}/>
    )
}
