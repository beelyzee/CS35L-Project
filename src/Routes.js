import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

function Routes1() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/profile' element={<Profile/>} />
        </Routes>
    </Router>
    );
}

export default Routes1;