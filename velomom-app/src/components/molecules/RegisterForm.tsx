import React from 'react';
import FormHeader from '../atoms/FormHeader';
import InputField from '../atoms/InputField';
import ButtonForm from '../atoms/ButtonForm';

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
            <ButtonForm buttonType='submit'>
                Daftar
            </ButtonForm>
        </form>
    );
};

export default LoginForm;