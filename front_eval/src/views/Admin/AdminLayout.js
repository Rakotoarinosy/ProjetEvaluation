import React from 'react';
import ASidebar from '../../components/admin/ASidebar';
import ANavbar from '../../components/admin/ANavbar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className='adminPage'>
             <div className='sidebar_admin' id='sidebarSolarma'>
                <ASidebar/>
            </div>
            <div className='contentPageAdmin'>
                <div className='navbar_admin'>
                    <ANavbar/>
                </div>
                <div className='borderContenuAdmin'>
                    <div className='contenuAdmin'>
                        <Outlet/>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AdminLayout;