import styled from 'styled-components'


const ContainerRevisao = styled.div`
display: flex;
flex-direction: column;
margin: 0px;

header {
display: flex;
justify-content: flex-end;
background-color: #000000;
;
}

.barra {
    border: 1px solid  #444444;
background-color:  #444444;
width: 1px;
height: 30px;
border-radius: 70px;
}
.sub-cabe {
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
}

.sub-cabe > div {
    margin-left: 7em;
}

.but-esco {
    display: flex;
    justify-content: space-between;
    padding: 0px 50em 0px 5em;
}

.but-esco button {
align-items: center;
border: 1px solid rgb(26, 171, 243, 0.9);
background-color: rgb(26, 171, 243, 0.9);
width: 55em;
padding: 0px 0px 0px 15px;
border-radius: 70px;

}

.entrega {
    display: flex;
    flex-direction: row;
}

.entrega > div {
    margin-left: 10px;
}

.end-info {
    display: flex;
justify-content: space-between;
padding: 0px 12em 0px 5em;

}


.tabela, .meto-paga {
  margin: 2em 8em 0em 5em;
}

thead {

    width: 100vw;

}


th {
    height: 61.93px;
    text-align: center;
    padding: .1em 4.2em;
    color: #006BA1;
    font-weight: 800;
    
} 
td {
    text-align: center;
    height:  61.93px;
    padding: 1em;
    color: #6D6868;
    font-weight: 600;
}

.meto-paga > div {
display: flex;
align-items: center;
text-align: center;
width: 7em;
}

.meto-paga {
    display: flex;
}


.precos {
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 7em;
margin-top: 20px;
}

.precos > div {
    display: flex;
    flex-direction: row;
}

.box-preco > div {
    margin-top: 10px;
    margin-right: 8px;
}

.but {
    display: flex;
    justify-content: flex-end;
    padding-right: 7.5em;
}

.but > button {
   
    border: 2px solid #1AABF3;
    background-color: #1AABF3;
    width: 13em;
    padding: 10px 0px 10px 0px;
    margin: 20px 0px 20px 0px;
    border-radius: 5px;
}
`
export { ContainerRevisao }
