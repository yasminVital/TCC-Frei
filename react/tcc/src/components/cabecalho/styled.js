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
    margin-left: 15em;

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
  position:stick;
  top: 0;
  left:  96%;
  right: 0;
  height: 35px;
  width: 0.2%;  
  height: 35px;
  width: 0.1%;  
  margin-right: 20px;
}



.imagem-lupa{
    margin-left: 10px;
}


.imagen-login{
    margin-left: 10px;
}

.Imagen-login> div{
    margin-left: 10px
}
.imagem-login{
    margin-right: 10px;
}

.borda {
}


`
export {ConteinerCabecalho}