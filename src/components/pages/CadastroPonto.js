import {Link} from 'react-router-dom'
import {useMask} from '@react-input/mask'
import { useState, useEffect } from 'react'
import axios from 'axios'
function CadastroPonto(){
    const user = JSON.parse(localStorage.getItem('User'))
    


    const [formData, setFormData] = useState({
        email : user.email,
        instituicao : "",
        cep : "",
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
                // console.log(JSON.stringify(data,null,2))

                document.getElementById('cidade').value = data.localidade
                document.getElementById('bairro').value = data.bairro
                document.getElementById('rua').value = data.logradouro

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

    function handleSubmit(e)
    {
        e.preventDefault()
        axios.post('http://localhost:3001/cadastrarPonto', formData)
        console.log(formData)
    }

    return(
        <>
        {user ? 
        (
            <>
                <form className='container my-5' onSubmit={handleSubmit}>
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
                            ref={cepMask} onChange={handleChange}
                        />
                        <label htmlFor='cep'>CEP</label>
                    </div>
                        <div className="row">
                            <div className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Cidade'
                                        id='cidade'
                                        readOnly onChange={handleChange}
                                    />
                                    <label htmlFor='cidade'>Cidade</label>
                                </div>
                            </div>
                            <div  className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Bairro'
                                        id='bairro'
                                        readOnly onChange={handleChange}
                                    />
                                    <label htmlFor='bairro'>bairro</label>
                                </div>
                            </div>
                            <div  className="col col-12 col-md-4">
                                <div className='form-floating mb-3'>
                                    <input
                                        type="text"
                                        className='form-control'
                                        placeholder='Rua'
                                        id='rua'
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
        </>
    )
}

export default CadastroPonto