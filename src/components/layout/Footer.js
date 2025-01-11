import styles from '../../scss/layout/Footer.module.css'
import {FaInstagram, FaFacebook, FaTwitter  } from 'react-icons/fa'
import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
            <footer className={`w-100 mt-5 row bg-sucscess ${styles.footer}`}>
                <div className={`col col-12 col-md-4`}>
                    <ul className={`${styles.footer_menu}`}>
                        <li className={`${styles.footer_menu__item}`}><Link><FaTwitter className={`${styles.icon}`}/>Twitter</Link></li>
                        <li className={`${styles.footer_menu__item}`}><Link><FaInstagram className={`${styles.icon}`}/>Instagram</Link></li>
                        <li className={`${styles.footer_menu__item}`}><Link><FaFacebook className={`${styles.icon}`}/> Facebook</Link></li>
                    </ul>
                </div>
                <div className={`col col-12 col-md-4`}>
                    {/* <h3>Faça seu comentario</h3> */}
                </div>
                <div className={`col col-12 col-md-4`}>
                    <p>lorem isplum odlor amet</p>
                </div>
            </footer>
        </>
    )
}

export default Footer