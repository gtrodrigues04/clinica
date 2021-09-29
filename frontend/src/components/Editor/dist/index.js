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
exports.Editor = void 0;
var axios_1 = require("axios");
var react_router_1 = require("react-router");
var request_1 = require("../../utils/request");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var yup = require("yup");
require("./editor.css");
var api_1 = require("../../serivces/api");
var react_1 = require("react");
exports.Editor = function () {
    var _a, _b, _c;
    var id = react_router_1.useParams().id;
    var _d = react_1.useState([]), Estado = _d[0], setUF = _d[1];
    //Busca lista de estados no IBGE
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
        altura: yup.string().required().max(3, "altura em centímetros"),
        peso: yup.string().required().max(3, "peso em kgs"),
        uf: yup.string().required()
    });
    var _e = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(validationPost)
    }), register = _e.register, handleSubmit = _e.handleSubmit, errors = _e.formState.errors;
    //Edição de lista de pacientes através do put
    var addPost = function (values) {
        ;
        axios_1["default"].put(request_1.BASE_URL + "/pacientes/" + id, values);
        window.location.replace('http://localhost:3000/lista-pacientes');
    };
    return (React.createElement("div", { className: "card-post" },
        React.createElement("div", { className: "card-body-post" },
            React.createElement("form", { onSubmit: handleSubmit(addPost) },
                React.createElement("div", { className: "fields" },
                    React.createElement("label", null, "Nome"),
                    React.createElement("input", __assign({ type: 'text' }, register("nome"))),
                    React.createElement("p", { className: "error-message" }, (_a = errors.nome) === null || _a === void 0 ? void 0 : _a.message)),
                React.createElement("div", { className: "fields" },
                    React.createElement("label", null, "Altura"),
                    React.createElement("input", __assign({ type: 'text' }, register("altura"))),
                    React.createElement("p", { className: "error-message" }, (_b = errors.altura) === null || _b === void 0 ? void 0 : _b.message)),
                React.createElement("div", { className: "fields" },
                    React.createElement("label", null, "Peso"),
                    React.createElement("input", __assign({ type: 'text' }, register("peso"))),
                    React.createElement("p", { className: "error-message" }, (_c = errors.peso) === null || _c === void 0 ? void 0 : _c.message)),
                React.createElement("div", { className: 'btn-post' },
                    React.createElement("button", { type: 'submit' }, "Salvar")),
                React.createElement("div", { className: "fields" },
                    React.createElement("label", null, "UF"),
                    React.createElement("select", __assign({}, register("uf")), Estado.map(function (item) {
                        return (React.createElement("option", null, item.sigla));
                    })))))));
};
