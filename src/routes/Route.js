import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import store from '../store';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

const RouteWrapper = ({ component: Component, isPrivate, ...rest }) => {
  const { signedIn } = store.getState().auth;

  if (!signedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signedIn && !isPrivate) {
    return <Redirect to="home" />;
  }

  const Layout = signedIn ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

export default RouteWrapper;
