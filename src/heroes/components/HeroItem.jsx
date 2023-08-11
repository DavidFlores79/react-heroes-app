import React from 'react'
import { Link } from 'react-router-dom'

export const HeroItem = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImage = `/src/assets/heroes/${id}.jpg`

    return (
        <>
            <Link to={`/heroe/${id}`} className='pointer animate__animated animate__fadeIn'>
                <div className="heroe-item card m-2 shadow">
                    <img src={heroImage} className="card-img-top" alt={superhero} />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">{superhero}</h4>
                        <p className="card-text">{alter_ego}</p>
                        {(alter_ego != characters && (<p className="card-text">{characters}</p>))}
                        <p className="card-text"><small className='text-muted'>{first_appearance}</small></p>
                    </div>
                </div>
            </Link>
        </>
    )
}
