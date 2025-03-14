import api from '../core/core';


export const login = async (email: string, password: string) => {
    const response = await api.post('login', { email, password });
    return response.data;
};


export const register = async (email: string, password: string, name: string) => {
    const response = await api.post('register', { email, password, name });
    return response.data;
};