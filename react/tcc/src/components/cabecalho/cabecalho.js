import { ConteinerCabecalho } from "./styled"
import Pesquisa from "./Pesquisa/styled"

import { Link } from "react-router-dom"
import { useState } from "react"

export default function Cabecalho() {

    const [Pes, setPes] = useState(false);


async function a() {
    if(Pes === true) {
        setPes(false)
    }
}

    return(
        <ConteinerCabecalho>
            <div className = "ConteinerCabecalho">
                <div className = "conteudo">
                    <div className = "inicial"> <Link to = "/"> HOME </Link> </div>
<<<<<<< HEAD
=======

>>>>>>> 61daba99404dbed4010c0f5829f0e29ab6ac9acb
                    <div className = "sobre"> <Link to = "/sobre"> SOBRE NÓS </Link> </div>
                    <div className = "menu"><Link to = "/Produto"> MENU </Link> </div>


                    <div className = "menu"><Link to = "/Produtos"> MENU </Link> </div>

<<<<<<< HEAD
                </div>
=======

>>>>>>> 61daba99404dbed4010c0f5829f0e29ab6ac9acb
                 
                 <div className = "entrada">
                    <div className= "borda" > <Pesquisa /> </div>                
                    <div className = "imagem-lupa"> <Link to="/perfil"> <img src= "./assets/imagens/lupa1.svg" alt ="" width="100%" /> </Link></div>
                    <div class="barra"></div>
                    <div className = "imagem-login"> <Link to= "/Login"> <img src= "./assets/imagens/login.svg" alt ="" /> </Link> </div>
                    <div class="barra1"> </div>
                    <div className = "imagem-carrinho"> <Link to = "/Carrinho"> <img src= "./assets/imagens/mbricartadd_99553.svg" alt ="" /> </Link> </div>
                 </div>
  
                </div> 
            </div>     
        </ConteinerCabecalho>
    )
    
}