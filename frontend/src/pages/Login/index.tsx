import Footer from '../../components/Footer';
import { ErrorMessage, Formik, Form, Field } from 'formik'
import './login.css'
import * as yup from 'yup'
import axios from 'axios';
import { BASE_URL } from '../../utils/request';
import { useHistory } from 'react-router-dom';
import {  useState } from 'react';




export const Login = () => {

    const hist = useHistory();
    let [profissao, setProfissao] = useState('');


    const handleSubmit = (values: any) => axios.get(`${BASE_URL}${profissao}/validarSenha?login=${values.login}&senha=${values.senha}`).then(() => {
        localStorage.setItem('profissao', JSON.stringify(profissao))
        localStorage.setItem('login', JSON.stringify(values.login));
        localStorage.setItem('senha', JSON.stringify(values.senha));
        hist.push('/')
    }
    ).catch(
        () => {alert('usuário ou senha inválidos!')}
    )


    const validations = yup.object({
        login: yup.string().max(10).required(),
        senha: yup.string().min(8).required()
    })

    console.log(profissao);
    return (
        <>
            <hr />
            <div className="jumbotrom">
               <div className='container-login'>
               <div className='header-tab'>
                    <button type='submit' id='btn-med' className='btn-med' autoFocus onClick={() => {setProfissao('/medicos')}}>Médico</button> 
                    <button type='submit' id='btn-enf' className='btn-enf' onClick={() => {setProfissao('/enfermeiros') ; }}>Enfermeiro</button>
                </div>
                        <Formik initialValues={{}} onSubmit={handleSubmit} class='App-form' validationSchema={validations}>
                            <Form>
                                <div className="Form-Group">
                                    <h5>Usuário</h5>
                                    <Field className="Form-Field"
                                        name="login" />
                                    <ErrorMessage
                                        component="span" name="login" className="Form-Error" ></ErrorMessage>
                                </div>
                                <div className="Form-Group">
                                    <h5>Senha</h5>
                                    <Field className="Form-Field"
                                        name="senha" />
                                    <ErrorMessage
                                        component="span" name="senha" className="Form-Error"></ErrorMessage>
                                </div>
                                <button className="btn btn-primary btn-lg" type="submit">Login</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            <Footer></Footer>
            </>
            );
}

            export default Login;