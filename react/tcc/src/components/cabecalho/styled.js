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
  position: absolute;
  top: 0;
  left:  93.4%;
  right: 0;
  height: 35px;
  width: 0.2%;  
  
}

.barra1 {
  background-color: gray;
  position: absolute;
  top: 0;
  left:  96%;
  right: 0;
  height: 35px;
  width: 0.1%;  
}

.barra {
    margin-right: 20px;
}


.imagem-lupa{
    margin-left: 5px;
}


.imagen-login{
    margin-left: 5px;
}

.Imagen-login{
    margin-left: 5px
}

`
export {ConteinerCabecalho}