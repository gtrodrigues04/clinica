import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import './post.css'
import { useState } from "react";

export const Cadastro_Enf = () => {

    const validationPost = yup.object({
        nome: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
        cpf: yup.string().required("O CPF é obrigatório").max(11, "11 digitos obrigatórios").min(11, "11 digitos obrigatórios"),
        login: yup.string().required("O login é obrigatório").max(12, "Até 12 caracteres permitidos"),
        senha: yup.string().required("A senha é obrigatória").min(8, "mínimo de 8 caracteres")
    });

    const [senha, setSenha] = useState('');
    const [senha_repeat, setSenhaRepeat] = useState('');
    


    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationPost)
    });

    const addPost = 

        (values: any) => senha === senha_repeat ? 
            axios.post(`${BASE_URL}/enfermeiros`, values) : alert('As senhas não conferem!')  
    
        return (
        <>
            <div className="jumbotron">
                <p className="lead">Cadastro de Enfermeiro(a)</p>
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
                                <label>Usuário</label>
                                <input type='text' {...register('login')}></input>
                                <p className="error-message">{errors.login?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Senha</label>
                                <input type='text' id='senha' {...register("senha")} 
                                onChange={e => setSenha(e.target.value)}></input>
                                <p className="error-message">{errors.senha?.message}</p>
                            </div>
                            <div className="fields">
                                <label>Repita a senha</label>
                                <input type='text' id='senha_repeat'
                                    onChange={e => setSenhaRepeat(e.target.value)} />
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



