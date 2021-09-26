

import { ConteinerLogin } from "./styled"
import Cabecalho from '../../components/cabecalho/cabecalho'




export default function Login() {

    return (
        <ConteinerLogin>
            <div className = "conteinerimg"> 
            <Cabecalho/>
            <div className = "ConteinerLogin">
                <div className  = "Login">
                <div className = "logo"><img src = "./assets/imagens/img FREI.svg " alt = "" /> </div>


                <div className = "Bem vindo"> Seja Bem-vindo </div>
                <div className  = "logar"> Login </div>

                 
                 <div className  = "email"> <input type = "email"  placeholder= "Digite seu email"/>  </div>
                 <div className  = "senha"> <input type = "password" placeholder = "Digite sua senha"/></div>


                 <div className = "botão"> <button> Entra </button> </div>
                 <div className = "Esqueceu"> Esqueceu a senha? <span> clique aqui </span></div>
                 <div className = "cria"> Criar conta um conta </div>

       
             </div>

            </div>
            </div>



        </ConteinerLogin>
       
    )
}