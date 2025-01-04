import { useState, useEffect } from "react"
import { useMask  } from '@react-input/mask'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import Loader from "../events/Loader"
function Cadastro(){

    const[ShowPassword, setShowPassword] = useState(false)
    const[erroMessage, setErroMessage] = useState('')
    const[erro, setErro] = useState(false)
    const[loading, setLoading] = useState(false)

    const notifyErro = (msg) => toast.error(msg)
    const notifySuccess = (msg) => toast.success(msg)
    const [usuario, setUsuario] = useState({
        nome :  '',
        email: '',
        telefone: '',
        senha : '',
        confirmaSenha : '' 
    })

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])


    const BrazilPhoneMask = useMask({
        mask: '(__) _____-____',
        replacement: { _: /\d/ }}
    )

    function handleChange(e){
        const {name, value} = e.target

        setUsuario({
            ...usuario,
            [name]: value
        })

        // console.log(usuario)
    }

    function handleClick(){
        setShowPassword(!ShowPassword)
    }

    async function handleSubmit(e){
        e.preventDefault()

        // console.log(usuario)

        if(usuario.senha !== usuario.confirmaSenha)
        {
            notifyErro('Senhas não conferem')
            document.getElementById('senha').classList.add('border-danger')
            document.getElementById('confirmaSenha').classList.add('border-danger')
            setErro(true)
            setLoading(false)
           
        }else{
            document.getElementById('senha').classList.remove('border-danger')
            document.getElementById('confirmaSenha').classList.remove('border-danger')
            setErro(false)
            
            try{
                setLoading(true)
                await axios.post('http://localhost:3001/cadUser', usuario)
                .then(response=>{
                    const data = response.data
                    const status = response.status 
                    setLoading(false)
                    if(status != 201)
                    {
                        console.log(data.message)
                        notifyErro(data.message)
                    }else{
                        notifySuccess(data.message)
    
                        
                    }
                }
                    
                )
                
                .catch(err=>{
                    console.log(`Erro ao cadastrar usuario: ${err}`)
                    notifyErro('Sem comunicação com o servidor')
                    setLoading(false)
                })
                
            }catch(err)
            {
                console.log('ERRO TO AXIOS:' +err)
                notifyErro('Sem comunicação com o servidor')
                setLoading(false)
            }
        }
    
        

        

           
    }

    return(
        <>
            <h1 className={`text-center`}>Preencha seus dados</h1>
            {loading ? <Loader/> : ""}
            <form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
                <div className="form-floating mb-3 ">
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nome" 
                        name="nome"
                        placeholder="John Doe"
                        onChange={handleChange}
                        required   
                          
                    />
                    <label htmlFor="floatingInput">Nome de Usuário</label>
                </div>   
                <div className="form-floating mb-3">
                    <input 
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="johnDoe@gmail.com"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="floatingInput">Email</label>
                </div> 
                <div className="form-floating mb-3 ">
                    <input 
                        type="text"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        placeholder="(11) 98294-948"
                        minLength='15'
                        required
                        onChange={handleChange}
                        ref={BrazilPhoneMask}
                    />
                    <label htmlFor="floatingInput">Número de telefone</label>
                    </div>
                <div className="row">
                    <div class="col col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                type={ShowPassword ? "text" : "password"}
                                className="form-control"
                                id="senha"
                                name="senha"
                                required
                        
                                minLength="6"
                                maxLength="12"
                                placeholder=""
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Senha</label>
                        </div>
                    </div>
                    <div class="col col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input
                                type={ShowPassword ? "text" : "password"}
                                className="form-control"
                                id="confirmaSenha"
                                name="confirmaSenha"
                                placeholder=""
                                required
                                minLength="6"
                                maxLength="12"
                                onChange={handleChange}
                            />
                            <label htmlFor="floatingInput">Confirme a senha</label>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input type="checkbox" id="ocultarSenha" className="form-check-input" onClick={handleClick}/>
                        <label htmlFor="ocultarSenha" className="form-check-label" readOnly>Mostrar Senha</label>
                    </div>
                </div>
                
                <input type="submit" value="Cadastrar" className="btn btn-success mb-3 mx-3"/>
                <input type="reset" value="Cancelar" className="btn btn-danger mb-3 mx-3"/>
            </form>
            <Toaster/>
        </>
    )
}

export default Cadastro
