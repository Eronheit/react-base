import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import './styles/antd-styles.less';

const App = () => {
  return (
    <>
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
