import { useState } from "react";
import styled from "styled-components";



const Container = styled.div `
 position: fixed;
    top: 0px;
    left: 0px;

    display: ${props => props.show === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    background-color: #000000;
    height: 100vh;
    width: 100vw;
    z-index: 100;

  .content {
    margin-top: -100px;
    background-color: #fff;
    padding: 1em;
  }


  .box1, .box2 {
      display: flex;
      flex-direction: row;
  }

  .numero > input , .comple > input, .cida > input {
    width: 4em;
    margin-right: 7em;
  }

  input {
    margin-top: .5em;
    outline: none;
  }

  .butt {
      display: flex;
      justify-content: flex-end;

      margin-top: 2em;
  }

  button {
      margin-left: 2em;
  }
`

export default function Model(props) {

    const [Exibir, setExibir] = useState(false)


    return(
        <Container show={props.show}>
            <div className="content">
                <div className="box1">
                    <div className="cep"> 
                        <div>CEP: </div>
                        <input type="" />
                    </div>
                    <div className="descricao"> 
                        <div>Endereço:</div>
                        <input type="" />
                    </div>
                </div>
                <div className="box2">
                    <div className="numero"> 
                        <div>Numero:</div>
                        <input type="" /> </div>
                    <div className="comple"> 
                        <div>Complemento:</div>
                        <input type="" />
                    </div>
                    <div className="cida"> 
                        <div>Cidade:</div>
                        <input type="" />
                    </div>
                </div>
                <div className="butt">
                    <button>Fechar</button>
                    <button>Cadastrar</button>
                </div>
            </div>
        </Container>
    )
}