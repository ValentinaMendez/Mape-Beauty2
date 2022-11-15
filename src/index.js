import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap-icons/font/bootstrap-icons.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  
  </React.StrictMode>
);

reportWebVitals();
