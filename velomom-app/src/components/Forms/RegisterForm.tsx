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
                    subtitle="Sudah punya akun?" 
                    linkText="Masuk" 
                    linkHref="/login" 
                />
            <InputField label="Name" type="text" name="name"/>
            <InputField label="Email" type="email" name="email"/>
            <InputField label="Password" type="password" name="password"/>
            <ButtonForm>
                Daftar
            </ButtonForm>
        </form>
    );
};

export default LoginForm;