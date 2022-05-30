import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Profile';
import RankingsPage from './RankingsPage';
import ResponsiveAppBar from './AppBar';
import App from './App';
import Bookmarks from './Bookmarks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <div>
    <ResponsiveAppBar />
		<Profile />
    <Bookmarks />
    </div>
  </React.StrictMode>
);
