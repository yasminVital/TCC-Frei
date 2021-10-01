import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './components/cabecalho/cabecalho';
 
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);
