import React from 'react'
import { useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers/getHeroeById';

export const HeroePage = () => {

    const { heroeId } = useParams();

    const heroeData = getHeroesById(heroeId);
    console.log(heroeData);

  return (
    <h1>HeroePage</h1>
  )
}
