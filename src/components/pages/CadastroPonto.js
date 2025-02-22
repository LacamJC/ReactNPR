import {Link} from 'react-router-dom'
import {useMask} from '@react-input/mask'
import { useState, useEffect } from 'react'
import {Toaster, toast} from 'react-hot-toast'
import axios from 'axios'
import styles from '../../scss/pages/CadastroPonto.module.css'
import ServerStatus from '../events/ServerStatus'
import url from '../../data/url.json'
function CadastroPonto(){
    const user = JSON.parse(localStorage.getItem('User'))
    
    const notifySuccess = (msg) => toast.success(msg)
    const notifyError = (msg) => toast.error(msg)
    const [formData, setFormData] = useState({
        email : "",
        instituicao : "",
        cep : "",
        cidade : "",
        bairro: "",
        rua: "",
        foto: null,
        descricao: "",
        tipo: []
    })

    const[erro, setErro] = useState({
        status: false,
        message: ""
    })

    const cepMask = useMask({
        mask:'_____-___',
        replacement: {_: /\d/}
    })

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])


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
                        email : user.email,
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
        console.log(e.target.value)
        

        setFormData({
            ...formData,
            [name] : value
        })
    }

    function handleImageChange(e){
        setFormData({...formData, foto : e.target.files[0]})
    }

    function handleCheckboxChange(e){
        const {value, checked} = e.target
        const update = [...formData.tipo]

        if (checked) {
            update.push(value);
          } else {
            const index = update.indexOf(value);
            if (index !== -1) {
              update.splice(index, 1);
            }
          }

          setFormData({
            ...formData,
            tipo: update,
          });

    }

    async function handleSubmit(e)
    {
        e.preventDefault()
        
        console.log(formData)
        if(erro.status)
        {
            console.log("IMPOSSIVEL")
            notifyError(erro.message)
        }else{
            try{
                await axios.post(`${url.url}/cadastrarPonto`, formData)
                .then(response=>{
                    console.log(response)
                    notifySuccess('Dados enviados com sucesso')
                    
                })
                .catch(err=>{
                    console.log("ERRO TO FETCH> " + err)
                })
            }catch(err){
                console.log(err)
            }
            
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

                        {/* <div class="mb-3">
                        <label htmlFor="formFile" className="form-label">
                        Selecione uma foto para o perfil</label>
                        
                        <input type="file" name="foto" id="foto" onChange={handleImageChange} placeholder='Em Desenvolvimento...' class="form-control"/>
                    </div> */}
                        
                        <h3 className={`mb-3`}>Tipo de Coleta</h3>
                        <div className="btn-group mb-3" role="group">
                            
                            <input 
                                type="checkbox" 
                                className="btn-check tiposCol" 
                                id="eletronico" 
                                onChange={handleCheckboxChange}
                                value="eletronico"
                                />
                            <label className="btn btn-outline-success" htmlFor="eletronico">Eletrônico</label>

                            <input 
                                type="checkbox" 
                                className="btn-check tiposCol" 
                                id="reciclavel" 
                                onChange={handleCheckboxChange}
                                value="reciclavel"
                                />
                            <label className="btn btn-outline-success" htmlFor="reciclavel">Reciclável</label>

                            <input 
                                type="checkbox" 
                                className="btn-check tiposCol" 
                                id="organico" 
                                onChange={handleCheckboxChange}
                                value="organico"
                                />
                            <label className="btn btn-outline-success" htmlFor="organico">Orgânico</label>

                            <input 
                                type="checkbox" 
                                className="btn-check tiposCol" 
                                id="oleo" 
                                onChange={handleCheckboxChange}
                                value="oleo"
                                />
                            <label className="btn btn-outline-success" htmlFor="oleo">Oléo</label>
                        </div>
                        <ServerStatus/>
                        <input type="submit" value="Cadastrar" className="btn btn- btn-success mb-3 w-50 mx-auto"/> 
                </form>
            </>
        ): 
            (
                <div className='alert alert-warning'>
                    Para acessar o formulario de cadastro de pontos é necessario estar logado, faça <Link to='/login'>Login</Link>
                </div>
            )
        }

        <Toaster/>
        </>
    )
}

export default CadastroPonto