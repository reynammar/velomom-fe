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
          'relative flex items-center text-xl font-medium tracking-[0.5%] transition-all duration-200',
          isActive ? 'text-purple800' : 'text-purplesecondary',
          'hover:text-purple500',
          'after:content-[""] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-purple500 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-in-out',
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
