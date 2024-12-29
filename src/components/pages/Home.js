import logo from '../../img/logosimp.svg'
import styles from '../../scss/pages/Home.module.css'
import FuncaoSite from '../FuncaoSite'
import IconeCaminhao from '../../img/caminhao.png'
import IconeReciclagem from '../../img/reciclagem.jpg'
import { Link } from 'react-router-dom'
function Home(){
    return(
        <div className={`container m-auto`}>
            <main className={`row w-100  bg-wardning ${styles.main} `}>
                <div className={`col col-12 col-md-8 ${styles.main_FirstDiv}`}>
                    <h1 className={styles.main__title}>Natureza Prioridade Renovada</h1>
                    <p className={styles.main__paragraph}>
                        Nós, da NPR, estamos empenhados em contribuir para o combate ao descarte irregular de resíduos em nossa cidade. Oferecemos pontos de coleta estrategicamente localizados, um mapa informativo que destaca esses pontos e uma ampla quantidade de informações sobre práticas sustentáveis. Acreditamos que, juntos, podemos fazer a diferença e ajudar a preservar o meio ambiente.
                    </p>
                </div>
                <div className={`col col-12 col-md-4`}>
                    <img src={logo} className={styles.main__logo} />
                    {/* aspdoksapodkkopasdopkaokdopkodksap */}
                </div>
            </main>

            <article className={`${styles.lista_funcao}  w-100 bg-gdanger`}>
                <FuncaoSite 
                    nome_funcao="Nosso Mapa"
                    icone={`${IconeCaminhao}`}
                    texto="Explore nosso mapa de Pontos Oficiais, onde você encontrará informações sobre todos os locais ativos atualmente. Descubra a localização exata de cada ponto e o tipo específico de coleta que eles oferecem."
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
                <div className={`col col-12 col-md-6`}></div>
            </article>
            
        </div>
    )
}

export default Home