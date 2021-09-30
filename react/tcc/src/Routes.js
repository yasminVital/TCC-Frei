
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import NotFound from './pages/NotFound/index'

import Home from './pages/Inicial/inicial'
import Login from './pages/Login/login'
import Carrinho from './pages/Carrinho/carrinho'
import Produtos from './pages/Produtos/produto'

import Revisao from './pages/RevisaoPedidos/revisao'
import Entrega from './pages/RevisaoPedidos/entrega'


import Perfil from './pages/Peerfil/Perfil'
import PerfilEnd from './pages/Peerfil/endereco'
import PerfilSen from './pages/Peerfil/senha'

import status from './pages/status/status';


export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path = '/' exact = {true} component = {Home} />
              <Route path = '/Login'  component = {Login} />
              <Route path = '/Carrinho'  component = {Carrinho} />
              <Route path = '/Produto'  component = {Produtos} />
              <Route path="/revisao" component={Revisao} />
              <Route path="/status" component={status} />


              <Route path="/entrega" component={Entrega} />
              <Route path="/revisao" component={Entrega} />


              <Route path="/perfil" component={Perfil} />
              <Route path="/endereco" component={PerfilEnd} />
              <Route path="/senha" component={PerfilSen} />
              <Route path= '*' component = {NotFound} />
          </Switch>
        </BrowserRouter>
    )
    
}




   