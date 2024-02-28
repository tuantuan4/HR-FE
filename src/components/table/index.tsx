import React from 'react';
import { Space, Table, Tag } from 'antd';
import ButtonSave from "../button/ButtonSave";
import ButtonDelete from "../button/ButtonDelete";

const { Column, ColumnGroup } = Table;

interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
const handleDelete = () => {
    // Xử lý logic xóa ở đây
    console.log('Item deleted');
};
const TableForm: React.FC = () => (
    <Table dataSource={data}>
        <ButtonSave/>
        <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
                <>
                    {tags.map((tag) => (
                        <Tag color="blue" key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </>
            )}
        />
        <Column
            title="Action"
            key="action"
            render={(_: any, record: DataType) => (
                <Space size="middle">
                    <a>Edit</a>
                    <ButtonDelete onDelete={handleDelete} />
                </Space>
            )}
        />
    </Table>
);

export default TableForm;