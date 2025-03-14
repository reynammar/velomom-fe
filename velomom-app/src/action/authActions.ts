// src/actions/authAction.ts
import { login as apiLogin, register as apiRegister } from '../api/services/auth';

export const handleLogin = async (username: string, password: string) => {
    try {
        const data = await apiLogin(username, password);

        // Jika backend tidak mengirimkan token, bisa dianggap gagal
        if (!data?.token) {
            throw new Error('Login failed: Token not received from server.');
        }

        return data;
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
        const data = await apiRegister(username, password, name);

        if (!data?.token) {
            throw new Error('Registration failed: Token not received from server.');
        }

        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error('Registration failed: ' + error.message);
        } else {
            throw new Error('Registration failed: An unknown error occurred.');
        }
    }
};
