import React, {useState} from "react";
import {Button, Modal} from "antd";

interface DeleteProps {
    onDelete: () => void;
}

const ButtonDelete: React.FC<DeleteProps> = ({ onDelete }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const handleDelete = () => {
        onDelete();
        setModalVisible(false);
    };
    return (
        <>
            <Button type="primary" onClick={() => setModalVisible(true)}>
                Delete
            </Button>
            <Modal
                title="Confirm Delete"
                visible={modalVisible}
                onOk={handleDelete}
                onCancel={() => setModalVisible(false)}
            >
                <p>Are you sure you want to delete this item?</p>
            </Modal>
        </>
    );
};
export default ButtonDelete;