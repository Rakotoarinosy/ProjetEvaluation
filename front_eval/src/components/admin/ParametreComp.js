import React from 'react';
import { FaShieldAlt, FaTachometerAlt, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const LinkParametre = () => {
    return (
        <div>
            <div className='titre-parametre'>Paramètres</div>
            <ul>
                <div><Link to='/admin/userProfile'><li><i><FaUserCircle/></i><span>Profil</span></li></Link></div>
                <div><Link to='/admin/security'><li><i><FaShieldAlt/></i><span>Mot de passe</span></li></Link></div>
                <div><Link to='/admin/theme'><li><i><FaTachometerAlt/></i><span>Thème</span></li></Link></div>
                <div><Link to='/admin/utilisateur'><li><i><FaTachometerAlt/></i><span>Utilisateurs</span></li></Link></div>
            </ul>
        </div>
    );
};