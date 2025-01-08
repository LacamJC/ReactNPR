import styles from '../../scss/events/PontosCard.module.css'
import { Link } from 'react-router-dom'

function PontosCard({instituicao, cep, tipos})
{
    
    return(
        <>
            <div className={`card my-5`} style={{width: '20rem'}}>
                {/* <img src="..." className={`card-img-top`} alt="..."/> */}
                <div className={`card-body`}>
                    <h5 className={`card-title`}>{instituicao}</h5>
                    <p className={`card-text`}>CEP: {cep}
                        <br/> Tipo: {tipos}
                    </p>
                    
                    
                    <Link to="/mapa" className={`btn btn-success`}>Ver no Mapa</Link>
                </div>
            </div>
        </>
    )

}
export default PontosCard