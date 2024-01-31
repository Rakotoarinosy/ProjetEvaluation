import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='authentification'>
            <div className='logo-auth'>
              <img src='../media/background/login.jpg' alt='logo'/>
            </div>
            <div className='input-auth'>
              <h2>Connexion</h2>
              <div className="control">
                <i><FaUser/></i>
                <input type="text" className='input' placeholder="Email d'utilisateur" />
              </div>
              <div className="control">
                <i><FaLock/></i>
                <input type="password" className='input' placeholder="Mot de passe" />
              </div>
                   
              <button className='btn-auth'><Link to='/admin'>Se connecter</Link></button>

              <div className='create-compte'>
                <span>Vous n'avez pas de compte ? <Link to='/create'>Inscrivez-vous maintenant</Link></span>
              </div>

            </div>
            
    
            
    
            {/* {isLoggedIn && ( */}
            {/* <div> */}
                {/* Bouton de déconnexion */}
                {/* <button onClick={handleLogout}>Se déconnecter</button> */}
    
                {/* Exemple d'utilisation du token pour une requête protégée */}
                {/* <button onClick={fetchUserData}>Obtenir les données de l'utilisateur</button> */}
            {/* </div> */}
            {/* )} */}
        </div>
    );
};

export default Login;