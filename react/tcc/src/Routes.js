
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './pages/Inicial/inicial'
import Login from './pages/Login/login'
import Carrinho from './pages/Carrinho/carrinho'
import Produtos from './pages/Produtos/produto'


export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path = '/' exact = {true} component = {Home} />
              <Route path = '/Login' exact = {true} component = {Login} />
              <Route path = '/Carrinho' exact = {true} component = {Carrinho} />
              <Route path = '/Produto' exact = {true} component = {Produtos} />
          </Switch>
        </BrowserRouter>
    )
    
}




   