import React, { useContext } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from '../auth/context/authContext';

export const PublicRoute = ({ children }) => {

  const { authState } = useContext(AuthContext);
  const { logged } = authState;
  const navigate = useNavigate();

  console.log('logged', logged);

  return (!logged) ? children : <Navigate to={'/'}/>;

}
