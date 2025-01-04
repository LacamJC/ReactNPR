import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from '../../scss/layout/Header.module.css'
import logo from '../../img/logotipo.svg'
import {toast, Toaster} from 'react-hot-toast'
function Header(){
    const [isLogged, setIsLogged] = useState(false)
    const user = JSON.parse(localStorage.getItem('User'))
    function logout(){
        localStorage.removeItem('User')
        setTimeout(() => {
            window.location.reload()
        }, 1);
    }

    function handleClick(){
        console.log("CLICK")
        console.log(document.getElementById('checkbox').checked)
        
    }

    function closeNav(){
        document.getElementById('checkbox').checked = false
    }
    
    return(
        <>
            <header className={`${styles.header}`}>
                <Link to="/" className={`${styles.logo_link}`}>
                    <img src={logo} />
                </Link>
                <ul className={`${styles.navMenu}`}>
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/" className={`${styles.navMenu__item__link}`}>Home</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/mapa" className={`${styles.navMenu__item__link}`}>Mapa</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    {/* <li className={`${styles.navMenu__item}`}>
                        <Link to="/login" className={`${styles.navMenu__item__link}`}>Login</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li> */}
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/pontos" className={`${styles.navMenu__item__link}`}>Pontos de Coleta</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    
                </ul>
                
                <input type="checkbox" className={`${styles.hidden__checkbox}`} id="checkbox" onClick={handleClick}></input>
                <ul className={`${styles.hidden__navMenu}`}>
                <li className={`${styles.navMenu__item} `} onClick={closeNav}>
                        <Link to="/" className={`${styles.navMenu__item__link}`}>Home</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item} `} onClick={closeNav}>
                        <Link to="/mapa" className={`${styles.navMenu__item__link}`}>Mapa</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item} `} onClick={closeNav}>
                        <Link to="/login" className={`${styles.navMenu__item__link}`}>Login</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item} `} onClick={closeNav}>
                        <Link to="/pontos_coleta" className={`${styles.navMenu__item__link}`}>Pontos de Coleta</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                </ul>
                    
             

                {user ? 
                <div className={`${styles.userInfo}`}>
                    <h2 className={styles.userLogged}>Olá {user.nome} | <button onClick={logout}>Sair</button><div className={styles.lineUser}></div></h2>
                    
                </div> 
                : 
                <div className={`${styles.userInfo}`}>
                    <Link to="/cadastro">Cadastre-se</Link>
                    |
                    <Link to="/login">Faça login</Link>
                </div>}
            </header>
        </>
    )
}

export default Header