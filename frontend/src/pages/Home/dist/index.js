"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var Footer_1 = require("../../components/Footer");
require("./home.css");
var Home = function () {
    var _a;
    //artifício para controlar nome do botão login/logout
    var cont = 0;
    if (localStorage.getItem('cont')) {
        cont = 10;
    }
    else {
        window.location.reload();
        localStorage.setItem('cont', JSON.stringify(cont));
    }
    //artifício para ocultar botão "cadastrar enfermeiro" para usuários de enfermeiros(a)
    var divcontrol = (_a = document.getElementById('btn-control')) === null || _a === void 0 ? void 0 : _a.hidden;
    var medico = localStorage.getItem('profissao');
    var control = "'/medicos'";
    (medico === null || medico === void 0 ? void 0 : medico.length) !== control.length ? divcontrol = true : divcontrol = false;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "jumbotron" },
            React.createElement("hr", null),
            React.createElement("div", { className: 'menu' },
                React.createElement(react_router_dom_1.Link, { to: "/cadastro", className: "btn btn-primary btn-lg" }, "Cadastrar Paciente"),
                React.createElement("div", { className: 'div-control', id: 'btn-control', hidden: divcontrol },
                    React.createElement(react_router_dom_1.Link, { to: '/cadastro-enf', hidden: divcontrol, className: "btn btn-primary btn-lg" }, "Cadastrar Enfermeiro(a)")),
                React.createElement(react_router_dom_1.Link, { to: "/lista-pacientes", className: "btn btn-primary btn-lg" }, "Listagem de Pacientes")),
            React.createElement(Footer_1["default"], null))));
};
exports["default"] = Home;
