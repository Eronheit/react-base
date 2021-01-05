import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import { Container } from './styles';

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [collapsedMenu, setCollapsedMenu] = useState(true);

  const handleToggleMenu = () => {
    setCollapsedMenu(!collapsedMenu);
  };

  return (
    <Container>
      <Sider trigger={null} collapsible collapsed={collapsedMenu}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {collapsedMenu ? (
            <MenuUnfoldOutlined className="trigger" onClick={handleToggleMenu} />
          ) : (
            <MenuFoldOutlined className="trigger" onClick={handleToggleMenu} />
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Container>
  );
};

export default Home;
