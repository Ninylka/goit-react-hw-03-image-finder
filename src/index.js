import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { AppStyled } from 'components/App.styled';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppStyled> 
    <App/>
      </AppStyled>
  </React.StrictMode>
);
