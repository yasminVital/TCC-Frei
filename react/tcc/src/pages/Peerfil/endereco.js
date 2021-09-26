import {ConteinerPerfils} from './styled'

import Tiras from '../../components/listras/index'

export default function Perfil() {
    return(

        <ConteinerPerfils>
            <h1> Meus Endereços </h1>
            <Tiras />
            <h5>Gerenciar e Proteger sua Conta </h5>
            <div className="per-box1"> 
                <div className="per-contas"> 
                    <div className="mi"> <img src="./assets/imagens/logo de user.png" alt="" width="12%" height="5%"/> <h3>  Minha Conta </h3> </div>
                    <div> Perfil</div>
                    <div  style={{color: '#006BA1E5'}}> Endereços</div>
                    <div> Trocar Senha</div>
                </div>
                <div className="tabela">
                    <div className="en-endereco">
                    <div className="en-box"> 
                         <div className="no"> 
                            <div style={{marginRight: '20px'}}>Nome Completo: </div> <div> Luiz Fernado da Silva Pereira</div> 
                        </div>
                        <div className="bot"> 
                          <div> Alterar </div> <div> Apagar  </div> 
                        </div>  
                    </div>
                    <div className="tel"> 
                        <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Telefone: </div> <div> (+55) 11 99999-9999</div> 
                    </div>
                     <div className="end"> 
                         <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Endereço: </div> <div> R das Orquídeas, 80, Jardim Azano II  São Paulo-São Paulo 04854500</div> 
                     </div>
                    </div>


                    <div className="en-endereco">
                    <div className="en-box"> 
                         <div className="no"> 
                            <div style={{marginRight: '20px'}}>Nome Completo: </div> <div> Luiz Fernado da Silva Pereira</div> 
                        </div>
                        <div className="bot"> 
                          <div> Alterar </div> <div> Apagar  </div> 
                        </div>  
                    </div>
                    <div className="tel"> 
                        <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Telefone: </div> <div> (+55) 11 99999-9999</div> 
                    </div>
                     <div className="end"> 
                         <div style={{marginRight: '20px', paddingLeft: '3.7em'}}>Endereço: </div> <div> R das Orquídeas, 80, Jardim Azano II  São Paulo-São Paulo 04854500</div> 
                     </div>
                    </div>
                    </div>
                
            </div>
            <div className="but"> Confirmar</div>
        </ConteinerPerfils>
    )
    
}