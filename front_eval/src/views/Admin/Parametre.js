import React from 'react';
import { Outlet } from 'react-router-dom';
import { LinkParametre } from '../../components/admin/ParametreComp';

const Parametre = () => {
    return (
        <div className='parametre'>
            <div className='content-parametre'>
                <Outlet/>
            </div>
            <div className='link-parametre'>
                <LinkParametre/>
            </div>
        </div>
    );
};

export default Parametre;