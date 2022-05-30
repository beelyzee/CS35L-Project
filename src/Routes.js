import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App'
import SignIn from './login'
import SignUp from './signup'
import Profile from './Profile'
import RankingsPage from './RankingsPage';
import Search from './search'

function Routes1() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/login' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/rankings' element={<RankingsPage/>} />
            <Route path='/Profile' element={<App/>} />
            <Route path='/search' element={<Search/>} />
        </Routes>
    </Router>
    );
}

export default Routes1;
