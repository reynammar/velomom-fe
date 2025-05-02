import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: any;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}


const NavLink = ({ to, children, icon, className = '', onClick }: NavLinkProps) => {
    return (
      <RouterNavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          [
            'flex items-center text-xl font-medium tracking-[0.5%] transition-all duration-200',
            isActive ? 'text-purple800' : 'text-purplesecondary',
            'hover:text-purple500',
            className,
          ].join(' ')
        }
      >
        {icon && <FontAwesomeIcon icon={icon} className="mx-10" />}
        {children}
      </RouterNavLink>
    );
  };
  

export default NavLink;
