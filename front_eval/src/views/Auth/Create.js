import React from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Create = () => {
    return (
        <div className='authentification'>
            <div className='logo-auth'>
              <img src='../media/background/createCompte.jpg' alt='logo'/>
            </div>
            <div className='input-auth'>
              <h2>Inscription</h2>
              <div className="control">
                <i><FaUser/></i>
                <input type="text" className='input' placeholder="Email d'utilisateur" />
              </div>
              <div className="control">
                <i><FaLock/></i>
                <input type="password" className='input' placeholder="Mot de passe"/>
              </div>
              <div className="control">
                <i><FaLock/></i>
                <input type="password" className='input' placeholder="Comfirmer votre mot de passe"  />
              </div>
              
              
              <button className='btn-auth'>S'inscrire</button>

              <div className='create-compte'>
                <span><Link to='/'>J'ai déjà un compte</Link></span>
              </div>

            </div>
        </div>
    );
};

export default Create;