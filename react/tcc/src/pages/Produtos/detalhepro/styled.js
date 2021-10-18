import styled from "styled-components";





const ConteinerProdutos = styled.div`



/// Incio de tudo

.Conteinerimg {

    height:120vh;
    width: auto; 

  

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-attachment: fixed;
    background-repeat: no-repeat; 
}



.Detalhes{ 
 display: flex;
 flex-direction: row ;


 margin-left: 0.5em;


 padding-top: 13em;
 padding-left: 5em; 
}



.DetalhesProdutos{
    display: flex;
    flex-direction: row; 
    
    margin-right: 3em;

    align-items: center;
    padding-top: 1em;
    padding-bottom: 3em;
    padding-left: 1em ; 
    border-radius: 5px;
   

    
    background-color: white;
      
}








`




export {ConteinerProdutos}
