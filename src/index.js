import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage';

var app = React.createElement(MainPage);

ReactDOM.render(
  app,
  document.getElementById('root')
);

reportWebVitals();
