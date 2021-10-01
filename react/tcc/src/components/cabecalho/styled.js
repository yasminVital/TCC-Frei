import styled from "styled-components";


const ConteinerCabecalho = styled.div`

a {
    text-decoration: none;
    color: white;
}

a:hover {
    color: #2872FF;
}

.ConteinerCabecalho{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
}
.conteudo {
    display: flex;
    justify-content: space-between;
    color: white;
    margin-left: 20em;

}

.conteudo > div {
    margin-right: 10em;
}
.entrada{
    display: flex;
    flex-direction: row;
    padding-right: 1em;
    padding-right: 20px;
    align-items: center;
}
.barra {
    
  background-color: gray;
  height: 35px;
  width: 0.2%;  
  margin-right: 15px;

}

.barra1 {
  background-color: gray;
  height: 35px;
  width: 0.1%;  
  margin-right: 20px;
}



.imagem-lupa{
    margin-left: 5px;
}


.imagem-login{
    margin-right: 10px;
}


`
export {ConteinerCabecalho}