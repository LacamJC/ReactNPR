import styles from '../../scss/pages/Pontos.module.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import PontosCard from '../events/PontosCard'
import DefaultData from '../../data/DefaultData.json' 
import axios from 'axios'
function Pontos(){

    const [pontos, setPontos] = useState([])

    useEffect(() => {
        
        window.scrollTo(0, 0)

        const fetchData = async () => {
            try {
              const response = await axios.get('http://localhost:3001/pontos');
              setPontos(response.data);
            } catch (error) {
               setPontos(DefaultData) 
              console.error('Erro ao buscar dados:', error)
            }
          }

        //   console.log(`Default: ${JSON.stringify(DefaultData)}`)

        fetchData()
      }, [])

      console.log(pontos)



       

     
    
  
      
    return(
        <>
            <main className={`${styles.main}`}>
                <h2 className={`${styles.main__title} text-center`}>O que são nossos pontos de coleta ?</h2>
                <p className={`${styles.main__paragraph}`}>
                    São locais devidamente cadastrados e verificados, destinados à reciclagem. São espaços designados para o descarte adequado de resíduos recicláveis, tais como garrafas e papéis, os quais são coletados periodicamente. Essa prática visa evitar o descarte inadequado de lixo em nossa cidade.
                </p>

                <Link to="/cadastroPonto" className={`${styles.main__btn}`}>Cadastrar Ponto</Link>

                
            </main>
            <article>
                    <h2>Veja nossos pontos já existentes</h2>
                    <div className={`${styles.pontosList}`}>
                    {
                        pontos ? (
                            pontos.map(ponto=>(
                                <PontosCard instituicao={ponto.instituicao} cep={ponto.cep} tipos={ponto.tipo}/>
                            ))
                        ) : ""
                    }  
                    </div>

            </article>
                 
        </>
    )
}

export default Pontos