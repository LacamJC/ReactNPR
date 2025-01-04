import { Link } from "react-router-dom"
import styles from '../scss/FuncaoSite.module.css'
function FuncaoSite({nome_funcao, icone, texto, link, text_link}){
    return(
        <>
             <div className={`${styles.funcao}`}>
                    <h2 className={styles.funcao__title}>{nome_funcao}</h2>
                    <img src={`${icone}`} className={styles.funcao__img}/>
                    <p className={styles.funcao__paragrafo}>
                        {texto}
                    </p>
                    <Link to={`/${link}`} className={`btn btn-success my-2 ${styles.buton}`}>{text_link}</Link>
                </div>
        </>
    )
}
export default FuncaoSite