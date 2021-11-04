
import { ConteinerCadastro } from "./styled"
import OptLista from "../../../components/BarOption/index"

import { useState, useEffect } from "react";

import Api from "../../../services/api"
const api = new Api(); 



export default function Cadastro() {



    
    return(
  
        <ConteinerCadastro>
       
            <div className = "conteinercadastro">
            <OptLista/>
           <div className = "conteiner-cadastro">
            <div className = "titulo">ADICIONAR PRODUTO</div>


            <div className = "inputs">
                 <div className = "InfoProduto">
                <div className = "conteinerinput">
                    <div className = "label">CÓDIGO INTERNO</div>
                     <div className = "input-text"><input className = "dsProduto" type = "text"/></div>
                </div>


                <div className = "conteinerinput">
                    <div className = "label">NOME DO PRODUTO</div>
                     <div className = "input-text"><input className = "dsProduto" type = "text"/></div>
                </div>

              

                <div className = "conteinerinput">
                    <div className = "label">CATEGORIA</div>
                     <select name = "input-Categorias">
                         <option value = ""> </option>
                         <option value = "Favoritos">Favoritos da Casa</option>
                         <option value = "Salgado">Salgados</option>
                         <option value = "Doce">Doces</option>
                         <option value = "Bebida">Bebidas</option>
                    </select>
                 </div>
                </div>

                <div className = "infovalor">
                <div className = "conteinerinput">
                    <div className = "label">VALOR</div>
                     <div className = "input-text-valor"><input className = "valorProduto" type = "text"/></div>
                </div>

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE MÍNIMO</div>
                     <div className = "input-text-estoque"><input className = "valorEstoque" type = "text"/></div>
                </div>
              

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE MAXIMO</div>
                     <div className = "input-text-estoque"><input className = "valorEstoque" type = "text"/></div>
                </div>
              

                <div className = "conteinerinput">
                    <div className = "label">ESTOQUE ATUAL</div>
                     <div className = "input-text-estoque"><input className = "valorEstoque" type = "text"/></div>
                </div>
                </div>

                <div className = "descriçãoPro">
                <div className = "conteinerarea">
                    <div className = "label"> DESCRIÇÃO DO PRODUTO </div>
                    <textarea className = "Descrição"></textarea>
                </div>
                </div>
            </div>


            <div className = "informações">
            <div className = "Informação ">SOLTE O ARQUIVO AQUI PARA FAZER UPLOAD </div>
            <div className = "arquivoUp">  <button className = "Updimg"> <img src = "./assets/imagens/pasta1.png" alt = ""/> SELECIONE O ARQUIVO DA IMAGEM </button> </div>



           
            <div className = "botões">
                <div className = "cadastra"><button className = "confirmar"><img src = "./assets/imagens/confirme.png" alt = ""/> CADASTRA</button></div>
                <div className = "cancela"><button  className = "Cancelar"><img src = "./assets/imagens/Cancelar.png" alt = ""/> CANCELAR </button></div>
             
            </div>
        </div>
        </div>

        </div>


        </ConteinerCadastro>
    )
    
}