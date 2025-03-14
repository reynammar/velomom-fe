// src/components/molecules/LoginForm.tsx
import React, { useState } from 'react';
import FormHeader from '../atoms/forms/FormHeader';
import InputField from '../atoms/forms/InputField';
import Button from '../atoms/Button';

const dummyAccounts = [
    { email: 'user@example.com', password: 'password123' },
    { email: 'admin@example.com', password: 'admin123' },
];

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(''); // Reset error message

        // Verifikasi kredensial
        const account = dummyAccounts.find(acc => acc.email === email && acc.password === password);
        if (account) {
            console.log("Login successful");
            // Lakukan tindakan setelah login berhasil, seperti redirect atau menyimpan token
        } else {
            setError('Email atau password salah');
        }
    };

    return (
        <form className="w-[540px] p-6 mr-4" onSubmit={handleLogin}>
            <FormHeader 
                title="Selamat Datang!" 
                subtitle="Tidak punya akun?" 
                linkText="Daftar" 
                linkHref="/register" 
            />
            {error && <p className="text-red-500 mb-4">{error}</p>} {/* Tampilkan pesan error */}
            <InputField 
                label="Email" 
                type="email" 
                name="email" 
                classname='block text-xl font-bold mb-1 text-purple700' 
                placeholder='Masukkan email'
                onChange={(e) => setEmail(e.target.value)} // Menangkap nilai email
            />
            <InputField 
                label="Password" 
                type="password" 
                name="password" 
                classname='block text-xl font-bold mb-1 text-purple700' 
                placeholder='Masukkan password'
                onChange={(e) => setPassword(e.target.value)} // Menangkap nilai password
            />
            <Button buttonType='submit' classname='w-full py-3 px-6 bg-purple500 text-white rounded-2xl hover:bg-purple700 transition-all duration-300 cursor-pointer'>
                Masuk
            </Button>
        </form>
    );
};

export default LoginForm;