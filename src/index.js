import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme/layout.css'
import './theme/buttons.css'
import reportWebVitals from './reportWebVitals';
import RoutingLayer from "./Routing-layer";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <RoutingLayer />
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
