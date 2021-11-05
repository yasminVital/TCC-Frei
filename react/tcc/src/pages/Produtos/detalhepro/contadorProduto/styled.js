import { useState } from 'react'
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #CCA577;
  color: #ffffff; 
  padding: 10px; 
  padding-right: 15px;
  padding-left: 15px;

  border-radius: 20px;


  .menos{
      cursor: pointer;
  }

 .quantidade {
     margin-right: 10px;
     margin-left: 10px;
 }

 .mais{
     cursor: pointer;
 }

 
 
`



export default function ContadorProduto(props) {
  const [qtd, setQtd] = useState(1);



  function incrementar() {
    if (qtd >= 10)
      return;
    setQtd(qtd+1)
  }

  function decrementar() {
    if (qtd === 0) 
      return;
    setQtd(qtd-1)
  }



  return (
    <Container>
      <div className="menos" onClick={decrementar}>
       <img src="./assets/imagens/Arrow 1.svg" alt = ""/>
      </div>

      <div className="quantidade">
        {qtd}
      </div>

      <div className="mais" onClick={incrementar}>
        <img src = "./assets/imagens/Arrow 2.svg" alt= ""/>
      </div>
      
    </Container>
  )
}