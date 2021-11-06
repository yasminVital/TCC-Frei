import styled from 'styled-components'

const COnteinersobrenos = styled.div` 

display: flex;
flex-direction: column;
height: 100vh;

.Faixa-sobrenos {

background: url("./assets/imagens/capa.png") no-repeat center center;
  background-size: cover;
  height: 100vh;
  padding-top: 5%;
  background-attachment: fixed;
}

.fundo-fsn{
    text-align: center;
    align-content: center;
    background-color: #EAE1E199;
    border-style: solid;
    border-width: medium;
    border-color: #EAE1E199;
    border-radius: 12px;
    margin-left: 9%;
    margin-right: 9%;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-bottom: 10%;

    
}

.texto-fns {

    margin-left: 3%;
    margin-right: 3%;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 4%;
}

.texto-fns2 {
    margin-left: 5%;
    margin-right: 5%;
    font-size: 22px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
}

.titulo-fns{
    font-size: 55px;
    margin-bottom: 2%;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.img-pt1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 2%;
}

.titulo {
    font-size: 55px;
}

.img-pr1 {

    margin-right: 2%;
}

.img-pr2 {

margin-right: 2%;
}

.img-pr3 {

margin-right: 2%;
}



.img-pt2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-bottom: 2%;
}

.img-pt3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
}

.montagem-padaria {
    background-color: white;
    padding-bottom: 20px;
}

.titulo {
    text-align: center;
    padding-top: 1%;
    padding-bottom: 2%;
}
`

export {COnteinersobrenos}