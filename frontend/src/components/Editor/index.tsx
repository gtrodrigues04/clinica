import axios from 'axios'
import { useParams } from 'react-router';
import { BASE_URL } from '../../utils/request';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import './editor.css'
import api from '../../serivces/api';
import { useEffect, useState } from 'react';

export const Editor = () => {

    const { id } = useParams<{ id?: string }>();

    
  const [Estado, setUF] = useState<any[]>([]);
  //Busca lista de estados no IBGE
  useEffect(() => {
    async function loadUF() {
       const response = await api.get('/api/v1/localidades/estados/')
       setUF(response.data);
     }
    loadUF();
   }, [])

    const validationPost = yup.object({
        nome: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
        altura: yup.string().required().max(3, "altura em centímetros"),
        peso: yup.string().required().max(3, "peso em kgs"),
        uf: yup.string().required()
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });
    //Edição de lista de pacientes através do put
    const addPost = (values: any) => {
        ;
        axios.put(`${BASE_URL}/pacientes/${id}`, values)
            ;
        window.location.replace('http://localhost:3000/lista-pacientes')
    }

    return (
        <div className="card-post">
            <div className="card-body-post">
                <form onSubmit={handleSubmit(addPost)}>
                    <div className="fields">
                        <label>Nome</label>
                        <input type='text' {...register("nome")} />
                        <p className="error-message">{errors.nome?.message}</p>
                    </div>
                    <div className="fields">
                        <label>Altura</label>
                        <input type='text' {...register("altura")} />
                        <p className="error-message">{errors.altura?.message}</p>
                    </div>
                    <div className="fields">
                        <label>Peso</label>
                        <input type='text' {...register("peso")} />
                        <p className="error-message">{errors.peso?.message}</p>
                    </div>
                    <div className='btn-post'>
                        <button type='submit'>Salvar</button>
                    </div>
                    <div className="fields">
                        <label>UF</label>
                        <select {...register("uf")}>
                        {Estado.map((item) => {
                             return (
                                <option>{item.sigla}</option>
                            );
                         })}
                         </select>
                    </div>
                </form>
            </div>
        </div>
    )
}


