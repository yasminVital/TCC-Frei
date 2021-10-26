import styled from "styled-components";





const ConteinerProduto = styled.div`



/// Incio de tudo

.Conteinerimg {

    height:120vh;
    width: auto; 

  

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 
}





.Produtos { 
 display: flex;
 flex-direction: row ;

 


 margin-left: 0.5em;



 padding-top: 8em;
 padding-left: 5em;

}






.ListaProdutos{
    
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    height: 33em;
    
    margin-right: 8em;
  

    padding-top: 1em;
    padding-bottom: 3em;
    padding-left: 1em ; 
    border-radius: 5px;

   
    
    background-color: white;    
}


.ListaProdutos::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #4D5B76;
    }
    
    .ListaProdutos::-webkit-scrollbar
    {
        width: 15px;
        background-color: #3E006F;
        border-radius: 10px;
    }

    .ListaProdutos::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 7px rgba(0,0,0,.3);
        background-color: #CBCBCB;
    }



 
/// caxinhas de cada produto

.caixa1 {
    display: flex;
    flex-direction: column;
    width: 8em;
    margin-left: 1em;
    margin-top: 1em;
    margin-right: 0.3em;

    padding: 10px 1em 10px 1em; 

    color: #706E6E;

    background-color: #D0CCCC;
    box-shadow: 3px 3px 10px grey;  
}






.Produto{
    text-align: center;
    
    padding-top: 2px;
    padding-bottom: 10px;
}


.botão-compra{
    padding-top: 15px;
    margin: auto; 
    text-align: center;
}






/// Imagem Produto

.imagem {
    text-align: center;

}

.imagem img{
    
    width: 100px;
    height: 90px;

    
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



