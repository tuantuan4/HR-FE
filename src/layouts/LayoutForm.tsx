import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, DashOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {NavLink, Outlet} from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1: MenuProps['items'] = ['1'].map((key) => ({
    key,
    label: <NavLink to='/departments'>SSI</NavLink>,
}));
const dashboardNames = ['Dashboard', 'Attendance', 'CV', 'Review'];
const optionNames = [
    ['Departments', 'Employees', 'Attendances'],
    ['Option A', 'Option B', 'Option C', 'Option D'],
    ['Option I', 'Option II'],
];

const items2: MenuProps['items'] = [DashOutlined, UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);
        if (index === 0) {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: <NavLink to='/'>{dashboardNames[index]}</NavLink>,
            };
        } else {
            return {
                key: `sub${key}`,
                icon: React.createElement(icon),
                label: dashboardNames[index],
                children: optionNames[index - 1].map((element) => {
                    return {
                        // key: subKey,
                        label: <NavLink to={'/'.concat(element.toLowerCase())}>{element}</NavLink>,

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
            <Outlet/>
        </Layout>
    );
};

export default LayoutForm;