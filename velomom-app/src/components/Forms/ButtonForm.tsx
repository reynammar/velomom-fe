import React from 'react';


interface ButtonFormProps {
    children: React.ReactNode;
}

const ButtonForm: React.FC<ButtonFormProps> = ({children}) => {
    return (
        <button
            className="w-full py-3 px-6 bg-primary text-white rounded-2xl hover:bg-[#6d4d83]"
        >
            {children}
        </button>
    );
};

export default ButtonForm;