import React from 'react'
import { HeroesList } from '../components/HeroesList';

export const MarvelPage = () => {

  const publisher = 'Marvel Comics';
  const publisherImage = 'src/assets/Marvel.png';

  return (
    <>
      <div className='d-flex justify-content-center justify-content-sm-center justify-content-md-start'>
        <img src={ publisherImage } height={120} className='py-3' alt="" />
      </div>
      <HeroesList publisher={publisher} />
    </>
  )
}
