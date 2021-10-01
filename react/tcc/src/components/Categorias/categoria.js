import {ConteinerCategoria} from './styled'
import { Link } from "react-router-dom"




export default function Categoria() {
    return(
       <ConteinerCategoria>
                <div className = "ConteCategorias">
                <div className = "titulo"> CATEGORIA</div>

                 <hr width= "150"/> 
                 <div className = "conteudo">
                 <div>Favoritos da casa</div>
                 <div><Link to = "Salgado">Salgados </Link></div>
                 <div>Doces</div>
                 <div>Bebidas</div>
                 </div>
                 </div>


       </ConteinerCategoria>
    )
    
}



