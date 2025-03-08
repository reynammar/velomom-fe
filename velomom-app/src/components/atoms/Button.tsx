import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    buttonType?: 'button' | 'submit' | 'reset';
    classname?: string;
    isRedirect?: boolean;
    redirectTo?: string;
}

const Button = ({
    children,
    onClick,
    buttonType = 'button',
    classname = '',
    isRedirect = false,
    redirectTo }: ButtonProps) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const handleRedirect = () => {
        if (redirectTo && redirectTo.startsWith('#')) {
            const element = document.querySelector(redirectTo);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    if (isRedirect && redirectTo) {
        return (
            <Link 
                to={redirectTo} 
                className={`transition-all duration-300 cursor-pointer ${classname}`} 
                onClick={handleRedirect}
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={`text-center transition-all duration-300 cursor-pointer ${classname}`}
            type={buttonType}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

export default Button;