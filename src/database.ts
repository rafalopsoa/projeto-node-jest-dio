export interface User {
    name: string;
    email?: string; // O '?' indica que é opcional
}

export const database: User[] = [];