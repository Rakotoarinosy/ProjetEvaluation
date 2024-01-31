import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Etudiant = () => {
    return (
        <div className=''>
            <div className="navbarPage">
                <div className='titre-page' >Etudiants</div>
                <div><button className='button is-success' ><Link to={`/admin/etudiant/addEditEtudiant`}>Nouveau Etudiant</Link></button></div>
            </div>
            <div className='outlet-page' id='list-content'>
                <Outlet/>
            </div>
        </div>  
    );
};

export default Etudiant;