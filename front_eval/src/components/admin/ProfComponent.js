import React, { useEffect, useState } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ListProf = () => {

    // const [dataProf, setDataProf] = useState([])


    const getAllProf = async () => {
        // const response = await axios.get("http://localhost:5000/clients")
        // if(response.status === 200){
        //     setDataProf(response.data)
        // }
    }

    const deleteProf = async(id) => {
    //     try {
    //         const reponse = await axios.delete(`http://localhost:5000/clients/${id}`)
    //         if(reponse.data.messageSucces){
    //             Swal.fire({ icon: 'success', title: 'Message succès', text: reponse.data.messageSucces, });
    //             getAllProf()  
    //         }else if(reponse.data.messageError){
    //             Swal.fire({ icon: 'error', title: 'Erreur!', text: reponse.data.messageError, });
    //         }
    //    } catch (error) {
    //         Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
    //    }
    }
    

    const actionButton = async(id) => {

        Swal.fire({
            title: `Êtes-vous sure de vouloir supprimer cette prof?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText:  `Supprimer`,
            denyButtonText: "Annuler",
            allowEscapeKey: false,
            allowOutsideClick: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteProf(id)
                }
            });           
    }

    useEffect(() => {
        getAllProf()
    }, [])
    

    return (
        <div className='all-client'>

                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Profile</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Voir</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src="../media/user.png" alt='img-profile'/></td>
                            <td>RAKOTONDRAVONY</td>
                            <td>mickaelrkt20@gmail.com</td>
                            <td><Link to={`/admin/client/profileClient/1`}><i><FaEye/></i></Link></td>
                            <td><Link to={`/admin/client/updateClient/1`} ><i><FaEdit/></i></Link></td>
                            <td><i onClick={() => actionButton(1)}><FaTrash/></i></td>
                        </tr>
                    </tbody>
                </table>

            {/* {Array.isArray(dataProf) && dataProf.length > 0 ? (
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Profile</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Voir</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  dataProf.map((prof) => (
                            <tr key={prof.id}>
                            <td>{prof.id}</td>
                            <td><img src={prof.url} alt='img-profile'/></td>
                            <td>{prof.nom}</td>
                            <td>{prof.adresse}</td>
                            <td><Link to={`/admin/client/profileClient/${prof.id}`}><i><FaEye/></i></Link></td>
                            <td><Link to={`/admin/client/updateClient/${prof.id}`} ><i><FaEdit/></i></Link></td>
                            <td><i onClick={() => actionButton(prof.id)}><FaTrash/></i></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>Aucun Prof disponible.</div>
            )} */}
           
        </div>
    );
};

export const AddEditProf = () => {

    const {id} = useParams()
    const [prof, setProf] = useState({
        nom: '',  adresse: '', preview:''
    })
    const [profile, setProfile] = useState('')
    const navigate = useNavigate()

    const loadProfile = (e) =>{
        const image = e.target.files[0]
        if(image){
            setProfile(image)
            setProf({...prof, preview: URL.createObjectURL(image)})
        }
    }
    
    const addProf = async(data) => {
        // try {
        //     const rep =  await axios.post("http://localhost:5000/clients", data)
        //     if(rep.data.messageSucces){
        //         Swal.fire({ icon: 'success', title: 'Message succès', text: rep.data.messageSucces, });

        //     }else if(rep.data.messageError){
        //         Swal.fire({ icon: 'error', title: 'Erreur!', text: rep.data.messageError, });
        //     } 
        // } catch (error) {
        //     Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
        // }
    }

    const updateProf = async(data, id) => {
        // try {
        //     const rep = await axios.patch(`http://localhost:5000/clients/${id}`, data)
        //     if(rep.data.messageSucces){
        //         Swal.fire({ icon: 'success', title: 'Message succès', text: rep.data.messageSucces, });

        //     }else if(rep.data.messageError){
        //         Swal.fire({ icon: 'error', title: 'Erreur!', text: rep.data.messageError, });
        //     } 
        // } catch (error) {
        //     Swal.fire({ icon: 'error', title: 'Erreur de connexion', text: 'Une erreur s\'est produite lors de la connexion. Veuillez réessayer.', });
        // }

    }

    const actionButton = async(e) => {
        e.preventDefault()
        
        if(!prof.nom || !prof.adresse ){
            Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez complèter les champs!', });
        }else{
            if(!profile){
                Swal.fire({ icon: 'error', title: 'Erreur', text: 'Veuillez insérer une image!', });
            }else{
                Swal.fire({
                    title: `Voulez-vous vraiment ${id ? "modifier": "ajouter"} ce nouveau client?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText:  `${id ? "Modifier": "Ajouter"}`,
                    denyButtonText: "Annuler",
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            const formData = new FormData()
                            formData.append('nom', prof.nom)
                            formData.append('adresse', prof.adresse)
                            formData.append('profile', profile)
                    
                            if(!id){
                                addProf(formData)
                            }else{
                                updateProf(formData, id)
                            }
                           
                            navigate("/admin/client")
                        }
                    }); 
            }
        }

    }

    return (
        <div className=''>
            <form onSubmit={actionButton}> 
                <div className='formulaire'>
                    <div className="field">
                        <label className='label'>Nom</label>
                        <div className="control">
                            <input type='text' value={prof.nom} onChange={(e) => setProf({...prof, nom: e.target.value})} className='input' placeholder='Nom du Client'/>
                        </div>
                    </div>
                
                    <div className="field">
                        <label className='label'>Adresse</label>
                        <div className="control">
                            <input type='text' value={prof.adresse} onChange={(e) => setProf({...prof, adresse: e.target.value})} className='input' placeholder='Adresse du Client'/>
                        </div>
                    </div>
                    <div className="field">
                        <label className='label'>Profile</label>
                        <div className="control">
                            <div className="file">
                                <label className='file-label'>
                                    <input type='file' className='file-input' onChange={loadProfile}/>
                                    <span className='file-cta'>
                                        <span className='file-label'>Choisir une image ...</span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                   
                    {
                        prof.preview ? (
                            <figure className='image is-128x128'>
                                <img src={prof.preview} alt='Preview images' />
                            </figure>
                        ):(
                            ""
                        )
                    }
                    <div className="field btn">
                        <div className="control">
                            <input type='submit' value={id ? "Modifier": "Ajouter"} className='button is-success'/>
                        </div>
                        <div className="control">
                            <button type='reset' className='button is-danger'>Annuler</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

