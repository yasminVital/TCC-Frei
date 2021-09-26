import { ConteinerCabecalho } from "./styled"




export default function Cabecalho() {
    return(
        <ConteinerCabecalho>

            <div className = "ConteinerCabecalho">

                <div className = "conteudo">
                <div className = "inicial"> HOME </div>
                <div className = "sobre"> SOBRE NÓS </div>
                <div className = "menu"> MENU </div>
                </div>
                 

                 <div className = "entrada">
                    <div className = "barra"> </div>
                    <div className = "imagem-lupa"> <img src= "./assets/imagens/lupa1.svg" alt ="" /> </div>
                    <div className = "barra"> </div>
                    <div className = "imagem-login"> <img src= "./assets/imagens/login.svg" alt ="" /> </div>
                    <div className = "barra"> </div>
                    <div className = "imagem-carrinho"> <img src= "./assets/imagens/carrinho.svg" alt ="" /> </div>
                 </div>
                    

            
        
  
            </div>
        

        </ConteinerCabecalho>
    )
    
}