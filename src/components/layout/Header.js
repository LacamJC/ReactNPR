import {Link} from 'react-router-dom'
import { RiMenuFill } from "react-icons/ri"
import styles from '../../scss/layout/Header.module.css'
import logo from '../../img/logotipo.svg'
import { useNavigate } from 'react-router-dom'
function Header(){
    
    const user = JSON.parse(localStorage.getItem('User'))
    const navigate = useNavigate()
    function logout(){  
        navigate('/')
        setTimeout(() => {
            localStorage.removeItem('User')
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
                <RiMenuFill className={`${styles.hidden__checkbox_icon}`} />
                
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
                        <Link to="/pontos" className={`${styles.navMenu__item__link}`}>Pontos de Coleta</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                </ul>
                    
             

                {user ? 
                <div className={`${styles.userInfo}`}>
                    <h2 className={styles.userLogged}>Olá <Link to="/profile">{user.nome}</Link> | <button onClick={logout}>Sair</button><div className={styles.lineUser}></div></h2>
                    
                </div> 
                : 
                <div className={`${styles.userInfo} bg-success rounded`}>
                    <Link to="/cadastro" className={`${styles.infoLink} text-light`}>Cadastre-se</Link>
                    |
                    <Link to="/login" className={`${styles.infoLink} text-light`}>Faça login</Link>
                </div>}
            </header>
        </>
    )
}

export default Header