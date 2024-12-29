import { Link } from "react-router-dom"
function Login()
{
    return(<>
        <form className="w-50 mx-auto my-4">
            <h1 className="text-center mb-3">Login</h1>
            <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="nome" 
                    placeholder="Nome de usuario"
                />
                <label htmlFor="nome">Nome de usuario</label>
            </div>
            <div className="form-floating mb-3  ">
                <input 
                    type="password" 
                    className="form-control" 
                    id="senha" 
                    placeholder="Senha"
                />
                <label htmlFor="senha">Senha</label>
            </div>

            <input type='submit' className="btn btn-success mb-3" value="Logar"></input>
            <div className="form-text">
                <p>Não possui login ? Faça seu cadastro <Link to="/cadastro">Aqui !</Link></p>
            </div>
        </form>
    </>)
}


export default Login