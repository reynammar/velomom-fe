import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputFieldProps {
    label: string;
    type: string;
    name: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className="mb-8">
            <label className="block text-xl font-bold mb-1 text-third" htmlFor={name}>{label}</label>
            <div className="relative">
                <input
                    type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                    className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-light"
                    placeholder={`Masukkan ${label}`} 
                    name={name} 
                />
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2 text-gray-500"
                    >
                        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;