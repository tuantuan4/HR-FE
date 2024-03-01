import React from 'react';
import { Space, Table, Tag, Button } from 'antd';
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

interface RowData {
    key: React.Key;
    [key: string]: any;
}
interface DepartmentProps<T extends RowData> {
    data?: T[];
    columns: { title: string, dataIndex: string, key: string }[];
    handleDelete: () => void;
}
const TableForm: React.FC<DepartmentProps<any>> = ({data, columns, handleDelete}) => (
    <div>
        <Button type="primary" style={{ marginBottom: 16 }}>
            Add a row
        </Button>
        <Table
            dataSource={data}
            pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}
        >
            {
                columns.map(column => (
                    <Column
                        title={column.title}
                        dataIndex={column.dataIndex}
                        key={column.key}
                    />
                ))
            }
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
    </div>
);

export default TableForm;