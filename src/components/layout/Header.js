import {Link} from 'react-router-dom'
import styles from '../../scss/layout/Header.module.css'
import logo from '../../img/logotipo.svg'
function Header(){
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
                        <Link to="/pontos_coleta" className={`${styles.navMenu__item__link}`}>Pontos de Coleta</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    
                </ul>
                
                <input type="checkbox" className={`${styles.hidden__checkbox}`}></input>
                <ul className={`${styles.hidden__navMenu}`}>
                <li className={`${styles.navMenu__item}`}>
                        <Link to="/" className={`${styles.navMenu__item__link}`}>Home</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/mapa" className={`${styles.navMenu__item__link}`}>Mapa</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/login" className={`${styles.navMenu__item__link}`}>Login</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                    <li className={`${styles.navMenu__item}`}>
                        <Link to="/pontos_coleta" className={`${styles.navMenu__item__link}`}>Pontos de Coleta</Link>
                        <div className={`${styles.hiddenLine}`}></div>
                    </li>
                </ul>

                <div className={`${styles.userInfo}`}>
                    <Link to="/cadastro">Cadastre-se</Link>
                    |
                    <Link to="/login">Faça login</Link>
                </div>
            </header>
        </>
    )
}

export default Header