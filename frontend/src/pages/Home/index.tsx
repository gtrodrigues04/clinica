import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import './home.css'

const Home = () => {

    let cont = 0;

    if (localStorage.getItem('cont')) {
        cont = 10;
    }
    else {
        window.location.reload();
        localStorage.setItem('cont', JSON.stringify(cont))
    }

    return (
        <div className="jumbotron">
            <hr />
            <div className='menu'>
                <Link to="/cadastro" className="btn btn-primary btn-lg">
                    Cadastrar Paciente
                </Link>
                {
                    localStorage.getItem('profissao') === '/enfermeiro' ? 
                    cont = 10 : <Link to='/enfermeiros' className="btn btn-primary btn-lg">Cadastrar Enfermeiro(a)</Link>
                }
                <Link to="/lista-pacientes" className="btn btn-primary btn-lg">
                  Listagem de Pacientes
                </Link>
            </div>
           <Footer />
        </div>
    );
}


export default Home;

