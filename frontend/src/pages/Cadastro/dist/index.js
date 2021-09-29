"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Cadastro = void 0;
/* eslint-disable react/jsx-no-comment-textnodes */
var axios_1 = require("axios");
var request_1 = require("../../utils/request");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var yup = require("yup");
require("./post.css");
var api_1 = require("../../serivces/api");
var react_1 = require("react");
exports.Cadastro = function () {
    var _a, _b, _c, _d, _e, _f;
    var _g = react_1.useState([]), Estado = _g[0], setUF = _g[1];
    //Busca a lista de Estados no site do IBGE
    react_1.useEffect(function () {
        function loadUF() {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, api_1["default"].get('/api/v1/localidades/estados/')];
                        case 1:
                            response = _a.sent();
                            setUF(response.data);
                            return [2 /*return*/];
                    }
                });
            });
        }
        loadUF();
    }, []);
    var validationPost = yup.object({
        nome: yup.string().required("O nome é obrigatório").max(40, "O nome precisa ter menos de 40 caracteres"),
        cpf: yup.string().required("O CPF é obrigatório").max(11, "11 digitos obrigatórios").min(11, "11 digitos obrigatórios"),
        date_nasc: yup.string().required("A data é obrigatória"),
        altura: yup.string().required("A altura é obrigatória").max(4, "Até 4 caracteres permitidos"),
        peso: yup.string().required("O peso é obrigatório").max(5, "Até 5 caractéres permitidos"),
        uf: yup.string().required()
    });
    var _h = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(validationPost)
    }), register = _h.register, handleSubmit = _h.handleSubmit, errors = _h.formState.errors;
    //adiciona os valores do formulário na tabela Pacientes
    var addPost = function (values) { return axios_1["default"].post(request_1.BASE_URL + "/pacientes", values); };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "jumbotron" },
            React.createElement("p", { className: "lead" }, "Sistema para cadastro de Pacientes"),
            React.createElement("hr", null)),
        React.createElement("main", null,
            React.createElement("div", { className: "card-post" },
                React.createElement("div", { className: "card-body-post" },
                    React.createElement("form", { onSubmit: handleSubmit(addPost) },
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "Nome"),
                            React.createElement("input", __assign({ type: 'text' }, register("nome"))),
                            React.createElement("p", { className: "error-message" }, (_a = errors.nome) === null || _a === void 0 ? void 0 : _a.message)),
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "CPF"),
                            React.createElement("input", __assign({ type: 'text' }, register("cpf"))),
                            React.createElement("p", { className: "error-message" }, (_b = errors.cpf) === null || _b === void 0 ? void 0 : _b.message)),
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "Data Nascimento"),
                            React.createElement("input", __assign({ type: 'date' }, register('date_nasc'))),
                            React.createElement("p", { className: "error-message" }, (_c = errors.date_nasc) === null || _c === void 0 ? void 0 : _c.message)),
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "Altura"),
                            React.createElement("input", __assign({ type: 'text' }, register("altura"))),
                            React.createElement("p", { className: "error-message" }, (_d = errors.altura) === null || _d === void 0 ? void 0 : _d.message)),
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "Peso"),
                            React.createElement("input", __assign({ type: 'text' }, register("peso"))),
                            React.createElement("p", { className: "error-message" }, (_e = errors.peso) === null || _e === void 0 ? void 0 : _e.message)),
                        React.createElement("div", { className: "fields" },
                            React.createElement("label", null, "UF"),
                            React.createElement("select", __assign({}, register("uf")), Estado.map(function (item) {
                                return (React.createElement("option", null, item.sigla));
                            })),
                            React.createElement("p", { className: "error-message" }, (_f = errors.peso) === null || _f === void 0 ? void 0 : _f.message)),
                        React.createElement("div", { className: "btn-post" },
                            React.createElement("button", { type: "submit" }, " Enviar ")))))),
        React.createElement("div", { className: "container-foot" },
            React.createElement("p", null,
                "App desenvolvido por ",
                React.createElement("a", { href: "https://github.com/gtrodrigues04", target: "_blank", rel: "noreferrer" }, "Guilherme Teixeira")))));
};
