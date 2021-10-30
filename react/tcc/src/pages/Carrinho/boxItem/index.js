
import { useState } from "react"
import Contador from "../contador/styled"

export default function Item(props) {
    const [ produto, setProduto ]  = useState(props.info)



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
                        <Contador />
                    </div> 
                    <div className="lixeira"> <img src="./assets/imagens/lixeira.png" alt="" /> </div>
                </td>  
                <td>{produto.valor} </td>
            
            </tr>
    
            

        </tbody>
    </comtainersla>
    )
}