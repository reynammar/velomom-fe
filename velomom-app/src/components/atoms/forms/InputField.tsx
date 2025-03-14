import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    classname: string;
    placeholder: string;
    classInput?: string;
    isTextArea?: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const InputField = ({
    classInput = "",
    placeholder,
    label,
    classname,
    type = "text",
    name,
    isTextArea = false,
    value,
    onChange,
    ...rest
}: InputFieldProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prev => !prev);
    };

    return (
        <div className="mb-8">
            <label className={`${classname}`} htmlFor={name}>{label}</label>
            <div className="relative">
                {isTextArea ? (
                    <textarea
                        className={`w-full py-2 px-4 border border-grey500 rounded-lg text-sm font-light text-grey500 focus:border-purple-500 focus:outline-none focus:text-purple900 ${classInput} resize-none`} 
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    />
                ) : (
                    <input
                        type={type === 'password' && !isPasswordVisible ? 'password' : 'text'}
                        className={`w-full py-2 px-4 border border-grey500 rounded-lg text-sm font-light text-grey500 focus:border-purple-500 focus:outline-none focus:text-purple900 ${classInput}`}
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                        {...rest}
                    />
                )}
                {type === 'password' && (
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-2 text-grey500"
                    >
                        <FontAwesomeIcon icon={isPasswordVisible ? faEyeSlash : faEye} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default InputField;
