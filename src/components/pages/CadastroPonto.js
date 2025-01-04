import {Link} from 'react-router-dom'
import {useMask} from '@react-input/mask'
import { useState, useEffect } from 'react'
import {Toaster, toast} from 'react-hot-toast'
import axios from 'axios'
import styles from '../../scss/pages/CadastroPonto.module.css'
function CadastroPonto(){
    const user = JSON.parse(localStorage.getItem('User'))
    
    const notifySuccess = (msg) => toast.success(msg)
    const notifyError = (msg) => toast.error(msg)
    const [formData, setFormData] = useState({
        email : user.email,
        instituicao : "",
        cep : "",
        cidade : "",
        bairro: "",
        rua: "",
        foto: "",
        descricao: "",
        tipo: ""
    })

    const[erro, setErro] = useState({
        status: false,
        message: ""
    })

    const cepMask = useMask({
        mask:'_____-___',
        replacement: {_: /\d/}
    })

    async function axiosCep(){
        console.log("PUXANDO DADOS DO CU")
        var cep = document.getElementById('cep').value 
        cep = cep.replace('-','')
        try{
            await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response=>{
                const data = response.data 
                const inputs = document.getElementsByClassName('cepInput')
                if(data.erro)
                {
                    setErro({
                        ...erro,
                        status : true,
                        message: 'Erro ao puxar dados do cep'
                    })
                    notifyError(erro.message)
                    for(let i=0; i < inputs.length; i++)
                    {
                        inputs[i].classList.add('border-danger')
                        inputs[i].value = ''
                        inputs[i].classList.remove('border-success')
                        
                    }
                }else{
                    setErro({
                        ...erro,
                        status : false,
                    })
                    for(let i=0; i < inputs.length; i++)
                    {
                        inputs[i].classList.add('border-success')
                        inputs[i].classList.remove('border-danger')
                    }
                    console.log(JSON.stringify(data,null,2))
                    // console.log(`ESSE E ERRO: ${data.erro}`)
                    console.log(data.erro)
                    document.getElementById('cidade').value = data.localidade
                    document.getElementById('bairro').value = data.bairro
                    document.getElementById('rua').value = data.logradouro

                    setFormData({
                        ...formData,
                        cidade : data.localidade,
                        bairro : data.bairro,
                        rua : data.logradouro
                        
                    })
                }
                

            })
            .catch(err=>{
                console.log("Erro ao fazer requisição: "+err)
            })
        }catch(err){
            console.log("Erro to fetch: "+err)
        }    
    }

    function handleChange(e){
        const {name, value} = e.target

        

        setFormData({
            ...formData,
            [name] : value
        })
    }

    async function handleSubmit(e)
    {
        e.preventDefault()


        console.log(erro)
        
        if(erro.status)
        {
            console.log("IMPOSSIVEL")
            notifyError(erro.message)
        }else{
            await axios.post('http://localhost:3001/cadastrarPonto', formData)
            .then(response=>{
                notifySuccess('Dados enviados com sucesso')
                
            })
            .catch(err=>{
                console.log("ERRO TO FETCH> " + err)
            })
        }
       
        
    }

    return(
        <>
        {user ? 
        (
            <>
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                    <h1 className='mb-3'>Cadastro de Pontos de Coleta</h1>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" readOnly value={user.email}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Instituição' 
                            id="instituicao" 
                            name='instituicao'
                            required
                            onChange={handleChange}/>
                        <label htmlFor='instituicao'>Instituição</label>
                        <div className='form-text'>
                            <p>
                                Coloque o nome da instuição ou empresa onde será localizado o ponto
                            </p>
                        </div>
                    </div>
                    <div className='form-floating mb-3'>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='CEP'
                            id='cep'
                            name='cep'
                            onBlur={axiosCep}
                            required
                            ref={cepMask} onChange={handleChange}
                        />
                        <label htmlFor='cep'>CEP</label>
                    </div>
                        <div className="row">
                            <div className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control cepInput'
                                        placeholder='Cidade'
                                        id='cidade'
                                        readOnly 
                                        required
                                        onChange={handleChange}
                                    />
                                    <label htmlFor='cidade'>Cidade</label>
                                </div>
                            </div>
                            <div  className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control cepInput'
                                        placeholder='Bairro'
                                        id='bairro'
                                        required
                                        readOnly onChange={handleChange}
                                    />
                                    <label htmlFor='bairro'>bairro</label>
                                </div>
                            </div>
                            <div  className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control cepInput'
                                        placeholder='Rua'
                                        id='rua'
                                        required
                                        readOnly onChange={handleChange}
                                    />
                                    <label htmlFor='rua'>Rua</label>
                                </div>
                            </div>
                        </div>

                        <input type="submit" value="enviar" className="btn btn-success"/>   
                </form>
            </>
        ): 
            (
                <div className='alert alert-warning'>
                    Para acessar o formulario de cadastro de pontos é necessario estar logado, faça <Link>Login</Link>
                </div>
            )
        }

        <Toaster/>
        </>
    )
}

export default CadastroPonto