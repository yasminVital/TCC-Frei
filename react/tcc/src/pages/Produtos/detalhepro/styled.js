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
flex-direction: row;


 margin-left: 0.5em;


 padding-top: 13em;
 padding-left: 5em; 
}



.DetalhesProdutos{
    display: flex;
    flex-direction: column;
    height: 33em ;
    width: 70em;


    
    margin-right: 5em;

    align-items: center;
    padding-top: 1em;
    padding-bottom: 2em;
    padding-left: 1em ; 
    border-radius: 5px;
   

    
    background-color: #E8E1DD;
      
}

.informações-produto {
    display: flex;
    flex-direction: column;
}

.Produto {
    display:flex; 
    flex-direction: row;
   

    padding-top: 1em;
  



}


.informaçõesproduto {
    padding-left: 19em;

}

.informações {
    display: flex;
    flex-direction: row; 
    padding-top: 5em;
}

.valor-Produto{
    
    padding-right: 2em;

}








`




export {ConteinerProdutos}
