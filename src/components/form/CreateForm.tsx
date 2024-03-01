import React, { useState } from 'react';
import {
    DatePicker,
    Form,
    Input,

} from 'antd';
import ButtonSave from "../button/ButtonSave";

const { TextArea } = Input;

interface CreateFormProps {
    formFields: { label: string; name: string; type: string }[];
    // initialValues?: any;
    handleSave?: () => void
}
const CreateForm: React.FC<CreateFormProps> = ({formFields, handleSave}) => {
    const [form] = Form.useForm();

    return (
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                // disabled={componentDisabled}
                style={{ maxWidth: 600 }}
            >
                {formFields.map((field, index) => (
                    <Form.Item key={index} label={field.label} name={field.name}>
                        {field.type === 'date' ? (
                            <DatePicker />
                        ) : field.type === 'textarea' ? (
                            <TextArea rows={4} />
                        ) : (
                            <Input />
                        )}
                    </Form.Item>
                ))}
            </Form>
            <ButtonSave onSave={() =>handleSave}/>
        </>
    );
};

export default CreateForm;
