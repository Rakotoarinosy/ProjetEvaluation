import React, { useState, useEffect } from 'react';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const handleLogin = async() => {
      try {
        const rep = await axios.post('http://localhost:8000/loginvaovao/',{ label: username, mot_de_passe: password})
        console.log(rep.data)
      } catch (error) { 
        console.error(error.rep.data);
      }
    };

    return (
        <div className='authentification'>
            <div className='logo-auth'>
              <img src='../media/background/login.jpg' alt='logo'/>
            </div>
            <div className='input-auth'>
              <h2>Connexion</h2>
                <div className="control">
                  <i><FaUser/></i>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' name="label" placeholder="Email d'utilisateur" />
                </div>
                <div className="control">
                  <i><FaLock/></i>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' name="mot_de_passe" placeholder="Mot de passe" />
                </div>
                <button type="submit" onClick={handleLogin} className='btn-auth'>Se connecter</button>
              <div className='create-compte'>
                <span>Vous n'avez pas de compte ? <Link to='/create'>Inscrivez-vous maintenant</Link></span>
              </div>
            </div>
        </div>
    );
};

export default Login;
