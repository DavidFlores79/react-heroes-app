import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import './main.css'
import { HeroesApp } from './HerosApp'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
