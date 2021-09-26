

import { ConteinerLogin } from "./styled"
import { Link } from "react-router-dom"
import Cabecalho from '../../components/cabecalho/cabecalho'




export default function Login() {

    return (
        <ConteinerLogin>
            <div className = "conteinerimg"> 
            <Cabecalho/>
            <div className = "ConteinerLogin">
                <div className  = "Login">
                <div className = "logo"><img src = "./assets/imagens/img FREI.svg " alt = "" /> </div>

                <div className = "titulo">
                <div className = "Bemvindo"> Seja Bem-vindo </div>
                <div className  = "logar"> Login </div>
                </div>

               <div className = "inputs">
                 <div className  = "email"> <input type = "email"  placeholder= "Digite seu email"/>  </div>
                 <div className  = "senha"> <input type = "password" placeholder = "Digite sua senha"/></div>
                </div>

                 <div className = "botão"> <button> Entra </button> </div>

             <div className = "func-para-cadastro">
                 <div className = "Esqueceu"> Esqueceu a senha? <span> clique aqui </span></div>
                 <div className = "cria"> <a> <Link  to = "/Cadastra">  Criar conta um conta  </Link> </a>  </div> 

                </div>
       
             </div>

            </div>
            </div>



        </ConteinerLogin>
       
    )
}