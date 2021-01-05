import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyle from './styles/global';
import Routes from './routes';
import './styles/antd-styles.less';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
