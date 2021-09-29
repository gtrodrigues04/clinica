import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import './home.css'


const Home = () => {

    //artifício para controlar nome do botão login/logout
    let cont = 0;
    if (localStorage.getItem('cont')) {
        cont = 10;
    }
    else {
        window.location.reload();
        localStorage.setItem('cont', JSON.stringify(cont))
    }
    //artifício para ocultar botão "cadastrar enfermeiro" para usuários de enfermeiros(a)
    let divcontrol = document.getElementById('btn-control')?.hidden
    let medico = localStorage.getItem('profissao')
    let control = "'/medicos'"
    medico?.length !== control.length ? divcontrol = true : divcontrol = false;

    return (
        <>
        <div className="jumbotron">
            <hr />
            <div className='menu'>
                <Link to="/cadastro" className="btn btn-primary btn-lg">
                    Cadastrar Paciente
                </Link>
                <div className='div-control' id='btn-control' hidden={divcontrol}>
                <Link to='/cadastro-enf' hidden={divcontrol} className="btn btn-primary btn-lg">Cadastrar Enfermeiro(a)</Link>
                </div>
                <Link to="/lista-pacientes"  className="btn btn-primary btn-lg">
                Listagem de Pacientes
                </Link>
        </div>
        <Footer />
        </div>
        </>
      );
    }

    export default Home;