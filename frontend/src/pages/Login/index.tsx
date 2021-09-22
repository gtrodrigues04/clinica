import Footer from '../../components/Footer';
import { ErrorMessage, Formik, Form, Field} from 'formik'
import './login.css'
import * as yup from 'yup'

export const Login = () => {
    const handleSubmit = (values: any) => console.log(values)

    const validations = yup.object({
        user: yup.string().max(10).required(),
        password: yup.string().min(8).required()
    }) 

    return (
        <>
            <hr />
            <div className="jumbotrom">
                <div className='container-login'>
                    <Formik initialValues={{}} onSubmit={handleSubmit} class='App-form' validationSchema={validations}>
                        <Form>
                            <div className="Form-Group">
                                <h5>Usuário</h5>
                                <Field className="Form-Field"
                                name="user"/>
                                <ErrorMessage 
                                    component="span" name="user" className="Form-Error"></ErrorMessage>
                            </div>
                            <div className="Form-Group">
                                <h5>Senha</h5>
                                <Field className="Form-Field"
                                name="password"/>
                                <ErrorMessage 
                                    component="span" name="password" className="Form-Error"></ErrorMessage>
                            </div>
                            <button className="btn btn-primary btn-lg" type="submit">Login</button>
                        </Form>
                    </Formik>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Login;