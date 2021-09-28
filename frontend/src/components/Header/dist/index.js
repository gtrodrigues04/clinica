"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./header.css");
var Header = function () {
    var btn = 'Bem Vindo!';
    if (localStorage.getItem('login')) {
        btn = 'Logout';
    }
    function LoadBtn() {
        window.location.reload();
        btn = 'Bem vindo!';
        localStorage.clear();
    }
    console.log(btn);
    return (React.createElement("div", { className: 'container' },
        React.createElement(react_router_dom_1.Link, { to: "/" },
            React.createElement("h1", { className: "text-primary py-3" }, "Sistema Cl\u00EDnica M\u00E9dica")),
        React.createElement(react_router_dom_1.Link, { to: "/login" },
            React.createElement("button", { onClick: LoadBtn }, btn))));
};
exports["default"] = Header;
