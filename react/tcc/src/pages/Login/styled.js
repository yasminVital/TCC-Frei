import styled from "styled-components";



const ConteinerLogin = styled.div `
    display: flex;
    flex-direction: column;
    height: 120vh;
    width: auto; 

    background-image: url("./assets/imagens/Background.svg");
    background-size: cover; 
    background-repeat: no-repeat; 


.ConteinerLogin{
    
    margin-top: 5em;
    margin-left: 23em;
    margin-right: 22em;
    border-radius: 30px;
    height: 30em;
    

    padding-bottom: 10em;
   
    font-family: Lobster;
    color: #568EAE;

    background-color: black;
    opacity: 70%;
}


.Login {
    padding-top: 2em;
    margin-top: 5em;
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
    font-family: Lobster;
    font-size: 4em;
    color: #568EAE;
}

.inputs{
    font-size: 1em;
    text-align: center;  
}

.email {
    
    padding-bottom: 2em;
}

.senha{
    padding-bottom: 2em;
}

input {
    
    width: 400px ;
    height: 70px;

    border-radius: 30px;
}


.botão {
    padding-top: 1em;
    
    text-align: center;

}

button {
    
    width: 200px ;
    height: 50px;

    font-size: 30px;
    background-color:  #568EAE;
    color: white; 
    border-radius: 10px;
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