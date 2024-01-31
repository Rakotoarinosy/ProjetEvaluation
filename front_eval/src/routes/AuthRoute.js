import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../views/Auth/Login';
import Create from '../views/Auth/Create';
import Page404 from '../views/Page404';
import '../assets/admin/styleAdmin.css'

const AuthRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='*' element={<Page404/>}/>
            </Routes>
    );
};

export default AuthRoute;