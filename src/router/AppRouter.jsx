import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to={"/marvel"} />}></Route>
        <Route path='login' element={<LoginPage />}>Inicio</Route>
        <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
    </>
  )
}
