// src/components/atoms/NavigationButton.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavigationButtonProps {
    icon: any;
    onClick: () => void;
    className?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ icon, onClick, className }) => {
    return (
        <FontAwesomeIcon
            icon={icon}
            className={`border-[2px] border-purple500 rounded-full py-[7px] px-2 text-purple500 hover:bg-purple500 hover:text-white transition-all duration-200 cursor-pointer ${className}`}
            onClick={onClick}
        />
    );
};

export default NavigationButton;