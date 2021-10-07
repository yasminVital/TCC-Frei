import styled from 'styled-components'



const ContainerPag = styled.div`
display: flex;
flex-direction: row;
padding: 2em 3.5em;


.image1 {
    width: 8em;
    height: 3.5em;
}

.image1 img {
margin-top: -13px;
}

.image2 {
    padding: 4px 2px;
}

.image3 {
    padding: 6px 2px;

}

> div {
    width: 8em;
    
    margin-left: 30px;
    align-self: center;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: #ECECEC;
        border: none;
        border-radius: 10px;
    }
}

img {
    width: 80%;
}
`

export {ContainerPag}