"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const usersController_1 = require("./controllers/usersController"); // 1. Importa a Classe com 'U' maiúsculo
const routes = (0, express_1.Router)();
exports.routes = routes;
// 2. Cria uma instância do seu controller
const usersController = new usersController_1.UsersController();
// 3. Aponta as rotas para os métodos da instância
routes.post('/users', usersController.criarUsuario);
routes.get('/users', usersController.listarUsuarios);
