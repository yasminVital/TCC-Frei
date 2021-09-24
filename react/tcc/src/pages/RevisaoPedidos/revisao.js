import { ContainerRevisao } from './styled'



export default function Carrinho() {

    return ( 
        <ContainerRevisao>
            <div className="but-esco"> 
                <button className="entrega"> <div><img src="./assets/imagens/entregador-montando-a-ilustracao-de-scooter-vermelho_9845-14-removebg-preview 8.png" alt="" /></div> <div> Entrega</div>  <div>10-60 Min</div> </button>
                <button className="entrega" style={{backgroundColor: '#006BA1E5', color: 'white', border: '#006BA1E5', opacity: '90%', marginLeft: '40px'}}>  <div><img src="./assets/imagens/pointer.png" alt="" /></div>   <div> Retirada </div>  <div style={{color: 'red'}}> 2-20 Min</div> </button>
            </div>
            <div className="end-info"> 
                <div className="endereco"> 
                    <h2> Endereço de Retirada </h2>
                    <div style={{textAlign: 'left'}}> 463 Av. Coronel Octaviano de Freitas Costa,   Veleiros <br></br>Socorro, São Paulo - SP, 04773-000 </div>
                </div>
                <div className="horario" style={{textAlign: 'center'}}> 
                    <h2> Horário de Retirada </h2>
                    <div> De Segunda à Sexta-Feira <br></br> 08:00 às 16:30</div>
                </div>
            </div>
            <div className="tabela"> 
            <h1> Produtos Pedidos</h1>
            <thead>
                  <th>   </th>
                  <th> Produto </th>
                  <th> Preço unitário </th>
                  <th> Quantidade </th>
                  <th> Subtotal de itens</th>
              </thead>
              <tbody>
                  <tr>
                      <td style={{width: '3%'}}> <img src="./assets/imagens/bolinho.png" alt="" width="90%" /> </td>
                      <td>baguete de Queijo</td>
                      <td>R$ 3,50</td>
                      <td>3</td>  
                      <td>R$ 3,50</td>
                  </tr>
              </tbody>
            </div>
            <h1 style={{marginLeft: '3em'}}>Método de Pagamento</h1>    
            <div className="meto-paga">
                <div className="pix" style={{marginLeft: '1em', alignItems: 'center'}}> <img src="./assets/imagens/logo-pix-icone-512 10.png" alt="" width="30%"/> <div style={{marginLeft: '.8em'}}> PIX </div> </div>
                <div className="din" style={{marginLeft: '3em', alignItems: 'center'}}> <img src="./assets/imagens/dinheiro.png" alt="" width="58%"/> <div> Dinheiro </div> </div>
                <div className="car" style={{marginLeft: '3em'}}> <img src="./assets/imagens/kisspng-e-commerce-payment-system-credit-card-debit-card-5bf9cb52d627b6 2.svg" alt=""  /> <div> Cartão de</div> </div>
            </div> 
            <div className="precos"> 
                <div className="box-preco"> 
                     <div className="sb">Subtotal dos Pedidos: </div>
                     <div className="pc"> 40,00</div>
                </div>
                <div className="box-preco"> 
                     <div className="sb">Cupom de Desconto:</div>
                     <div className="pc"> 20,00</div>
                </div>
                <div className="box-preco"> 
                     <div className="sb"> Pagamento Total: </div>
                     <div className="pc"> 20,00</div>
                </div>
            </div>
            <div className="but">
            <button > Fazer Pedidos</button>
            </div>
        </ContainerRevisao>
        )
}