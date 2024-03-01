import CreateForm from "../../components/form/CreateForm";
import {useDispatch} from "react-redux";
import {useState} from "react";
import {Department} from "../../interfaces/department.interface";
import {addDepartment} from "../../store/department.reducer";

const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Description', name: 'description', type: 'text' },
];
const initialState: Department = {
    description: '',
    name: '',
    id: ''

}
export default function CreateDepartment() {
    const [formData, setFormData] = useState<Department>(initialState)
    const dispatch =useDispatch()

    const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
        // Thực hiện logic save ở đây
        event.preventDefault()
        const formDataWithId = { ...formData, id: new Date().toISOString() }
        dispatch(addDepartment(formDataWithId))
        setFormData(initialState)
        console.log(formData)
    }
    return (
        <CreateForm formFields={formFields} handleSave={() => handleSave}/>
    )
}
