import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Clínica Médica</h1>
            <p className="lead">Sistema para cadastro de Pacientes</p>
            <hr />
            <p>Realize o cadastro para agendar consultas</p>
            <Link to="/cadastro" className="btn btn-primary btn-lg">
                Cadastrar
            </Link>
            <Footer />
        </div>
    );
}

export default Home;