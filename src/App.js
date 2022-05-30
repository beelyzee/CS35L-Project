import { useState } from 'react';
import './App.css';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import Home from './Home.js';
import { Login } from '@mui/icons-material';
import SignUp from './signup';
import SignIn from './login';
import Profile from './Profile';
import ResponsiveAppBar from './AppBar';
import { AppBar } from '@mui/material';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
    return (
	<div>
	    <Profile />
      <SignIn />
      <AppBar />
      <SignUp />
/*=======
	<div className="App">
      <ResponsiveAppBar />
	    <Profile />
>>>>>>> Search-Bar*/
	</div>
  );
}

export default App;
