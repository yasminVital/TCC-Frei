
import { ConteinerCadastro } from "./styled"



export default function Cadastro() {
    return(
        <ConteinerCadastro>
            <div className = "titulo">ADICIONAR PRODUTO</div>


            <div className = "inputs">

                <div className = "conteinerinput">
                    <div className = "label">CÓDIGO INTERNO</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>


                <div className = "conteinerinput">
                    <div className = "label">NOME DO PRODUTO</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>

                <div className = "conteinerinput">
                    <div className = "label">NOME DO PRODUTO</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>


                <div className = "conteinerinput">
                    <div className = "label">CATEGORIA</div>
                     <select name = "Categorias">
                         <option value = "Favoritos">Favoritos da Casa</option>
                         <option value = "Salgado">Salgados</option>
                         <option value = "Doce">Doces</option>
                         <option value = "Bebida">Bebidas</option>
                    </select>
                </div>

                <div className = "conteinerinput">
                    <div className = "label">VALOR</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE MÍNIMO</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>
              

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE MAXIMO</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>
              

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE ATUAL</div>
                     <div className = "input-text"><input type = "text"/></div>
                </div>

                <div className = "conteinerarea">
                    <div className = "label"> DESCRIÇÃO DO PRODUTO </div>
                    <textarea className = "Descrição"></textarea>
                </div>
              
            
            </div>

                             

       



        </ConteinerCadastro>
    )
    
}