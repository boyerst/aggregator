import "antd/dist/reset.css"
import "./App.css"
import {
  createBrowserRouter,
  Link,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
  Routes
} from "react-router-dom"
import {
  ReadOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons"
import { Button, Layout, Menu, theme } from "antd"
import { React, useState } from "react"
import Parts from "./pages/Parts"
import { seriesParts } from "./config/data"

const { Header, Sider, Content } = Layout

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />
}







function Root() {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  console.log("seriesParts :", seriesParts)


  const [selectKey, setSelectKey] = useState("Part One")


  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/*<div className="demo-logo-vertical" />*/}
        <div style={{ marginTop: "100px" }}>
    
          <Menu
           theme="dark"
           mode="inline"
          >
        
            <Menu.SubMenu title="Not Since 1917">
            
              {Object.entries(seriesParts).map(([slug, { title }]) => (
                <Menu.Item
                  key={slug}
                  // theme="dark"
                  // mode="inline"
                  // style={{ color: "white" }}
                  selectedKeys={[selectKey]}
                  onClick={({ key }) => {
                    navigate(`/${slug}`)
                    setSelectKey(key)
                  }}
                  items={[
                    {
                      key: title,
                      icon: <ReadOutlined />,
                      label: title,
                    }
                  ]}
                />
              ))}
            </Menu.SubMenu>
          </Menu>
    
        </div>



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
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          Title
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
          <Routes>
            <Route path=":slug" element={<Parts />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}



