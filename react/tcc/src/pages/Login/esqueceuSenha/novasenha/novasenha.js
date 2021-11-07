import { Conteinernovasenha } from "./styled"
import { Link } from "react-router-dom"


export default function novasenha() {

    return (
        <Conteinernovasenha>
            <div className = "Conteinernovasenha">
                <div className  = "Login">

                <div className = "titulo">
                <div className  = "logar"> Esqueceu a senha </div>
                </div>

               <div className = "inputs">
               <div className  = "email"> <input type = "email"  placeholder= "Digite seu email"/>  </div>
               <div className  = "senhanova"> <input type = "password"  placeholder= "Digite sua nova senha"/>  </div>
               <div className  = "confsenha"> <input type = "password" placeholder = "Confirme sua senha"/></div>
                </div>

                 
                 <div className = "botão"> <Link  to = "/"> <button> Alterar </button>  </Link> </div>

                </div>
       
             </div>

            



        </Conteinernovasenha>
       
    )
}
