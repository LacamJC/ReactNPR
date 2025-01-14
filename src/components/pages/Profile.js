import styles from '../../scss/pages/Profile.module.css'
import { useState, useEffect } from 'react'
import { useMask } from "@react-input/mask"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import url from '../../data/url.json'
import {toast, Toaster} from 'react-hot-toast'
import Loader from '../events/Loader'
function Profile(){

    const notifySuccess = (msg) => toast.success(msg)
    const notifyError = (msg) => toast.error(msg)

    const user = JSON.parse(localStorage.getItem('User'))
    const [loading, setLoading] = useState(false)
    const [userData, setUserData] = useState({
        nome : "",
        currentEmail : "",
        email : "",
        senha : "",
        telefone: ""
    })
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [editMode, setEditMode] = useState(false)
    
    const BrazilPhoneMask = useMask({
        mask: '(__) _____-____',
        replacement: { _: /\d/ }}
    )
    useEffect(()=>{
        document.getElementById('email').innerHTML = user.email
        setUserData({
            nome : user.nome,
            currentEmail : user.email,
            email : document.getElementById('email').value,
            telefone : document.getElementById('telefone').value,
            senha : document.getElementById('senha').value
        })

    },[])

    function handleClick()
    {
        setShowPassword(!showPassword)
    }

    function handleSwitch(){
        setEditMode(!editMode)
    }

    function handleChange(){
        setUserData({
            ...userData,
            nome : document.getElementById('nome').value,
            email : document.getElementById('email').value,
            telefone : document.getElementById('telefone').value,
            senha : document.getElementById('senha').value
        })

        // setTimeout(()=>{console.log(userData)}, 2000)
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
        console.log(userData)
        setLoading(true)
        try{
            axios.
            put(`${url.url}/updateProfile`, userData)
            .then(response=>{
                console.log(response)
                localStorage.removeItem('User')
                setLoading(false)
                notifySuccess('Dados alterados com sucesso')
                // navigate('/')
                setTimeout(()=>{
                    navigate('/')
                }, 1500)
                

            })
            .catch(err=>{
                console.log(`ERRO TO AXIOS: ${err}`)
                setLoading(false)
                
                notifyError("Falha ao alterar dados")
            })
        }catch(err){
            console.log(`CATCH ERRO: ${err}`)
            setLoading(false)
            
            notifyError("Falha ao se comunicar com servidor")
        }

    }

    return(
    <>
        <main className={`${styles.profileInfo}`}>
            {loading && (
                <Loader/>
            )}
            <h2 className={`${styles.bemVindo}`}>Olá {editMode ? (<input 
                type="text"
                name="nome"
                id="nome"
                className={styles.inputName}
                placeholder={user.nome}
                onChange={handleChange}
            />) : (<span>{user.nome}</span>)} </h2>
            <h3>Seus Dados</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <div className='mb-3'>
                            <label htmlFor='email' className='mb-2'>Email</label>
                            {editMode ? <input
                                type="email"
                                className='form-control'
                                id='email'
                                name='email'
                                onChange={handleChange}
                                
                            /> : <input
                                type="email"
                                className='form-control'
                                id='email'
                                readOnly
                                value={user.email}
                                name='email'
                            />}
                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className='mb-3'>
                            <label htmlFor='telefone' className='mb-2'>Telefone</label>
                            

                            {editMode ? <input
                                type="text"
                                className='form-control'
                                id='telefone'
                                ref={BrazilPhoneMask}
                                name='telefone'
                                onChange={handleChange}
                            /> : <input
                                type="text"
                                className='form-control'
                                id='telefone'
                                readOnly
                                name='telefone'
                                value={user.telefone}
                            />}
                        </div>
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='senha' className='mb-2'>Senha</label>
                    {editMode ? <input 
                        type={showPassword ? 'text' : 'password'}
                        className='form-control' 
                        id='senha' 
                        name='senha'
                        onChange={handleChange}
                    />: <input 
                    type={showPassword ? 'text' : 'password'}
                    className='form-control' 
                    id='senha'
                    
                    name='senha' 
                    value={user.senha} 
                />}
                </div>
                <div className="form-check mb-3">
                    <input 
                        type="checkbox" 
                        id="ocultarSenha" 
                        className="form-check-input" 
                        onClick={handleClick}
                                
                    />
                    <label htmlFor="ocultarSenha" className="form-check-label" readOnly>Mostrar Senha</label>
                </div>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={handleSwitch} id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Alterar dados de usuario</label>
                        </div>
                        {editMode ? <input type="submit" value="Confirmar Alterações" className='btn btn-success'/> : <input type="submit"  value="Confirmar Alterações" className='btn btn-danger' disabled/>}
            </form>
            {editMode && (
                <div className='alert alert-warning my-5'>
                    <p>Atenção você está editando seus dados, após as alterações você será deslogado e redirecionado para a página inicial</p>
                </div>
            )}
        </main>
        <Toaster/>
    </>
    )
}

export default Profile