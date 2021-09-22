/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import './post.css'
import api from "../../serivces/api";
import { useEffect, useState } from "react";

export const Cadastro = () => {

  const [Estado, setUF] = useState<any[]>([]);

  useEffect(() => {
    async function loadUF() {
       const response = await api.get('/api/v1/localidades/estados/')
       setUF(response.data);
     }
    loadUF();
   }, [])

  const validationPost = yup.object({
    nome: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
    cpf: yup.string().required("O CPF é obrigatório").max(11, "11 digitos obrigatórios").min(11, "11 digitos obrigatórios"),
    date_nasc: yup.string().required("A data é obrigatória"),
    altura: yup.string().required("A altura é obrigatória").max(4, "Até 4 caracteres permitidos"),
    peso: yup.string().required("O peso é obrigatório").max(5, "Até 5 caractéres permitidos"),
    UF: yup.string().required()
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationPost)
  });

  const addPost = (values: any) => axios.post(`${BASE_URL}/pacientes`, values).then(() => {
    console.log(values)
    console.log("Deu certo")
  }).catch(() => {
    console.log(values)
    console.log("Deu erro")
  })

  console.log(Estado)

  return (
    <>
    <div className="jumbotron">
          <p className="lead">Sistema para cadastro de Pacientes</p>
          <hr />
    </div>
    
      <main>
        <div className="card-post">
          <div className="card-body-post">
          <form onSubmit={handleSubmit(addPost)}>
            <div className="fields">
              <label>Nome</label>
              <input type='text'  {...register("nome")}></input>
              <p className="error-message">{errors.nome?.message}</p>
            </div>

            <div className="fields">
              <label>CPF</label>
              <input type='text'  {...register("cpf")}></input>
              <p className="error-message">{errors.cpf?.message}</p>
            </div>

            <div className="fields">
              <label>Data Nascimento</label>
              <input type='date' {...register('date_nasc')}></input>
              <p className="error-message">{errors.date_nasc?.message}</p>
            </div>

            <div className="fields">
              <label>Altura</label>
              <input type='text' {...register("altura")}></input>
              <p className="error-message">{errors.altura?.message}</p>
            </div>

            <div className="fields">
              <label>Peso</label>
              <input type='text' {...register("peso")}></input>
              <p className="error-message">{errors.peso?.message}</p>
            </div>

            <div className="fields">
              <label>UF</label>
              <select {...register("UF")}>
              {Estado.map((item) => {
              return (
                <option>{item.sigla}</option>
              );
              })}
              </select>
            <p className="error-message">{errors.peso?.message}</p>
            </div>

            <div className="btn-post">
              <button type="submit" > Enviar </button>
            </div>

          </form>
          </div>
          </div>
      </main>
      <div className="container-foot">
                <p>App desenvolvido por <a href="https://github.com/gtrodrigues04" target="_blank" rel="noreferrer">Guilherme Teixeira</a></p>
        </div>
    </>
  )
}



