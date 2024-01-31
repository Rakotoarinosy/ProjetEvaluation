import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../views/Admin/AdminLayout';
import Dashboard from '../views/Admin/Dashboard';
import Prof from '../views/Admin/Prof';
import Etudiant from '../views/Admin/Etudiant';
import Classe from '../views/Admin/Classe';
import Matiere from '../views/Admin/Matiere';
import Page404 from '../views/Page404';
import { AddEditProf, ListProf } from '../components/admin/ProfComponent';
import { AddEditEtudiant, ListEtudiant } from '../components/admin/EtudiantComp';
import Parametre from '../views/Admin/Parametre';

const AdminRoute = () => {
    return (
        <Routes>
                <Route element={<AdminLayout/>}>
                    <Route index element={<Dashboard/>}/>

                    {/*--------- PROF --------- */}
                    <Route path='/prof' element={<Prof/>}>
                        <Route index element={<ListProf/>}/>
                        <Route path='/prof/addEditProf' element={<AddEditProf/>}/>
                    </Route>

                    {/*--------- ETUDIANT --------- */}
                    <Route path='/etudiant' element={<Etudiant/>}>
                        <Route index element={<ListEtudiant/>}/>
                        <Route path='/etudiant/addEditEtudiant' element={<AddEditEtudiant/>}/>
                    </Route>


                    {/*--------- CLASSE --------- */}
                    <Route path='/classe' element={<Classe/>}/>


                    {/*--------- MATIERE --------- */}
                    <Route path='/matiere' element={<Matiere/>}/>


                    {/*--------- PARAMETRES --------- */}
                    <Route path='/parametre' element={<Parametre/>}>
                        {/* <Route index element={<ListEtudiant/>}/>
                        <Route path='/etudiant/addEditEtudiant' element={<AddEditEtudiant/>}/> */}
                    </Route>
                   
                </Route>
                <Route path='*' element={<Page404/>}/>
            </Routes>
    );
};

export default AdminRoute;