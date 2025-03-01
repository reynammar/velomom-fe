// src/components/LoginForm.tsx
import React from 'react';
import FormHeader from './FormHeader';
import InputField from './InputField';
import ButtonForm from './ButtonForm';

const LoginForm: React.FC = () => {
    return (
        <form action="" className="w-[540px] p-6 mr-4">
            <FormHeader 
                    title="Selamat Datang!" 
                    subtitle="Tidak punya akun?" 
                    linkText="Daftar" 
                    linkHref="/register" 
                />
            <InputField label="Email" type="email" name="email" />
            <InputField label="Password" type="password" name="password" />
            <ButtonForm>
                Masuk
            </ButtonForm>
        </form>
    );
};

export default LoginForm;