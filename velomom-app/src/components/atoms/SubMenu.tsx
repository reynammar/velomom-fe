import React from 'react';
import { NavLink } from 'react-router-dom';

interface SubMenuProps {
    items: { to: string; label: string }[];
}

const SubMenu = ({ items }: SubMenuProps) => {
    return (
        <div className="absolute left-0 top-13.5 p-5 w-48 bg-white shadow-lg rounded-b-[10px] transition-opacity duration-300 opacity-0 group-hover:opacity-100 gap-4">
            {items.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className="block px-2 py-1 text-third font-medium text-xl hover:text-primary transition duration-200"
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
};

export default SubMenu;