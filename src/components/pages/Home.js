import logo from '../../img/logosimp.svg'
import styles from '../../scss/pages/Home.module.css'
import FuncaoSite from '../FuncaoSite'
import IconeCaminhao from '../../img/caminhao.png'
import IconeReciclagem from '../../img/reciclagem.jpg'
import img_mapa from '../../img/assets/home/mapa.JPG'
import { Link } from 'react-router-dom'
import Loader from '../events/Loader'
import { useEffect } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from "react-chartjs-2"
function Home(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

      const openTab = () =>{
        window.open(img_mapa, "_blank")
      }

      ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: ['Descarte incorreto', 'Reciclado corretamente', 'resíduos que não podem ser reciclados'],
        datasets: [
          {
            label: '%',
            data: [50, 30, 20],
            backgroundColor: [
              'rgba(255, 0, 55, 0.49)',
              'rgba(92, 184, 92, 0.48)',
              'rgba(97, 97, 97, 0.53)',
            //   'rgba(75, 192, 192, 0.2)',
            //   'rgba(153, 102, 255, 0.2)',
            //   'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 0, 55, 0.49)',
              'rgba(92, 184, 92, 0.48)',
              'rgba(97, 97, 97, 0.53)',
            //   'rgb(0, 255, 42)',
            //   'rgba(153, 102, 255, 1)',
            //   'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <>
        <div className={`container m-auto`}>
            <main className={`row w-100  bg-wardning ${styles.main} `}>
                <div className={`col col-12 col-md-8 ${styles.main_FirstDiv}`}>
                    <h1 className={styles.main__title}>dNatureza Prioridade Renovada</h1>
                    <p className={styles.main__paragraph}>
                        Nós, da NPR, estamos empenhados em contribuir para o combate ao descarte irregular de resíduos em nossa cidade. Oferecemos pontos de coleta estrategicamente localizados, um mapa informativo que destaca esses pontos e uma ampla quantidade de informações sobre práticas sustentáveis. Acreditamos que, juntos, podemos fazer a diferença e ajudar a preservar o meio ambiente.
                    </p>
                </div>
                <div className={`col col-12 col-md-4`}>
                    <img src={logo} className={styles.main__logo} />
                    {/* aspdoksapodkkopasdopkaokdopkodksap */}
                </div>
            </main>
            

            <article className={`${styles.artigo}`}>
                <div class="row">
                    <div class="col col-12 col-md-8 mb-5">
                        <h2>Reciclar é cuidar do futuro</h2>
                        <p className={`${styles.paragraph}`}>
                            Você sabia que mais de 30% do lixo produzido no Brasil poderia ser reciclado? A reciclagem não é apenas uma atitude inteligente, mas essencial para a preservação do nosso planeta. Ao separar corretamente os materiais e dar uma nova vida a eles, estamos economizando recursos naturais, reduzindo a poluição e evitando o acúmulo de resíduos.
                        </p>
                        <p className={`${styles.paragraph}`}>
                            Cada gesto conta! Desde pequenas ações diárias, como separar plásticos, papéis e vidros, até a adesão a hábitos mais sustentáveis, você pode fazer a diferença. Vamos juntos transformar o lixo em oportunidade, criando um futuro mais verde e limpo para as próximas gerações.
                        </p>
                        <div className={`${styles.cta}`}>
                            Junte-se a nós nesta jornada de conscientização e mudança!
                        </div>
                    </div>
                    <div class="col col-12 col-md-4 mb-5">
                        <h2>Descarte de residuos em 2024</h2>
                        <p className={`${styles.paragraph__sub}`}>Em 2023, o Brasil gerou aproximadamente 80 milhões de toneladas de lixo. Para 2024, a projeção é um valor similar, com um aumento estimado por conta do crescimento populacional e aumento no consumo.</p>
                        <Doughnut data={data} options={{ responsive: true }} width={'400'} height={'200'}/>
                        <ul className={`${styles.listGraph}`}>
                            <li>Fonte</li>
                            <li>BGE (Instituto Brasileiro de Geografia e Estatística)</li>
                            <li>ABRELPE (Associação Brasileira de Empresas de Limpeza Pública e Resíduos Especiais)</li>
                            <li>Ministério do Meio Ambiente (MMA)</li>
                        </ul>
                    </div>
                </div>
            </article>

            

            <article className={`${styles.artigo}`}>
                <h2 className="text-start px-3">Nosso Mapa</h2>
                <div className="row">
                    <div className="col col-12 col-md-8">
                        <p className={`${styles.paragraph}`}>
                            O mapa de pontos de coleta recicláveis mostra onde você pode deixar materiais como papel, plástico, vidro e metal para serem reciclados. Ele ajuda as pessoas a encontrarem os lugares mais próximos para descartar seus recicláveis de forma correta, ajudando a diminuir o lixo e a proteger o meio ambiente. Com esse mapa, fica mais fácil contribuir para um planeta mais limpo e sustentável.
                        </p>
                    </div>
                    <div className="col col-12 col-md-4">
                        
                        
                       
                        <div className={styles.div_img}>
                            <img src={img_mapa}  width={`100%`} onClick={openTab}/>
                            <div className={styles.div_img__text}>
                                <p>Clique para ir para o mapa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            
            <article className={`${styles.artigo}`}>
                <div class="row">
                <div className={`${styles.centralizar} col col-12 col-md-4 mb-3`}>
                        <img className="" src="https://cdn.pixabay.com/photo/2014/03/24/13/50/tree-294552_960_720.png" width={"80%"}/>
                    </div>
                    <div class="col col-12 col-md-8">
                        
                <h2 className='text-start px-3 mb-3'>Pontos de Coleta</h2>
                        <p className={styles.paragraph}>
                            Em nosso site, temos uma área dedicada aos Pontos de Coleta para facilitar o descarte correto de materiais recicláveis. Nessa seção, você encontrará informações sobre os locais mais próximos para deixar itens como papel, plástico, vidro e metal, ajudando a contribuir para a preservação do meio ambiente.
                        </p>
                        <p className={styles.paragraph}>
                            Com apenas alguns cliques, você pode localizar pontos de coleta em sua cidade ou região, garantindo que seus materiais sejam reciclados de forma eficiente e responsável. Nossa missão é incentivar todos a adotarem hábitos sustentáveis, e com essa ferramenta, fica mais fácil dar o destino correto aos resíduos.
                        </p>
                        <Link to="/mapa" className={`btn btn-success btn-lg ${styles.paragraph} text-light my-5`}>Veja nossos pontos de coleta</Link>
                    </div>
                    
                </div>
            </article>
            <article className={`${styles.lista_funcao}  w-100 bg-gdanger`}>
                <FuncaoSite 
                    nome_funcao="Nosso Mapa"
                    icone={`${IconeCaminhao}`}
                    texto="Explore nosso mapa de Pontos Oficiais, onde você encontrará informações sobre todos os locais ativos atualmente. "
                    link="mapa"
                    text_link="Ir para mapa"
                />

                <FuncaoSite 
                    nome_funcao="Faça seu cadastro"
                    icone={`${IconeReciclagem}`}
                    texto="Se você deseja contribuir enviando pontos de coleta para a análise, basta se cadastrar no nosso sistema. O processo é rápido !"
                    link="cadastro"
                    text_link="Cadastre-se"
                />

                <FuncaoSite
                    nome_funcao="Pontos de Coleta"
                    icone={`${IconeReciclagem}`}
                    texto="Nos ajude a contribuir para o combate ao descarte irregular, faça o cadastro de um ponto de coleta !"
                    link="pontos"
                    text_link="Pontos de Coleta"
                    
                />
                <div className={`col col-12 col-md-6`}></div>
            </article>
        </div>
        </>
    )
}

export default Home