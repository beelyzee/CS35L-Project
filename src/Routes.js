
   
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SignIn from './login'
import SignUp from './signup'
import Profile from './Profile'
import RankingsPage from './RankingsPage';

function Routes1() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/login' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/rankings' element={<RankingsPage/>} />
        </Routes>
    </Router>
    );
}

export default Routes1;