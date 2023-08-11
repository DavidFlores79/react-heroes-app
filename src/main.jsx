import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './main.css'
import { HeroesApp } from './HerosApp'
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faRightFromBracket, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faRightFromBracket,
  faChevronLeft,
  faChevronRight,
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
