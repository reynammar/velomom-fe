import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    icon?: any;
}

const NavLink = ({ to, children, icon }: NavLinkProps) => {
    return (
        <RouterNavLink 
            to={to} 
            className= "flex items-center text-purplesecondary text-xl font-medium tracking-[0.5%]"
        >
            {icon && <FontAwesomeIcon icon={icon} className="mx-10" />}
            {children}
        </RouterNavLink>
    );
};

export default NavLink;