import styled from "styled-components";





const ConteinerProduto = styled.div`



.Conteinerimg {
   
    height: 140vh;
    width: auto; 
    
    background-image: url("./assets/imagens/capa.png");
    background-size: cover; 
    background-repeat: no-repeat; 
}


.Produtos { 
 display: flex;
 flex-direction: row ;
 
 padding-top: 10em;
 padding-left: 10em;

}






.ListaProdutos{
    display: flex;
    
    flex-wrap: wrap;
    margin-right: 10em;

    align-items: center;
    
    padding: 2em 3em 2em 2em;
   
    background-color: white;
      
}



.caixa1 {


    margin-left: 1em;
    margin-top: 1em;
    margin-right: 1em;

    padding: 10px 1em 10px 1em; 
    background-color: grey;  
}

.Produto{
    text-align: center;

}



.imagem img{
    width: 150px;
    height: 150px;
}


.avaliacao img {
    width: 10px ;
    right: 10px ;
    left: 10px;
    height: 10px;
}

`
export {ConteinerProduto}



