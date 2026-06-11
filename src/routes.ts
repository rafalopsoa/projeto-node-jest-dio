import { Router } from 'express';
import { UsersController } from './controllers/usersController'; // 1. Importa a Classe com 'U' maiúsculo

const routes = Router();

// 2. Cria uma instância do seu controller
const usersController = new UsersController(); 

// 3. Aponta as rotas para os métodos da instância
routes.post('/users', usersController.criarUsuario);
routes.get('/users', usersController.listarUsuarios);

// Exporte as rotas para usar no seu index.ts principal
export { routes };