import styles from '../../scss/pages/Pontos.module.css'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react'
import PontosCard from '../events/PontosCard'
import DefaultData from '../../data/DefaultData.json' 
import axios from 'axios'
import url from '../../data/url.json'
function Pontos(){

    const [pontos, setPontos] = useState([])

    useEffect(() => {
        
        window.scrollTo(0, 0)

        const fetchData = async () => {
            try {
              const response = await axios.get(`${url.url}/pontos`);
              console.log(response.status)
              setPontos(response.data);
            } catch (error) {
               setPontos(DefaultData) 
               
              console.error('Erro ao buscar dados:', error)
            }
          }

        //   console.log(`Default: ${JSON.stringify(DefaultData)}`)

        fetchData()
      }, [])




       

     
    
  
      
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
                        
                        pontos && (
                            pontos.map(ponto=>(
                                <PontosCard 
                                    key={ponto.id}
                                    instituicao={ponto.instituicao} 
                                    cep={ponto.cep} 
                                    tipos={ponto.tipo}
                                />
                            ))
                        )
                    }  
                    </div>

            </article>

            <article className={`${styles.article} container`}>
                <h2 className={styles.articleTitle}>A Redução da Poluição: Como a Reciclagem Contribui para um Mundo Mais Limpo</h2>
                <p className={styles.articleParagraph}>
                    A poluição é um dos maiores desafios ambientais do nosso tempo. Ela afeta a qualidade do ar, da água e do solo, impactando diretamente a saúde humana e a biodiversidade do planeta. No entanto, podemos reduzir significativamente a poluição ao adotar práticas sustentáveis como a reciclagem.
                </p>

                <h3 className={styles.subTitle}>Como a Reciclagem Contribui para a Redução da Poluição?</h3>
                <p className={styles.articleParagraph}>
                    A reciclagem é um dos principais caminhos para reduzir a poluição gerada pelo descarte inadequado de resíduos. Ao transformar materiais usados em novos produtos, diminuímos a quantidade de lixo enviado para os aterros sanitários e a poluição do solo e da água. Além disso, ao reciclar, evitamos a emissão de gases poluentes gerados pela produção de novos produtos a partir de matérias-primas virgens.
                </p>

                <h3 className={styles.subTitle}>Impactos Positivos da Reciclagem na Poluição do Ar, Solo e Água</h3>
             
                <ul className={styles.list}>
                    <li><strong>Redução da poluição do ar:</strong> A produção de novos produtos a partir de matérias-primas exige energia e gera poluição atmosférica. Reciclando materiais como metal, vidro e plástico, evitamos a emissão de gases nocivos e reduzimos a poluição do ar.</li>
                    <li><strong>Preservação do solo:</strong> O descarte incorreto de resíduos nos aterros sanitários pode levar ao contágio do solo por substâncias tóxicas. A reciclagem diminui a quantidade de lixo enviado para esses locais e preserva a saúde do solo.</li>
                    <li><strong>Proteção da água:</strong> A decomposição de resíduos sólidos em aterros pode liberar substâncias químicas que contaminam os corpos d'água. Ao reciclar, evitamos o impacto negativo sobre os rios, lagos e oceanos, ajudando a manter a água limpa e segura.</li>
                </ul>

                <h3 className={styles.subTitle}>O Impacto da Poluição no Meio Ambiente e na Saúde Humana</h3>
                <p className={styles.articleParagraph}>
                    A poluição afeta a nossa saúde e o equilíbrio do ecossistema. A exposição contínua a poluentes no ar pode levar a doenças respiratórias, cardiovasculares e até câncer. Além disso, a poluição da água compromete a qualidade dos alimentos e das fontes de água potável, resultando em escassez de recursos essenciais para a sobrevivência.
                </p>

                <h3 className={styles.subTitle}>O Papel de Cada Um na Luta Contra a Poluição</h3>
                <p className={styles.articleParagraph}>
                    Cada um de nós pode fazer a diferença! Ao separar corretamente os resíduos recicláveis, você contribui para a diminuição da poluição e ajuda a preservar o meio ambiente. É simples: adote a reciclagem no seu dia a dia e incentive outras pessoas a fazerem o mesmo. 
                </p>

                <p className={styles.articleParagraph}>
                    Não se trata apenas de uma ação ambiental, mas de um compromisso com as futuras gerações. Ao escolher reciclar, estamos construindo um planeta mais saudável, com menos poluição e mais qualidade de vida para todos.
                </p>

                <div className={styles.cta}>
                    <p className={styles.ctaText}>Junte-se a nós nessa luta contra a poluição! Ao descartar seus resíduos de maneira responsável, você está ajudando a construir um futuro mais limpo e sustentável.</p>
                    <Link to="/cadastroPonto" className={`${styles.ctaButton} btn btn-success`}>Cadastre um ponto de coleta</Link>
                </div>
            </article>

                 
        </>
    )
}

export default Pontos