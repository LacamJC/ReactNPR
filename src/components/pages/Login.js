import { Link } from "react-router-dom"
import {Toaster, toast} from 'react-hot-toast'
import { useState } from "react"
import axios from "axios"
import Loader from "../events/Loader"
import ServerStatus from "../events/ServerStatus"
function Login()
{
    const [user, setUser] = useState({
        nome : "",
        senha : ""
    })

    const [loading,  setLoading] = useState(false)

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
            await axios.post('http://localhost:3001/verifyUser', user)
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
                        setTimeout(()=>{
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


    return(<>
        <form className="w-50 mx-auto my-4" onSubmit={handleSubmit}>
            
            {loading ? <Loader/> : ""}
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

                    minLength="6"
                            maxLength="12"
                />
                <label htmlFor="senha">Senha</label>
            </div>
            <div className="form-check mb-3">
                        <input type="checkbox" id="ocultarSenha" className="form-check-input" onClick={handleClick}/>
                        <label htmlFor="ocultarSenha" className="form-check-label" readOnly>Mostrar Senha</label>
                    </div>

            <input type='submit' className="btn btn-success mb-3" value="Logar"></input>
            <ServerStatus/>
            <div className="form-text">
                <p>Não possui login ? Faça seu cadastro <Link to="/cadastro">Aqui !</Link></p>
            </div>
        </form>
        <Toaster/>
    </>)
}


export default Login