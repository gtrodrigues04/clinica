import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/styles.css'
import Home from './pages/Home'
import Header from './components/Header';
import { Cadastro } from './pages/Cadastro';
import { Cadastro_Enf} from './pages/Cadastro_Enf'
import Login from './pages/Login';
import { NotFound } from './components/NotFound';
import { PrivateRoute } from './components/PrivateRoute';
import { ListaPacientes } from './pages/ListaPacientes';
import { Editor } from './components/Editor';


const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <PrivateRoute path="/" exact component={Home} />
                    <PrivateRoute path="/cadastro" exact component={Cadastro} />
                    <PrivateRoute path="/cadastro-enf" exact component={Cadastro_Enf} />
                    <PrivateRoute path="/lista-pacientes" exact component={ListaPacientes} />
                    <PrivateRoute path="/edit/:id" exact component={Editor} />
                    <Route path="/login" exact component={Login}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;
