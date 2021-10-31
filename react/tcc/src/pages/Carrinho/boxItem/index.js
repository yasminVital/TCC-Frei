
import { useState, useEffect } from "react"
import ContadorProduto from "../../Produtos/detalhepro/contadorProduto/styled"
import Contador from "../contador/styled"



export default function Item(props) {
    const [ produto, setProduto ]  = useState(props.info)
    const [preco, setPreco] = useState(produto.valor)
    const [subPedidos, setSubPedidos] = useState(10)
    const [cupom, setCupom] = useState(20)
    

    async function vaiCarai() {
        setPreco(Math.round(produto.valor + 20)); 
    }

    
  
    
    useEffect(() => {
       vaiCarai();
      })
    

   
    return(
        <comtainersla>
            <thead>
            <th> </th>
            <th> Produto </th>
            <th> Preço </th>
            <th> Quantidade</th>
            <th> Total </th>
        </thead>
        <tbody>
            <tr>
                <td style={{width: '3%'}}><img src={produto.imagem} alt="" width="90%"/></td>
                <td> {produto.nome} </td>
                <td> {produto.valor} </td>
                <td> 
                    <div className="est-box">
                        <Contador/>
                    </div> 
                    <div className="lixeira"> <img src="./assets/imagens/lixeira.png" alt="" /> </div>
                </td>  
                <td>{preco} </td>
            
            </tr>
    
            

        </tbody>
    </comtainersla>
    )
}