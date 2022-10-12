
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserProfile from "./components/userprofile";

const profile = ReactDOM.createRoot(document.getElementById('profile'));

profile.render(
    <React.StrictMode>
        <UserProfile />
    </React.StrictMode>
  );