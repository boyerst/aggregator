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

const { Header, Sider, Content } = Layout;

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}






function SeriesList() {
  return (
    <ul>
      {Object.entries(seriesParts).map(([slug, { title, rumble }]) => (
        <li key={slug}>
          <Link>
            <h3>SeriesList</h3>
            <h3>{title}</h3>
            <h3>{rumble}</h3>
          </Link>
          
        </li>                                                             
      ))}
    </ul>
  )
}


function Root() {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  console.log("seriesParts :", seriesParts)
  // console.log(seriesParts[0])
  console.log(location.pathname)



  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/*<div className="demo-logo-vertical" />*/}

{/*Hardcoded menu - selected working*/}
         <Menu
          style={{
            marginTop: "100px"
          }}
          theme="dark"

          mode="inline"
          defaultSelectedKeys={["parts"]}

          onClick={({ key }) => {
            navigate(`/${key}`)
          }}
          items={[
            {
              key: "parts",
              icon: <ReadOutlined />,
              label: "Part One",
            },
            {
              key: "part2",
              icon: <ReadOutlined />,
              label: "Part Two",
            },
            {
              key: "part3",
              icon: <ReadOutlined />,
              label: "Part Three",
            },
          ]}
        />



{/*Custom Menu*/}

    
       

{/*Menu with loop - selected not working*/}
        {Object.entries(seriesParts).map(([slug, { title }]) => (
          <Menu
            key={slug}
            // selectedKeys={[location.pathname]}
            theme="dark"
            mode="inline"
            // selectable
            // defaultSelectedKeys={["/"]}
            // defaultSelectedKeys={[location.pathname]}
            selectedKeys={[location.pathname]}
            onClick={({ key }) => {
              navigate(`/${slug}`)
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
          Content
          <Outlet />
          <Routes>
            <Route path="/parts" >
            
              <Route index element={<SeriesList />} />
            </Route>
            <Route path="/parts" element={<Parts />} />

          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}



