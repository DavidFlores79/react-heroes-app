import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import './main.css'
import { HeroesApp } from './HerosApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HeroesApp/>
  </React.StrictMode>,
)
