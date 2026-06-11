import { Response } from 'express';
import { jest } from '@jest/globals';

export type MockResponse<TResult = unknown> = Response & {
    state: {
        status?: number;
        json?: TResult | unknown;
    };
};

export function makeMockResponse<TResult>(): MockResponse<TResult> {
    const response = {
        state: {}
    } as MockResponse<TResult>;

    // Passamos a implementação direto no jest.fn() para o Jest entender a assinatura,
    // e usamos o 'as any' para o TypeScript não brigar com a falta do 'state' no retorno nativo do Express.
    response.status = jest.fn((status: number) => {
        response.state.status = status;
        return response;
    }) as any;

    response.json = jest.fn((json: TResult | unknown) => {
        response.state.json = json;
        return response;
    }) as any;

    return response;
}