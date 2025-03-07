import React from 'react';


interface ButtonFormProps {
    children: React.ReactNode;
    buttonType: 'button' | 'submit' | 'reset';
}

const ButtonForm: React.FC<ButtonFormProps> = ({children, buttonType}) => {
    return (
        <button
            className="w-full py-3 px-6 bg-primary text-white rounded-2xl hover:bg-[#6d4d83] transition-all duration-300 cursor-pointer"
            type={buttonType}
        >
            {children}
        </button>
    );
};

export default ButtonForm;