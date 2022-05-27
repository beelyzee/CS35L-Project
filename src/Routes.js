
   
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import SignIn from './login'
import SignUp from './signup'
import Profile from './Profile'

function Routes1() {
    return (
    <Router>
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/login' element={<SignIn/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/Profile' element={<Profile/>} />
        </Routes>
    </Router>
    );
}

export default Routes1;