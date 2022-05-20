import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Profile';
import ResponsiveAppBar from './AppBar';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <div>
    <ResponsiveAppBar />
		<Profile />
    </div>
  </React.StrictMode>
);
