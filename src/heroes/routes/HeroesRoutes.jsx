import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DCPage } from '../pages/DCPage'
import { Error404Page } from '../../ui/pages/Error404Page'
import { SearchPage } from '../pages/SearchPage'
import { HeroePage } from '../pages/HeroePage'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="p-3">
                <Routes>
                    <Route path='marvel' element={<MarvelPage />}/>
                    <Route path='dc' element={<DCPage />}/>
                    <Route path='search' element={<SearchPage />}/>
                    <Route path='heroe/:heroeId' element={<HeroePage />}/>
                    <Route path="page-not-found" element={<Error404Page />} />
                    {/* Si la ruta no existe */}
                    <Route path='*' element={<Navigate to={"page-not-found"} />}/>
                </Routes>
            </div>
        </>
    )
}
