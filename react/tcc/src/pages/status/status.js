import {Conteinerstatus} from './styled'

import Cabecalho from "../../components/cabecalho/cabecalho"
import Rodape from "../../components/rodape/rodape"

export default function status () {

    return (
        <Conteinerstatus>
                <Cabecalho />
                <div className = "volta">
                    <img src= "./assets/imagens/icon-voltar-removebg-preview 2.png" alt= ""/>
                </div>
                <div className= "tet1">
                    Previsão de Entrega
                </div>
                <div className= "tet2">
                    concluído ás 08:15
                </div>
                <div className= "previsaó">
                    <div className= "previsao1">
                        <img src= "./assets/imagens/Rectangle 309.svg" alt=""/>
                    </div>
                    <div className= "previsao2">
                    <img src= "./assets/imagens/Rectangle 292.svg" alt=""/>
                    </div>
                </div>    
                <div className=  "ok">
                    Pedido Completo !
                </div>
                <div className= "enderco">
                    <div className = "en">
                    Entrega em
                    </div>
                    <div className = "rua">
                        R. Rio do Vae, 700,
                    </div>
                    <div className = "bairro">
                        Vila Mariana, - São Paulo, São Paulo
                    </div>
                    </div>

                    <div className= "borda">
                        <div class= "part1-C3">
                            <div className= "pedido">
                            Detalhes do Pedido
                            </div> 
                            
                            <div className ="numero">
                            Nº do Pedido: 2527
            
                            </div> 
                        </div>
                        <div className= "detalhesdoproduto">
                            <div className= "imgproduto">
                                <img src="./assets/imagens/baguete-queijo e presunto 8.png" alt=""/>
                            </div> 
                            <div className="qtdnm" >
                                <div className="nm">
                                    Baguete de queijo 
                                    </div>
                                <div className="qtd">
                                    x1
                                </div>
                                </div>
                            <div className="vlprd">
                                R$ 3,00
                                </div> 
                            </div>
                            <div className="finall">
                                <div className="sub">
                                    Subtotal dos produtos  
                                </div>
                                <div className="valor">
                                    R$ 3,00
                                </div>
                            </div> 

                            <div className="finall">
                                <div className="sub">
                                   Envio 
                                </div>
                                <div className="valor">
                                    R$ 0,00
                                </div>
                            </div> 

                            <div className="finall">
                                <div className="sub">
                                    Total do pedido  
                                </div>
                                <div className="red">
                                    R$ 3,50
                                </div>
                            </div> 

                            <div className="finall">
                                <div className="sub">
                                   Método do pedido
                                </div>
                                <div className="valor">
                                   dinheiro
                                </div>
                            </div> 
                            
                        </div>
        <Rodape />
        </Conteinerstatus>
    )
}