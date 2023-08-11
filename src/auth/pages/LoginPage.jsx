import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

export const LoginPage = () => {

  const navigate = useNavigate();
  const { login } = useContext( AuthContext );

    const onLogin = () => {

        login('David Flores');

        navigate('/', {
          replace: true
        });
    }

  return (
    <>
      <div className="p-3">
        <h1>LoginPage</h1>
        <hr />
        <Link onClick={onLogin} to={'/'} className="btn btn-primary">Iniciar Sesión</Link>
      </div>
    </>
  )
}
