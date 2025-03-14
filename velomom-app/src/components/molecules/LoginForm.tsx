import React, { useState } from 'react';
import { handleLogin } from '../../action/authActions';
import FormHeader from '../atoms/forms/FormHeader';
import InputField from '../atoms/forms/InputField';
import Button from '../atoms/Button';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        try {
            const response = await handleLogin(username, password);

            if (response && response.token) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', JSON.stringify(response.user)); // Jika backend kirim data user
                window.location.href = '/home';
            } else {
                setError('Login failed. Invalid credentials or no token received.');
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    return (
        <form className="w-[540px] p-6 mr-4" onSubmit={onSubmit}>
            <FormHeader 
                title="Selamat Datang!" 
                subtitle="Tidak punya akun?" 
                linkText="Daftar" 
                linkHref="/register" 
            />
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <InputField 
                label="Username" 
                type="text" 
                name="username" 
                classname="block text-xl font-bold mb-1 text-purple700" 
                placeholder="Masukkan username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <InputField 
                label="Password" 
                type="password" 
                name="password" 
                classname="block text-xl font-bold mb-1 text-purple700" 
                placeholder="Masukkan password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
                buttonType="submit" 
                classname="w-full py-3 px-6 bg-purple500 text-white rounded-2xl hover:bg-purple700 transition-all duration-300 cursor-pointer"
            >
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
