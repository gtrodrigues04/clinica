import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/styles.css'
import Home from './pages/Home'
import Header from './components/Header';
import { Cadastro } from './pages/Cadastro';
import Login from './pages/Login';
import { NotFound } from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <PrivateRoute path="/" exact component={Home} />
                    <PrivateRoute path="/cadastro" exact component={Cadastro} />
                    <Route path="/login" exact component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;
