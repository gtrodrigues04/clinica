import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    let btn = 'Bem Vindo!';

    if (localStorage.getItem('login')) {
        btn = 'Logout'
    }
    
    function LoadBtn() {
        window.location.reload()
        btn = 'Bem vindo!';
        localStorage.clear();
    }

    console.log(btn)
    return (
        <div className='container'>
            <Link to="/"><h1 className="text-primary py-3">Sistema Clínica Médica</h1></Link>
            <Link to="/login"><button onClick={LoadBtn}>{btn}</button></Link>
        </div>

    );
}
export default Header;