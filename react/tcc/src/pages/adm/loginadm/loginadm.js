import {conteinerADMlogin} from './styled'

export default function loginadm (){
   
    return (
        <conteinerADMlogin>
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
        </conteinerADMlogin>
    )
}