import React, { useState } from 'react';
import { login } from '../../api/services/auth';
import FormHeader from '../atoms/forms/FormHeader';
import InputField from '../atoms/forms/InputField';
import Button from '../atoms/Button';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Mencegah reload halaman
        setError(''); // Reset error state

        try {
            const response = await login(username, password); // Panggil fungsi handleLogin
            
            // Memeriksa status respons
            if (response && response.status === 200) {
                // Jika login berhasil, simpan token atau lakukan navigasi
                localStorage.setItem('token', response.data.token); // Simpan token di localStorage
                window.location.href = '/home'; // Redirect ke halaman home
            } else {
                setError('Login failed. Please check your credentials.'); // Set error message
            }
        } catch (err) {
            // Menangani kesalahan dengan pemeriksaan tipe
            if (err instanceof Error) {
                setError(err.message); // Set error message dari error
            } else {
                setError('An unknown error occurred.'); // Pesan kesalahan umum
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
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Tampilkan pesan kesalahan */}
            <InputField 
                label="Username" 
                type="text" 
                name="username" 
                classname='block text-xl font-bold mb-1 text-purple700' 
                placeholder='Masukkan username'
                onChange={(e) => setUsername(e.target.value)} // Update state username
            />
            <InputField 
                label="Password" 
                type="password" 
                name="password" 
                classname='block text-xl font-bold mb-1 text-purple700' 
                placeholder='Masukkan password'
                onChange={(e) => setPassword(e.target.value)} // Update state password
            />
            <Button buttonType='submit' classname='w-full py-3 px-6 bg-purple500 text-white rounded-2xl hover:bg-purple700 transition-all duration-300 cursor-pointer'>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;