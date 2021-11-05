
import { useState, useEffect } from "react"

import Contador from "../contador/styled"



export default function Item(props) {
    const [ produto, setProduto ]  = useState(props.info)
    const [preco, setPreco] = useState(0)

    
    
  function remover(qtd) {
    props.onRemove(produto.id);
  
}

  
  function alterarQtd(qtd) {
    // Atualiza a variável de Estado
    setProduto({...produto, qtd });

    // Chama componente PAI para atualizar Cookie
    props.onUpdate(produto.id, qtd)
  }


  function multiplicar() {
      setPreco(produto.valor * produto.qtd);
  }


  useEffect(() => {
   multiplicar();
  })
    return(
        <comtainersla>
            
        <tbody>
            <tr>
                <td style={{width: '12%', borderRadius: '85px'}}><img src={produto.imagem} alt="" width="90%"/></td>
                <td> {produto.nome} </td>
                <td> R$: {produto.valor} </td>
                <td> 
                    <div className="est-box">
                        <Contador onChange={alterarQtd} value={produto.qtd}/>
                    </div> 
                    <div className="lixeira"> <img src="./assets/imagens/lixeira.png" alt="" onClick={remover}/> </div>
                </td>  
                <td className="h"> R$: {preco}</td>
            
            </tr>
        </tbody>
        
    </comtainersla>
    )
}