import styled from 'styled-components'

const Conteineradml = styled.div` 

.pagina-01 {

    display: flex;
    flex-direction: row;
    

}

.div01 {
    width:100px;
    height:100px;
    position:absolute;
    top:23%;
    left:5%;

}

.div02 {
    width:500px;
    height:100px;
    position:absolute;
    left:50%;
    text-align: center;
    background-color: #1867FF;
    height: 100vh;
    width: 70vh;
}

.titulo {
    margin-top: 20%;
    font-size: 50px;
}

.subtitulo {
    margin-top: 1%;
    font-size: 20px;
    color: white;
}

.inupt-01 {
    width:100px;
    height:100px;
    position:absolute;
    top:34%;
    left:20%;
}

.inupt-02 {
    width:100px;
    height:100px;
    position:absolute;
    top:42%;
    left:20%;
}

.buto {
    width:100px;
    height:100px;
    position:absolute;
    top:52%;
    left:20%;

}

input{
    width: 400px;
    font-size: 20px;
    border-radius: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    height: 40px;
}

input[type=text], select {
  
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #000000;
  border-radius: 4px;
  box-sizing: border-box;
}


button {
    border-radius: 50px;
    width: 400px;
    height: 40px;
    border: 1px #000;
    background-color: #222096;
    color: #FFFFFF;
    font-size: 20px;
    cursor: pointer;
}

`

export {Conteineradml}