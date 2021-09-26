
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './pages/Inicial/inicial'
import Login from './pages/Login/login'
import Cadastra from './pages/Login/cadastrar/cadastrar'
import Carrinho from './pages/Carrinho/carrinho'
import Produtos from './pages/Produtos/produto'


export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path = '/' exact = {true} component = {Home} />
              <Route path = '/Login'  component = {Login} />
              <Route path = '/Cadastra' component = {Cadastra}/>
              <Route path = '/Carrinho'  component = {Carrinho} />
              <Route path = '/Produto'  component = {Produtos} />
          </Switch>
        </BrowserRouter>
    )
    
}




   