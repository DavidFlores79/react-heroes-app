import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroItem } from './HeroItem';

export const HeroesList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher);
    console.log(`${publisher}`, heroes);

    return (
        <div className='row d-flex justify-content-around animate__animated animate__fadeIn pb-5'>
            {
                heroes.map(heroe => <HeroItem key={heroe.id} {...heroe} />)
            }
        </div>
    )
}
