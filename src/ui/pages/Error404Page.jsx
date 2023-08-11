import React from 'react'
import { Link } from 'react-router-dom'

export const Error404Page = () => {
  return (
    <>
      <h1>Error404Page</h1>
      <hr />
      <p>Esta página no existe!</p>
      <p>Regresar a <Link to={'/'}>Inicio</Link></p>
    </>
  )
}
