
import {ConteinerAdmBar} from "./styled"


export default function ListaOpt() {
    return (
        <ConteinerAdmBar>
            <div className = "conteinerBar">
            <div className = "logo2"><img src = "./assets/imagens/logo1.png" alt = ""/> </div>

            <div className = "espaço"> </div>


            <div className = "botõesBar">
             <div className = "botão1"> 
                <div className = "barra"> </div>
                <div className = "gerenciamento"> Gerenciador de Produto </div>
            </div>
         
            <div className = "botão1"> 
                <div className = "barra"> </div>
                <div className = "gerenciamento">Gerenciador de Pedidos  </div>
            </div>

            <div className = "botão1"> 
                <div className = "barra"> </div>
                <div className = "gerenciamento">Adicionar  Produtos  </div>
            </div>
            </div>  
         </div>     

        </ConteinerAdmBar>

    )
    
}
