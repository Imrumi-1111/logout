import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAuth ? <Component /> : <Navigate to="/login" replace />}
    />
  );
};

export default ProtectedRoute;
