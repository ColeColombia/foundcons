import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/app.css";
import Header from './components/header';

// start the Stimulus application
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>
  );