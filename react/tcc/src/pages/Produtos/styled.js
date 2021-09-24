import styled from "styled-components";





const ConteinerProduto = styled.div`



.Conteinerimg {
    height: 100vh;
    width: 140vh; 
    
    background-image: url("./assets/imagens/capa.png");
    background-size: cover; 
    background-repeat: no-repeat; 
}


.Produtos { 
 display: flex;
 flex-direction: row ;
 padding-top: 15em;
 padding-left: 10em;
 height: 50vh;

}



.ListaProdutos{
    display: flex;
    flex-direction: row;
    padding-top: 10px; 
    padding-left: 50px;
    background-color: white;
   
   
    
}

.caixa1 {
  

}


.imagem img{
    width: 90px;
    height: 50px;
}

.avaliacao img {
    width: 10px ;
    right: 10px ;
    left: 10px;
    height: 10px;
}

`
export {ConteinerProduto}



