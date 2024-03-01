import { Input, DatePicker } from 'antd';
import CreateForm from "../components/form/CreateForm";

const formFields = [
    { label: 'Name', name: 'name', type: 'text' },
    { label: 'Phone', name: 'phone', type: 'text' },
    { label: 'Address', name: 'addressss12345', type: 'textarea' },
    { label: 'Date', name: 'date', type: 'date' },
];

const CreatePizzaPage = () => {
    return(
        <CreateForm formFields={formFields}/>
    )
}
export default CreatePizzaPage