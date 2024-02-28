import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, DashOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TableForm from "../components/table";

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1'].map((key) => ({
    key,
    label: `SSI ${key}`,
}));
const dashboardNames = ['Dashboard', 'Attendance', 'CV', 'Review'];
const optionNames = [
    ['Option 1', 'Option 2'],
    ['Option A', 'Option B'],
    ['Option I', 'Option II', 'Option III', 'Option IV', 'ssss', 'ssccx'],
    ['Option !', 'Option @', 'Option #', 'Option $']
];
const items2: MenuProps['items'] = [DashOutlined, UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        if (index === 0) {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: dashboardNames[index],
            };
        } else {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: dashboardNames[index],
                children: new Array(4).fill(null).map((_, j) => {
                    const subKey = index * 4 + j + 1;
                    return {
                        key: subKey,
                        label: optionNames[index][j],
                    };
                }),
            };
        }
    },
);
interface LayoutFormProps {
    contentComponent: React.ReactNode; // Define prop to receive component
}
const LayoutForm: React.FC<LayoutFormProps> = ({contentComponent }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={items1}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                        {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {contentComponent}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default LayoutForm;