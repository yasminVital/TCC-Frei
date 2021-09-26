

import { ConteinerLogin } from "./styled"
import Cabecalho from '../../components/cabecalho/cabecalho'




export default function Login() {

    return (
        <ConteinerLogin>
            <Cabecalho/>
             
            <div className = "ConteinerLogin">
                <div className  = "Login">
                <div className = "logo"><img src = "./assets/imagens/img FREI.svg " alt = "" /> </div>


                <div className = "Bem vindo"> Seja Bem-vindo </div>
                <div className  = "logar"> Login </div>

                 
                 <div className  = "email"> <input type = "email" > </input> </div>
                 <div className  = "senha"> <input > </input> </div>

                




             </div>

            </div>



        </ConteinerLogin>
       
    )
}