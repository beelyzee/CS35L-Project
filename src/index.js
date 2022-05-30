import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Profile from './Profile';
import RankingsPage from './RankingsPage';
import ResponsiveAppBar from './AppBar';
import App from './App';
import Bookmarks from './Bookmarks';
import SignIn from './login';
import SignUp from './signup';
import { AppBar } from '@mui/material';
import { Login } from '@mui/icons-material';
import Routes1 from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <div>
      <Routes1 />
    </div>
  </React.StrictMode>
);
