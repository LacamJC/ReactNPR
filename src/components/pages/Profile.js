import styles from '../../scss/pages/Profile.module.css'
import { useState, useEffect } from 'react'
import { useMask } from "@react-input/mask"
import url from '../../data/url.json'
function Profile(){

    const user = JSON.parse(localStorage.getItem('User'))

    const [showPassword, setShowPassword] = useState(false)
    const [editMode, setEditMode] = useState(false)
    
    const BrazilPhoneMask = useMask({
        mask: '(__) _____-____',
        replacement: { _: /\d/ }}
    )
    useEffect(()=>{
        const inputs = [,document.getElementById('senha'),document.getElementById('telefone')]
        document.getElementById('email').innerHTML = user.email
        console.log(user.email)
    },[])

    function handleClick()
    {
        setShowPassword(!showPassword)
    }

    function handleSwitch(){
        setEditMode(!editMode)
    }

    return(
    <>
        <main className={`${styles.profileInfo}`}>
            <h2 className={`${styles.bemVindo}`}>Olá <span>{user.nome}</span></h2>
            <h3>Seus Dados</h3>
            <form method="POST" action={`${url.url}/cadUser`}>
                <div className="row">
                    <div className="col col-12 col-md-6">
                        <div className='mb-3'>
                            <label htmlhtmlhtmlFor='email' className='mb-2'>Email</label>
                            {editMode ? <input
                                type="email"
                                className='form-control'
                                id='email'
                                name='email'
                                
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
                            <label htmlhtmlhtmlFor='telefone' className='mb-2'>Telefone</label>
                            

                            {editMode ? <input
                                type="text"
                                className='form-control'
                                id='telefone'
                                ref={BrazilPhoneMask}
                                name='telefone'
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
                    <label htmlhtmlhtmlFor='senha' className='mb-2'>Senha</label>
                    {editMode ? <input 
                        type={showPassword ? 'text' : 'password'}
                        className='form-control' 
                        id='senha' 
                        name='senha'
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
                    <label htmlhtmlhtmlFor="ocultarSenha" className="form-check-label" readOnly>Mostrar Senha</label>
                </div>

                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" onChange={handleSwitch} id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Alterar dados de usuario</label>
                        </div>
                        {editMode ? <input type="submit" value="Confirmar Alterações" className='btn btn-success'/> : <input type="submit"  value="Confirmar Alterações" className='btn btn-danger' disabled/>}
            </form>
        </main>
    </>
    )
}

export default Profile