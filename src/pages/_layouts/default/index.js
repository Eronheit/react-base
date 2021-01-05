import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import AuthActions from '~/store/ducks/auth';
import { Container } from './styles';

const { Header, Content, Sider } = Layout;

const Default = ({ children }) => {
  const dispatch = useDispatch();
  const [collapsedMenu, setCollapsedMenu] = useState(true);

  const handleToggleMenu = () => {
    setCollapsedMenu(!collapsedMenu);
  };

  const handleSignOut = () => {
    dispatch(AuthActions.signOutRequest());
  };

  return (
    <Container>
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
          <Header
            className="site-layout-background nav-menu"
            style={{ padding: 0, background: '#fff' }}
          >
            {collapsedMenu ? (
              <MenuUnfoldOutlined className="trigger" onClick={handleToggleMenu} />
            ) : (
              <MenuFoldOutlined className="trigger" onClick={handleToggleMenu} />
            )}
            <Button onClick={handleSignOut}>Sair</Button>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Container>
    </Container>
  );
};

Default.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Default;
