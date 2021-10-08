import {Conteinerstatus} from './styled'

import { Link } from "react-router-dom"

export default function status () {

    return (
        <Conteinerstatus>
           <div className= "Faixastatus">
               <div className= "cabecalhO">
                   <div className= "LOGO">
                   <img src="./assets/imagens/logo 13 (1).png" height="125" alt= ""/>
                   </div>
                   <div className = "naveg">
                   <div className= "navega">
                       <label for=""></label>
                       <input type="url" id="hhh" name="hhh"></input>
                    </div>
                    <div className= "LUPA00">
                        <img src="./assets/imagens/lupa1.svg" height="25" alt=""/>
                    </div>
                    <div className = "login-50">
                        <img src = "./assets/imagens/logo de user.png" height="25" alt=""/>
                    </div>
                    <div className = "cariinho-50">
                        <img src= "./assets/imagens/mbricartadd_99553.svg" height="25" alt=""/>
                    </div>
                    </div>
               </div>
               
               <div className= "cabelhO2">
                   <div className = "C2">
                       HOME
                    </div>
                    <div className = "C2">
                        SOBRE NÓS
                    </div>
                    <div className = "C2">
                        MENU
                    </div>
               </div>
               <div className = "pooooo">
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                <div className = "tirinnhas">
                    <img src= "./assets/imagens/Rectangle 224.png" alt= "" />
                </div>
                </div>
                <div className = "volta">
                    <Link to="./revisao"> <img src= "./assets/imagens/icon-voltar-removebg-preview 2.png" alt= ""/>  </Link>
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
                            <div className="final">
                                <div className="sub">
                                    Subtotal dos produtos  
                                </div>
                                <div className="valor">
                                    R$ 3,00
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                   Envio 
                                </div>
                                <div className="valor">
                                    R$ 0,00
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                    Total do pedido  
                                </div>
                                <div className="red">
                                    R$ 3,50
                                </div>
                            </div> 

                            <div className="final">
                                <div className="sub">
                                   Método do pedido
                                </div>
                                <div className="valor">
                                   dinheiro
                                </div>
                            </div> 
                            
                        </div>
                        <div className='rodape'>

<div className='part-roda1'>
    <div className='info-01'>
        Informações de contato
    </div>
    <div className='info-02'>
        Av. Coronel Octaviano de Freitas Costa, 463 - Socorro. São Paulo
    </div>
    <div className='info-03'>
        Telefone: (11) 5687-8876 | 96398-6252
    </div>
    <div className='info-04'>
        contato@testefigma.com
    </div>
</div>

<div className='part-roda2'>
    <div className='info-05'>
        Horário De  Funcionamento
    </div>
    <div className='info-06'>
        De Segunda à Sexta-Feira <br/> <br/>
          08:00 às 16:30 
    </div>
</div>

<div className=' part-roda3'>
    <div className='img'>
        <img src="./assets/imagens/logo 13 (1).png" alt="" width="80%"/>
    </div>
</div>
</div>
<div className='final3'>
<div className='exp'>
    Todos os direitos reservados | STI ©
</div>
</div>
                    
                    

                </div>
        </Conteinerstatus>
    )
}