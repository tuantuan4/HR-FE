import React, {useState} from 'react';
import {Button, Flex, Modal} from 'antd';
interface ButtonSaveProps {
        onSave?: () => void; // Hàm xử lý khi nút Save được click
}
const ButtonSave: React.FC<ButtonSaveProps> = ({ onSave }) => {
        const [modalVisible, setModalVisible] = useState<boolean>(false);
        const handleSave = () => {
                if (onSave) {
                        onSave();
                }
                setModalVisible(true);
        };
        const handleOk = () => {
                setModalVisible(false);
        };
        return (
            <>
                    <Flex gap="small" wrap="wrap">
                            <Button type="primary" onClick={handleSave}>Save</Button>
                            <Modal
                                title="Success"
                                visible={modalVisible}
                                onOk={handleOk}
                                onCancel={handleOk}
                            >
                                    <p>Data saved successfully!</p>
                            </Modal>
                    </Flex>
            </>
        )

};

export default ButtonSave;