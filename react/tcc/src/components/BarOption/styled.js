import styled from "styled-components";


const ConteinerAdmBar = styled.div`
height: 41.1em;
width: 12em;
background-color:black;

.logo2 img {
    height: 8em;
    width: 7em;
}

.logo2 {
    padding-top: 9px;
}

.conteinerBar{
display: flex;
flex-direction: column;



color: white
}

.espaço {
    margin-top: 20px;
    width: 12em;
    height: 30px;
    background-color: #383838;
}

.botõesBar{
    display: flex;
    flex-direction: column;
    
    color: black;
}

.botão1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3em;
    height: 3em;
    background-color: white;
}

.gerenciamento {
    padding-left: 4px;
}

.barra {
    height: 48px;
    width: 8px;
    background-color: #0064FB;
}

`


export {ConteinerAdmBar}