import React from 'react';
import ReactDOM from 'react-dom/client';
import Culprit from './components/userCulprits';

const culprit = ReactDOM.createRoot(document.getElementById('culprit'));

culprit.render(
    <React.StrictMode>
        <Culprit />
    </React.StrictMode>
  );