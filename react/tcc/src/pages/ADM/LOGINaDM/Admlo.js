import { Conteineradml } from './styled'

export default function logadm () {

    return (
        <Conteineradml>
            <div className= "pagina-01">
                <div className= "div01">
                    <div className = "imgdiv01">
                        <img src= "./assets/imagens/kisspng-responsive-web-design-clip-art-web-development-vec-anlise-de-processos-jtp-solution-5bd14eb7de8653 2.png" height= "255"alt=""/>
                    </div>
                </div>
                
                <div className= "div02">
                   <div className= "titulo">
                   Seja Bem-vindo
                    </div> 
                    <div className= " subtitulo">
                    Acesso ao Setor Adminstrativo
                    </div>
                    <div className= "inupt-01">
                    <input type="text" name="search" placeholder="Email de acesso" />
                    </div>
                    <div className= "inupt-01">
                    <input type="text" name="search" placeholder="Senha de acesso" />
                    </div>
                    <div className= " buto">
                        <button> Entrar</button>
                    </div>
                    </div>
                    
                    
               
            </div>
        </Conteineradml>
    )
}