import styled from "styled-components";



const Conteiner = styled.div`

input {
    width: 20em;
    height: 2em;
    border: none;
    border-radius: 10px;
    margin-right: -0.5em;
    padding: 0em .5em;
}

`
export default function Pesquisa() {
    return (
        <Conteiner>
            <input type="search" id="tftr" name="tftr"></input>
        </Conteiner>
    )
}