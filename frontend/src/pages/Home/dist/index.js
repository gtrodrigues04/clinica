"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Footer_1 = require("../../components/Footer");
require("./home.css");
var Home = function () {
    var cont = 0;
    if (localStorage.getItem('cont')) {
        cont = 10;
    }
    else {
        window.location.reload();
        localStorage.setItem('cont', JSON.stringify(cont));
    }
    return (React.createElement("div", { className: "jumbotron" },
        React.createElement("hr", null),
        React.createElement("div", { className: 'menu' },
            React.createElement(react_router_dom_1.Link, { to: "/cadastro", className: "btn btn-primary btn-lg" }, "Cadastrar Paciente"),
            localStorage.getItem('profissao') === '/enfermeiro' ?
                cont = 10 : React.createElement(react_router_dom_1.Link, { to: '/enfermeiros', className: "btn btn-primary btn-lg" }, "Cadastrar Enfermeiro(a)"),
            React.createElement(react_router_dom_1.Link, { to: "/lista-pacientes", className: "btn btn-primary btn-lg" }, "Listagem de Pacientes")),
        React.createElement(Footer_1["default"], null)));
};
exports["default"] = Home;
