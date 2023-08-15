import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { useNavigate } from 'react-router-dom'

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
    key: "sub1",
    icon: <UserOutlined />,
    children: [
      {
        label: "main1",
        key: "1",
        icon: <PieChartOutlined />,
      },
      {
        label: "main2",
        key: "2",
        icon: <PieChartOutlined />,
      },
      {
        label: "main3",
        key: "3",
        icon: <PieChartOutlined />,
      },
    ]
  },
  {
    label: "Team",
    key: "/sub2",
    icon: <TeamOutlined />,
    children: [
      {
        label: "team1",
        key: "11",
        icon: <PieChartOutlined />,
      },
      {
        label: "team2",
        key: "22",
        icon: <PieChartOutlined />,
      },
      {
        label: "team3",
        key: "33",
        icon: <PieChartOutlined />,
      },
    ]
  },
  {
    label: "File",
    key: "333",
    icon: <DesktopOutlined />,
  },
]

const Component: React.FC = () => {
  const navigateTo = useNavigate()
  const [openKeys, setOpenKeys] = useState(['']);

  const menuClick = (e:any) => {
    // console.log(e.key)
    navigateTo(e.key)
  }
  const handleOpenChange = (keys:string[]) => {
    console.log(keys)
    // 设置openkeys为最后一个点击的栏目，即keys数组的最后一项
    setOpenKeys(keys.slice(-1))
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/about']}
      mode="inline" items={items}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
      onClick={menuClick} />
  )
}

export default Component;
