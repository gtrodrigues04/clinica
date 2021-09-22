import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <div className='container'>
            <Link to="/"><h1 className="text-primary py-3">Sistema Clínica Médica</h1></Link>
        </div>

    );
}
export default Header;