import { ConteinerCabecalho } from "./styled"
import { Link } from "react-router-dom"




export default function Cabecalho() {
    return(
        <ConteinerCabecalho>

            <div className = "ConteinerCabecalho">

                <div className = "conteudo">
                <div className = "inicial"> <Link to = "/"> HOME </Link> </div>
                <div className = "sobre"> SOBRE NÓS </div>
                <div className = "menu"><Link to = "/Produto"> MENU </Link> </div>
                </div>
                 

                 <div className = "entrada">
                    <div className = "barra"> </div>
                    <div className = "imagem-lupa"> <img src= "./assets/imagens/lupa1.svg" alt ="" /> </div>
                    <div className = "barra"> </div>
                    <div className = "imagem-login"> <Link to= "/Login"> <img src= "./assets/imagens/login.svg" alt ="" /> </Link> </div>
                    <div className = "barra"> </div>
                    <div className = "imagem-carrinho"> <img src= "./assets/imagens/mbricartadd_99553.svg" alt ="" /> </div>
                 </div>
                    

            
        
  
            </div>
        

        </ConteinerCabecalho>
    )
    
}