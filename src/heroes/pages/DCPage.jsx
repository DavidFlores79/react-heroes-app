import React from 'react'
import { HeroesList } from '../components/HeroesList'

export const DCPage = () => {


  const publisher = 'DC Comics';

  return (
    <>
      <h1>DCPage</h1>
      <HeroesList publisher={publisher} />
    </>
  )
}
