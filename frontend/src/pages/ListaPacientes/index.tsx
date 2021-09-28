import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/request'
import './lista.css'

export const ListaPacientes = () => {

    const [pacientes, setPacientes] = useState<any[]>([]);

    useEffect(() => {
        async function loadLista() {
            let res: any = await axios.get(`${BASE_URL}/pacientes`);
            setPacientes(res.data);
            console.log(res.data);
        }
        loadLista();
    }, []
    )

    return (
        <div className="jumbotron">
            <div className='card-paciente'>
                {pacientes.map((item) => {
                    return (
                        <article key={item.id}>
                            <ul>
                                <li><label>Nome: </label><strong>{item.nome}</strong></li>
                                <li><label>Altura: </label>{item.altura}</li>
                                <li><label>Peso: </label>{item.peso}</li>
                                <li><label>UF: </label>{item.uf}</li>
                            </ul>
                            <div className='Button'>
                                <Link to={`/edit/${item.id}`}><button>Editar</button></Link>
                                <button onClick={() => { axios.delete(`${BASE_URL}/pacientes/${item.id}`); window.location.reload() }}>Excluir</button>
                            </div>
                        </article>
                    )
                })}</div>
            </div>
    )
}

