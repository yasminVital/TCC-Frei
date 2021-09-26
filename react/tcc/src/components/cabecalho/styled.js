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
    margin-left: 20em;
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

    padding-right: 1em;
}


.barra {

    width: 1px;

    margin-right: 10px ;
    margin-left: 10px;

    background-color: grey;
}





`
export {ConteinerCabecalho}