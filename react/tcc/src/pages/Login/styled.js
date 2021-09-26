import styled from "styled-components";



const ConteinerLogin = styled.div `

.conteinerimg{
    height: 100vh;
    width: auto; 

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 
}

.ConteinerLogin{
    
    margin-top: 2em;
    margin-left: 30em;
    margin-right: 30em;

    padding-bottom: 10em;
   
    color: white;
    background-color: black;
}


.Login {
    padding-top: 2em;
   
}

.logo {
    padding-left: 32em ;
}

.titulo{
    text-align: center;
}

.Bemvindo {
    padding-bottom: 0.5em;

    font-size: 2em;

}

.logar{
    padding-bottom: 1em;

    font-size: 2em;
}

.inputs{
    font-size: 1em;
    text-align: center;  
}

.email {
    
    padding-bottom: 1em;
  
}

input {
    
    width: 400px ;
    height: 50px;

    border-radius: 10px;
}


.botão {
    padding-top: 1em;
    
    text-align: center;
}

button {
    
    width: 400px ;
    height: 50px;

    font-size: 30px;
    background-color:  #568EAE;
    color: white;  
}

.func-para-cadastro{
    text-align: center;
    padding-top: 20px;
}


.cria  {
    color: white;
    padding-top: 5px;
}

.cria :hover {
    color: white;
 
}



.cria :link{
    color: white;
    text-decoration: none; 
}





span {
    color: #568EAE; 
    cursor: pointer;
    
}










`

export {ConteinerLogin}