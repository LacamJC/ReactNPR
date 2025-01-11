
import axios from 'axios'
import {useState, useEffect} from 'react'
import url from '../../data/url.json'
function ServerStatus(){
    const [server, setServer] = useState(true)
    async function ping()
    {
        
        try{
            // console.log("verificando serivdor")
            localStorage.removeItem('serverStatus')
            await axios.get(`${url.url}/ping`)
            .then(response=>{
                // O servidor esta ativo
                
                setServer(true)
                // console.log("O SERVIDOR ESTA ATIVO")
            })
            .catch(err=>{
                // Erro ao se comunicar com o servidor
                if (err.response && err.response.status === 500) {
                    console.error('Erro interno no servidor');
                    setServer(false)
                  } else if (err.code === 'ECONNREFUSED') {
                    console.error('Conexão com o servidor recusada');
                    setServer(false)
                  } else {
                    console.error('Erro desconhecido:', err);
                    setServer(false)
                  }

                
            })
            
        }catch(err){
            // O servidor está desligado
            // console.log("O servidor está desligado")
            console.log(err)
            setServer(false)
        }
    }

    useEffect(()=>{
        // console.log("TESTE TESTE")
        ping()

        setInterval(ping, 10000)
    },[])

    return(
        <>
             
             {!server && (
                <div className='alert alert-danger'>Servidor desligado: Algumas funções que necessitam comunicação com o servidor estarão desabilitadas.</div>
             )}
        </>
    )
}

export default ServerStatus