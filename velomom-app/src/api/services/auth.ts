import api from '../core/core';


export const login = async (username: string, password: string) => {
    const response = await api.post('/login', { username, password });
    return response.data;
};


export const register = async (username: string, password: string, name: string) => {
    const response = await api.post('/register', { username, password, name });
    return response.data;
};