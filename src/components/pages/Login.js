import { Link, useNavigate } from "react-router-dom"
import {Toaster, toast} from 'react-hot-toast'
import { useState, useEffect } from "react"
import styles from '../../scss/pages/Login.module.css'
import axios from "axios"
import Loader from "../events/Loader"
import ServerStatus from "../events/ServerStatus"
import url from '../../data/url.json'
import PasswordProps from "../events/PasswordProps"
function Login()
{
    const [user, setUser] = useState({
        nome : "",
        senha : ""
    })

    const [loading,  setLoading] = useState(false)

    const navigate = useNavigate()
    const notifyErro = (msg) => toast.error(msg)
    const notifySuccess = (msg) => toast.success(msg)

    const [showPassword, setShowPassword] = useState(false)

    function handleClick()
    {
        setShowPassword(!showPassword)
    }

    function handleChange(e){
        const {name, value } = e.target
    

        setUser({
            ...user,
            [name]: value
        })

        console.log(user)

    }

    async function handleSubmit(e){
        e.preventDefault()

        try{
            setLoading(true)
            await axios.post(`${url.url}/verifyUser`, user)
            .then(response=>{
                // console.log(response)
                const data = response.data
                setLoading(false)
                switch (data.message){
                    
                    case 'Usuario encontrado':
                        console.log("### Usuario encontrado")
                        notifySuccess(data.message)
                        document.getElementById('senha').classList.remove('border-danger')
                        
                        const usuario = data.data 
                        // console.log(usuario)

                        localStorage.setItem('User', usuario)
                        console.log(localStorage.getItem('User'))
                        setLoading(true)
                        setTimeout(()=>{
                            navigate('/')
                            window.location.reload()
                        }, 2000)
                        break
                    case 'Usuario nao encontrado':
                        console.log("### Usuario nao encontrado")
                        document.getElementById('senha').value = ""
                        document.getElementById('senha').classList.add('border-danger')
                        notifyErro(data.message)
                        break;
                    default:
                        console.log("Algum erro aconteceu")
                        notifyErro('Desculpe estamos com alguns problemas')
                }

                
            })
            .catch(err=>{
                console.log("erro to fetch" + err)
                notifyErro('Sem comunicação com o servidor')
                setLoading(false)
            })
        }catch(err){
            console.log("Erro ao tentar se comuicar com servidor")
            setLoading(false)
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])

    return(<>
    {loading ? <Loader/> : ""}
    {/* <Loader/> */}
        <form className={`${styles.formulario} `} onSubmit={handleSubmit}>
            
            
            <h1 className="text-center mb-3">Login</h1>
            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating mb-3  ">
                <input 
                    type={showPassword ? "text" : "password"} 
                    className="form-control" 
                    id="senha" 
                    name="senha"
                    onChange={handleChange}
                    placeholder="Senha"
                    required
                    minLength="6"
                    maxLength="12"
                />
                <label htmlFor="senha">Senha</label>
            </div>
            <PasswordProps/>
            <div className="form-check mb-3">
                        <input 
                            type="checkbox" 
                            id="ocultarSenha" 
                            className="form-check-input" 
                            onClick={handleClick}
                            
                        />
                        <label htmlFor="ocultarSenha" className="form-check-label" readOnly>Mostrar Senha</label>
                    </div>

            <div className="row">
                <div className="col col-12 col-md-4"><input type='submit' className="btn btn-success mb-3 w-100" value="Logar"/></div>
                <div className="form-text col col-12 col-md-8">
                    <p>Não possui login ? Faça seu cadastro <Link to="/cadastro">Aqui !</Link></p>
                </div>
            </div>
            <ServerStatus/>
        </form>
        <Toaster/>
    </>)
}


export default Login