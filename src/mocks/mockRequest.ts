import { Request } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export const makeMockRequest = ({ params, query, body }: { params?: ParamsDictionary, query?: any, body?: any }): Request => {
    const request = {
        params: params || {},
        query: query || {},
        body: body || {}
    } as unknown as Request;

    return request;
}