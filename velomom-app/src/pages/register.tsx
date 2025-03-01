import React from 'react';
import RegisterForm from '../components/LoginPage/RegisterForm';
import image from '../assets/images/Velomom.png';

const RegisterPage: React.FC = () => {
    return (
        <div className="flex h-screen font-lexend">
            <div className="flex-1 flex items-center justify-center">
                <RegisterForm />
            </div>
            <div className="w-1/2 h-min-screen bg-gradient-to-b from-[#dcd1ec] to-[#C8A3FF] flex items-center justify-center">
                <div>
                    <div className='flex justify-center'>
                        <img src={image} alt="Logo Velomom" className='w-[250px]'/>
                    </div>
                    <h1 className='bg-gradient-to-r from-[#6200EE] to-[#d856f1] bg-clip-text text-transparent text-[100px] font-lexend font-bold text-center'>VeloMom</h1>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
