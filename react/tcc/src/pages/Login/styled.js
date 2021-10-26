import styled from "styled-components";



const ConteinerLogin = styled.div `

.conteinerimg{
    height: 150vh;
    width: auto; 

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 
}

.ConteinerLogin{
    
    margin-top: 5em;
    margin-left: 23em;
    margin-right: 22em;

    padding-bottom: 10em;
   
    color: white;
    background-color: black;
    opacity: 96%;
}


.Login {
    padding-top: 2em;
   
}

.logo {
    padding-left: 25em ;
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



.cria {
    padding-top: 5px;

}

.cria a {
    color: white;
    text-decoration: none; 
}









span {
    color: #568EAE; 
    cursor: pointer;
    
}










`

export {ConteinerLogin}