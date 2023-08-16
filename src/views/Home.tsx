import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Layout,theme,Avatar } from 'antd';

import Menu from '@/components/Menu'
import BreadCrumb from '@/components/BreadCrumb'
const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 左侧侧边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        {collapsed
          ? <div style={{textAlign:'center', lineHeight: '64px'}}>
              <Avatar className="demo-logo-vertical-collapse" size={40} src='https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'/>
            </div>
          : <div className="demo-logo-vertical" >React后台</div>
        }
        <Menu />
      </Sider>
      {/* 右侧窗口布局 */}
      <Layout>
        <Header style={{ paddingLeft: '16px', background: colorBgContainer, margin: '0 0 16px 0' }} >
          <BreadCrumb/>
        </Header>
        <Content style={{ margin: '0 16px', height: '100vh' }}>
          {/* 路由出口 */}
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center',padding: 0, lineHeight: '48px' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout> 
  );
};

export default Home;