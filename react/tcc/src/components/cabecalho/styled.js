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
.barra img {
width: 70%;
}

.barra {
    margin-right: 20px;
}
`
export {ConteinerCabecalho}