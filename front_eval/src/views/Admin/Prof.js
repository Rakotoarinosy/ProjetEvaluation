import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Prof = () => {
    return (
        <div className=''>
            <div className="navbarPage">
                <div className='titre-page' >Professeurs</div>
                <div><button className='button is-success' id='btnAdd'><Link to={`/admin/prof/addEditProf`}>Nouveau Professeur</Link></button></div>
            </div>
            <div className='outlet-page' id='list-content'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Prof;