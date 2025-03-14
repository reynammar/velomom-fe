import { NavLink } from 'react-router-dom';

interface SubMenuProps {
    items: { to: string; label: string }[];
}

const SubMenu = ({ items }: SubMenuProps) => {
    return (
        <div className="absolute left-0 mt-6 p-5 w-48 bg-white shadow-lg rounded-md transition-all duration-300 ease-in-out">
            {items.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-1 text-purple700 font-medium text-xl hover:border-b-2 hover:border-purple800 transition-all duration-200"
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    );
};

export default SubMenu;