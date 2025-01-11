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
                <div className={`col col-12 col-md-4 ${styles.cst}`}>
                <div className={`${styles.copyright}`}>
                    <p>© 2025 NPR. Todos os direitos reservados.</p>
                </div>
                </div>
                <div className={`col col-12 col-md-4`}>
                    {/* <p>Juntos, transformamos resíduos em soluções e cuidamos do nosso planeta, um passo de cada vez.</p> */}
                </div>
            </footer>
        </>
    )
}

export default Footer