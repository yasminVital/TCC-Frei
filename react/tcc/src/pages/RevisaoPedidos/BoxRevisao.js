
import { useState, useEffect } from "react"



export default function Box(props) {
    const [ produto, setProduto ]  = useState(props.info)

    return(
        <comtainersla>
               <tbody>
                  <tr>
                      <td style={{width: '15%'}}> <img src="./assets/imagens/bolinho.png" alt="" width="90%" /> </td>
                      <td>{produto.nome}</td>
                      <td>{produto.valor}</td>
                      <td>{produto.qtd}</td>  
                      <td> jjjjjjjjjjjjj</td>
                  </tr>
              </tbody>
        </comtainersla>
    )
}