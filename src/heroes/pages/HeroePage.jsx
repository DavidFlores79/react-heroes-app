import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroesById } from '../helpers/getHeroeById';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from 'jquery';
import { Tooltip } from '../../ui/components/Tooltip';

export const HeroePage = () => {

  $('[data-toggle="tooltip"]').tooltip();

  const { heroeId } = useParams();
  const navigate = useNavigate();

  const heroeData = useMemo(() => getHeroesById(heroeId), [heroeId]);
  console.log(heroeData);

  if (!heroeData || Object.keys(heroeData).length === 0) return <Navigate to={'page-not-found'} />

  const { id, superhero, alter_ego, first_appearance, characters } = heroeData;

  const heroImage = `/src/assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Tooltip text={"Regregar"}>
          <button onClick={() => navigate(-1)} className="btn btn-outline-danger btn-lg animate__animated animate__fadeIn animate__delay-1s">
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
          </button>
        </Tooltip>
        <div className="mr-5"></div>
        <div className="heroe-page card bg-dark text-white mb-5 shadow animate__animated animate__fadeInLeft">
          <img src={heroImage} className="card-img-top" alt={superhero} />
          <div className="card-img-overlay">
            <h1 className="card-title font-weight-bold">{superhero}</h1>
            <h3 className="card-text">{alter_ego}</h3>
            {(alter_ego != characters && (<h5 className="card-text">{characters}</h5>))}
            <h4 className="card-text"><small>{first_appearance}</small></h4>
          </div>
        </div>
      </div>
    </>
  )
}
