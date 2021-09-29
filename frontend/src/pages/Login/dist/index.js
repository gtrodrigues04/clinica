"use strict";
exports.__esModule = true;
exports.Login = void 0;
var Footer_1 = require("../../components/Footer");
var formik_1 = require("formik");
require("./login.css");
var yup = require("yup");
var axios_1 = require("axios");
var request_1 = require("../../utils/request");
var react_router_dom_1 = require("react-router-dom");
var react_1 = require("react");
exports.Login = function () {
    var hist = react_router_dom_1.useHistory();
    var _a = react_1.useState(''), profissao = _a[0], setProfissao = _a[1];
    //Busca os dados na API e verifica se são válidos
    //Salva login e senha no localStorage para validar navegação
    var handleSubmit = function (values) { return axios_1["default"].get("" + request_1.BASE_URL + profissao + "/validarSenha?login=" + values.login + "&senha=" + values.senha).then(function () {
        localStorage.setItem('profissao', JSON.stringify(profissao));
        localStorage.setItem('login', JSON.stringify(values.login));
        localStorage.setItem('senha', JSON.stringify(values.senha));
        hist.push('/');
    })["catch"](function () { alert('usuário ou senha inválidos!'); }); };
    var validations = yup.object({
        login: yup.string().max(10).required(),
        senha: yup.string().min(8).required()
    });
    console.log(profissao);
    return (React.createElement(React.Fragment, null,
        React.createElement("hr", null),
        React.createElement("div", { className: "jumbotrom" },
            React.createElement("div", { className: 'container-login' },
                React.createElement("div", { className: 'header-tab' },
                    React.createElement("button", { type: 'submit', id: 'btn-med', className: 'btn-med', autoFocus: true, onClick: function () { setProfissao('/medicos'); } }, "M\u00E9dico"),
                    React.createElement("button", { type: 'submit', id: 'btn-enf', className: 'btn-enf', onClick: function () { setProfissao('/enfermeiros'); } }, "Enfermeiro")),
                React.createElement(formik_1.Formik, { initialValues: {}, onSubmit: handleSubmit, "class": 'App-form', validationSchema: validations },
                    React.createElement(formik_1.Form, null,
                        React.createElement("div", { className: "Form-Group" },
                            React.createElement("h5", null, "Usu\u00E1rio"),
                            React.createElement(formik_1.Field, { className: "Form-Field", name: "login" }),
                            React.createElement(formik_1.ErrorMessage, { component: "span", name: "login", className: "Form-Error" })),
                        React.createElement("div", { className: "Form-Group" },
                            React.createElement("h5", null, "Senha"),
                            React.createElement(formik_1.Field, { className: "Form-Field", name: "senha" }),
                            React.createElement(formik_1.ErrorMessage, { component: "span", name: "senha", className: "Form-Error" })),
                        React.createElement("button", { className: "btn btn-primary btn-lg", type: "submit" }, "Login"))))),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = exports.Login;
