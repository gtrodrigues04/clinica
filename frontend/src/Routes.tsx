import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './assets/css/styles.css'
import Home from './pages/Home'
import Header from './components/Header';
import { Cadastro } from './pages/Cadastro';
const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/cadastro" exact component={Cadastro} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Routes;
