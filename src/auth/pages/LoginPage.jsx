import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate = useNavigate();

    const onLogin = () => {
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
