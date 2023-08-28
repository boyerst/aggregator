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



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


// const items = [
//   {label: 'Navigation 1', key: 'item-1'}, [
//     (Object.entries(seriesParts).map(([slug, { title }]) => (
//       {label: title, key: slug}
//     ))),
//   ]
// ]

// const items = [
//   getItem('Navigation 1', 'sub1', <ReadOutlined />), [
//     getItem((Object.entries(seriesParts).map(([slug, { title }]) => (
//       'title', 'slug'
//     )))),
//   ]
// ]


// const items = [
//   getItem('Navigation 1', 'sub1', <ReadOutlined />, [
//     (Object.entries(seriesParts).map(([slug, { title }]) => (
//       getItem(title, slug, <ReadOutlined />)
      
//     )))
//   ])
// ]

// const items = [
//   getItem('Navigation 1', 'sub1', <ReadOutlined />, [
//     (Object.entries(seriesParts).map(([slug, { title }]) => (
//       getItem(title, slug, <ReadOutlined />)
//     )))
//   ])
// ]

// An array of object that contains 3 arrays?
const items = [
  getItem('Navigation 1', 'sub1', <ReadOutlined />, 
    (Object.entries(seriesParts).map(([slug, { title }]) => ([
      getItem(title, slug, <ReadOutlined />),
      // getItem(label, key, icon)
    ])
    )))
]


// const slug = Object.entries(seriesParts).map(([slug, {title}]) => {
//     console.log("title: ", title) 
//     console.log("slug: ", slug)

//   })


// const items = [
//   getItem('Navigation 1', 'sub1', <ReadOutlined />, [
//       getItem('Option 1', '1'),
//       getItem('Option 2', '2')
//   ])
// ]



// function series() {
//   Object.entries(seriesParts).map(([slug, {title}]) => {
//     console.log("title: ", title) 
//     console.log("slug: ", slug)

//   })
// }

// series()




function Root() {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate()

  console.log("seriesParts :", seriesParts)


  const [selectKey, setSelectKey] = useState("Part One")

  // const slug = Object.entries(seriesParts).map(([slug]) => {
  //     console.log("slug: ", slug)
  //   })

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {/*<div className="demo-logo-vertical" />*/}
        <div style={{ marginTop: "100px" }}>
   
         {/*{Object.entries(seriesParts).map(([slug, { title }]) => (*/}
          <Menu
           theme="dark"
           mode="inline"
          
         
            // key={getItem()}
            theme="dark"
            mode="inline"
            // inlineCollapsed={collapsed}
            selectedKeys={[selectKey]}
            onClick={({ slug }) => {
      
              // console.log("Clicked", key)
              console.log("Items: ", items)
              console.log("Items[0]: ", items[0])
              navigate(`/${slug}`)
              setSelectKey(key)

            }}
            items={items}
    
            />
          {/*))}*/}
      

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



