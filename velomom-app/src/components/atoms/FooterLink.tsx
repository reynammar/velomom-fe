import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface FooterLinkProps {
    to: string;
    children: React.ReactNode;
}

const NavLink = ({ to, children }: FooterLinkProps) => {
    return (
        <RouterNavLink 
            to={to} 
            className={({ isActive }) => 
                `text-secondary hover:text-blue-500 ${isActive ? '' : 'font-light'}`
            }
        >
            {children}
        </RouterNavLink>
    );
};

export default NavLink;