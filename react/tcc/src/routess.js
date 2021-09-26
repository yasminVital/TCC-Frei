import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Carrinho from './pages/Carrinho/carrinho'
import Revisao from './pages/RevisaoPedidos/revisao'
import Entrega from './pages/RevisaoPedidos/entrega'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                 <Route path="/" exact={true} component={Carrinho} />
                 <Route path="/revisao" component={Revisao} />
                 <Route path="/entrega" component={Entrega} />


            </Switch>
        </BrowserRouter>
    )
}