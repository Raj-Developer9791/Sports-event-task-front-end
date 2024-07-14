import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
  const isAdmin = JSON.parse(localStorage.getItem("admin"));
  return (isAdmin ? children : <Navigate to="/admin" />)
};

export default AdminPrivateRoute;