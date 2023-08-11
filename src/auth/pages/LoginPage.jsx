import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {

    login();

    const lastPath = localStorage.getItem('lastPath') || '/';
    console.log('lastPath',lastPath);

    navigate(lastPath, {
      replace: true
    });
  }

  return (
    <>
      <div className="p-3">
        <h1>LoginPage</h1>
        <hr />
        <div onClick={onLogin} className="btn btn-primary">Iniciar Sesión</div>
      </div>
    </>
  )
}
