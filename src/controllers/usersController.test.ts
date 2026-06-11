/// <reference types="jest" />

import { UsersController } from './usersController';
import { makeMockRequest } from '../mocks/mockRequest';
import { makeMockResponse } from '../mocks/mockResponse';

describe('UsersController', () => {
    const usersController = new UsersController();

    it('Deve criar um novo usuário', () => {
        const mockReq = makeMockRequest({
            body: { name: 'João TS' }
        });
        const mockRes = makeMockResponse();

        usersController.criarUsuario(mockReq, mockRes);

        expect(mockRes.state.status).toBe(201);
        expect(mockRes.state.json).toMatchObject({ mensagem: 'Usuário João TS criado' });
    });

    it('Não deve criar um usuário sem nome', () => {
        const mockReq = makeMockRequest({
            body: { name: '' } // Simulando envio de nome vazio
        });
        const mockRes = makeMockResponse();

        usersController.criarUsuario(mockReq, mockRes);

        expect(mockRes.state.status).toBe(403);
        expect(mockRes.state.json).toMatchObject({ mensagem: 'Não é possível criar usuários sem um nome' });
    });

    it('Deve listar todos os usuários', () => {
        const mockReq = makeMockRequest({});
        const mockRes = makeMockResponse();

        usersController.listarUsuarios(mockReq, mockRes);

        expect(mockRes.state.status).toBe(200);
        // Garante que retornou um array de acordo com o que estava no database
        expect(Array.isArray(mockRes.state.json)).toBeTruthy(); 
    });
});