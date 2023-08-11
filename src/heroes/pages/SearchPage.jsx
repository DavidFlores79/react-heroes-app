import React from 'react'
import { HeroItem } from '../components/HeroItem'
import { useForm } from '../hooks/useForm';
import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const result = getHeroesByName(q);

  // console.log({query});

  const { formState, onInputChange } = useForm({
    searchText: q,
  });

  const { searchText } = formState;

  const onSubmitForm = (e) => {
    e.preventDefault();
    e.stopPropagation();
    searchText.trim();
    // if (searchText.trim().length <= 1) return;
    navigate(`?q=${searchText.trim().toLowerCase()}`);
  }

  return (
    <>
      <h1>Buscar Héroe</h1>
      <div className="row">
        <div className="col-md-5 p-4">
          <h4>Buscando...</h4>
          <hr />
          <form className='was-validated' onSubmit={onSubmitForm}>
            <div className="form-group">
              <input
                type="text"
                className='form-control'
                name="searchText"
                placeholder='Escribe un heroe a buscar'
                value={searchText}
                onChange={onInputChange}/>
            </div>
            <button className="btn btn-primary">Buscar</button>
          </form>
        </div>
        <div className="col-md-7 p-4">
          <h4>Resultados</h4>
          <hr />
          <div className={ `alert alert-primary animate__animated animate__fadeIn ${(q.length > 0) && 'd-none' }` } role="alert">
            Busca un héroe!
          </div>
          <div className={ `alert alert-danger animate__animated animate__fadeIn ${(result.length > 0 || q.length <= 0) && 'd-none' }` } role="alert">
            No se encontró el héroe <b>{q}</b>!
          </div>
          <div className={ `row d-flex justify-content-around align-items-center` }>
          {
            result.map( heroe => (
              <HeroItem key={heroe.id} {...heroe}/>
            ))
          }
          </div>
        </div>
      </div>
    </>

  )
}
