import { login as apiLogin, register as apiRegister } from '../api/services/auth';

export const handleLogin = async (username: string, password: string) => {
    try {
        const response = await apiLogin(username, password);
        
        if (response.status !== 200) {
            throw new Error('Unexpected response status: ' + response.status);
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Login failed: ' + error.message);
        } else {
            throw new Error('Login failed: An unknown error occurred.');
        }
    }
};

export const handleRegister = async (username: string, password: string, name: string) => {
    try {
        const response = await apiRegister(username, password, name);
        
        if (response.status !== 200) {
            throw new Error('Unexpected response status: ' + response.status);
        }

        return response.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Registration failed: ' + error.message);
        } else {
            throw new Error('Registration failed: An unknown error occurred.');
        }
    }
};