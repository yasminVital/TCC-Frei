import styled from "styled-components";





const ConteinerProduto = styled.div`



/// Incio de tudo

.Conteinerimg {
   
    height: 100vh;
    width: 100vw; 

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 
}





.Produtos { 
 display: flex;
 flex-direction: row ;


 margin-left: 4em;

 padding-top: 8em;
 padding-left: 10em;


}






.ListaProdutos{
    display: flex;
    
    flex-wrap: wrap;
   
    margin-right: 20em;

    align-items: center;
    
    padding: 2em 2em 5em 2em;
   
    background-color: white;
      
}



/// caxinhas de cada produto

.caixa1 {
    margin-left: 1em;
    margin-top: 1em;
    margin-right: 0.2em;


    

    padding: 10px 1em 10px 1em; 


    color: #706E6E;

    background-color: #D0CCCC;
    box-shadow: 5px 5px 10px grey;  

}



.Produto{
    text-align: center;
    
    padding-top: 2px;
    padding-bottom: 10px;
}

.botão-compra{
    padding-top: 15px;
    text-align: center;
}


.Preco{
    padding-top: 8px;
}



/// Imagem Produto

.imagem {
    text-align: center;

}

.imagem img{
    
    width: 100px;
    height: 90px;

    
}

  

/// Estrelas

.avaliacao img {
    width: 10px ;
    right: 10px ;
    left: 10px;
    height: 10px;
}




//// Estilização de outras coisa


.botão-compra button {

    padding: 10px ;


    border-radius: 3em;
    border: none;

    cursor: pointer; 

    color: white;
    background-color: #4D5B76;

}


`




export {ConteinerProduto}



