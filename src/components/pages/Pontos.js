import styles from '../../scss/pages/Pontos.module.css'
import {Link} from 'react-router-dom'
function Pontos(){
    return(
        <>
            <main className={`${styles.main}`}>
                <h2 className={`${styles.main__title} text-center`}>O que são nossos pontos de coleta ?</h2>
                <p className={`${styles.main__paragraph}`}>
                    São locais devidamente cadastrados e verificados, destinados à reciclagem. São espaços designados para o descarte adequado de resíduos recicláveis, tais como garrafas e papéis, os quais são coletados periodicamente. Essa prática visa evitar o descarte inadequado de lixo em nossa cidade.
                </p>

                <Link to="/cadastroPonto" className={`${styles.main__btn}`}>Cadastrar Ponto</Link>
            </main>

        </>
    )
}

export default Pontos