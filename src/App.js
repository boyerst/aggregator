import 'antd/dist/reset.css';
import './App.css';
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes
} from "react-router-dom";
import {
  ReadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Home from "./pages/Home";

const { Header, Sider, Content } = Layout;

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}


function Root() {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();




  return (
    <Routes>
      <Route path='/'element={
        <Layout style={{height: '100vh'}}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical" />
            <Menu
              style={{
                marginTop: "100px"
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <ReadOutlined />,
                  label: 'Part One',
                },
                {
                  key: '2',
                  icon: <ReadOutlined />,
                  label: 'Part Two',
                },
                {
                  key: '3',
                  icon: <ReadOutlined />,
                  label: 'Part Three',
                },
              ]}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
              }}
            >
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
              Title
            </Header>
        {/*        <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              Content
            </Content>*/}
          </Layout>
        </Layout>   
      }/>


    </Routes>
  );
};






