import styled from 'styled-components';
import { Layout } from 'antd';

export const Container = styled(Layout)`
  height: 100vh;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }

  .nav-menu {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > button {
      margin: 0 10px;
    }
  }
`;
