import styled from "styled-components";



const ConteinerCabecalho = styled.div`

.ConteinerCabecalho{
    display: flex;
    flex-direction: row;

    padding-top: 10px;


    justify-content: space-between;

   
    background-color: black;
  
   

   
}


.conteudo {
    display: flex;
    flex-direction: row;


    color: white;
}

.inicial {
    
    margin-right: 15em;
    margin-left: 15em;
}


.sobre  {
    margin-right: 10em;
    margin-left: 10em;
}

.menu {
    margin-right: 10em;
    margin-left: 10em;

}



.entrada{
    display: flex;
    flex-direction: row;

    padding-right: 20px;
}


.barra {

   width: 2px;
    
    margin-right: 15px ;
    margin-left: 15px;

    background-color: grey;
}





`
export {ConteinerCabecalho}