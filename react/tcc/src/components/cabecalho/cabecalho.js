import { ConteinerCabecalho } from "./styled"


import { Link } from "react-router-dom"

export default function Cabecalho() {
    return(
        <ConteinerCabecalho>
            <div className = "ConteinerCabecalho">
                <div className = "conteudo">
                    <div className = "inicial"> <Link to = "/"> HOME </Link> </div>
                    <div className = "sobre"> <Link to = "/sobre"> SOBRE NÓS </Link> </div>
                    <div className = "menu"><Link to = "/Produto"> MENU </Link> </div>
                </div>
                 
                 <div className = "entrada">
                    <div className = "barra"> <img src="./assets/imagens/Rectangle 1142.svg" alt="" /> </div>
                    <div className = "imagem-lupa"> <Link to="/perfil"> <img src= "./assets/imagens/lupa1.svg" alt ="" /> </Link></div>
                    <div className = "barra"> <img src="./assets/imagens/Rectangle 1142.svg" alt="" />  </div>
                    <div className = "imagem-login"> <Link to= "/Login"> <img src= "./assets/imagens/login.svg" alt ="" /> </Link> </div>
                    <div className = "barra"> <img src="./assets/imagens/Rectangle 1142.svg" alt="" />  </div>
                    <div className = "imagem-carrinho"> <Link to = "/Carrinho"> <img src= "./assets/imagens/mbricartadd_99553.svg" alt ="" /> </Link> </div>

                 </div>


            
        
  
            </div>
        
        </ConteinerCabecalho>
    )
    
}