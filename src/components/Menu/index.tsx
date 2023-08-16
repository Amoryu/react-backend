import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: "About",
    key: "/about",
    icon: <PieChartOutlined />,
  },
  {
    label: "User",
    key: "/user",
    icon: <DesktopOutlined />,
  },
  {
    label: "Main",
    key: "sub",
    icon: <UserOutlined />,
    children: [
      {
        label: "main1",
        key: "/sub/compo1",
        icon: <PieChartOutlined />,
      },
      {
        label: "main2",
        key: "/sub/compo2",
        icon: <PieChartOutlined />,
      },
    ]
  },
]

const Component: React.FC = () => {
  const navigateTo = useNavigate()
  const currentRoute = useLocation()
  const path = currentRoute.pathname
  let firstOpenKey = path.split('/')[1]
  const [openKeys, setOpenKeys] = useState([firstOpenKey]);

  console.log(currentRoute)
  const menuClick = (e:any) => {
    // console.log(e.key)
    navigateTo(e.key)
  }
  const handleOpenChange = (keys:string[]) => {
    // console.log(keys)
    // 设置openkeys为最后一个点击的栏目，即keys数组的最后一项
    setOpenKeys(keys.slice(-1))
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[path]}
      mode="inline" items={items}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      onClick={menuClick} />
  )
}

export default Component;
