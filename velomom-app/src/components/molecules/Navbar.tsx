import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Logo from '../atoms/LogoLink';
import SubMenu from '../atoms/SubMenu';
import Button from '../atoms/Button';
import { useScroll } from '../../hooks/useScroll';

interface NavbarProps {
    logoSrc: string;
}

const Navbar = ({ logoSrc }: NavbarProps) => {
    const { isScrolled } = useScroll();
    const [showVeloCareSubMenu, setShowVeloCareSubMenu] = useState(false);
    const [showVeloGuideSubMenu, setShowVeloGuideSubMenu] = useState(false);

    const veloCareItems = [
        { to: '/journaling', label: 'Journaling' },
        { to: '/self-care', label: 'Self-Care' },
        { to: '/share-story', label: 'Share Story' },
        { to: '/professional-chat', label: 'Professional Chat' },
    ];

    const veloGuideItems = [
        { to: '/article-page', label: 'Artikel' },
        { to: '/video-page', label: 'Video' },
    ];

    const toggleVeloCareSubMenu = () => {
        setShowVeloCareSubMenu((prev) => !prev);
        setShowVeloGuideSubMenu(false);
    };

    const toggleVeloGuideSubMenu = () => {
        setShowVeloGuideSubMenu((prev) => !prev);
        setShowVeloCareSubMenu(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.submenu-container')) {
                setShowVeloCareSubMenu(false);
                setShowVeloGuideSubMenu(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 py-3 px-[70px] font-lexend shadow-md ${
                isScrolled ? "bg-red50 shadow-lg" : "bg-red50"
            }`}
        >
            <Logo src={logoSrc} alt="Logo" />
            <div className="flex justify-center items-center gap-3 relative">
                <div className="flex mx-6 gap-12">
                    <NavLink to="/">Home</NavLink>
                    <div className="relative submenu-container">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={toggleVeloCareSubMenu}
                        >
                            <NavLink to="/">VeloCare</NavLink>
                            <FontAwesomeIcon icon={showVeloCareSubMenu ? faChevronUp : faChevronDown} className="ml-3 text-purple800" />
                        </div>
                        {showVeloCareSubMenu && (
                            <SubMenu items={veloCareItems} />
                        )}
                    </div>
                    <div className="relative submenu-container">
                        <div
                            className="flex items-center cursor-pointer"
                            onClick={toggleVeloGuideSubMenu}
                        >
                            <NavLink to="/#">VeloGuide</NavLink>
                            <FontAwesomeIcon icon={showVeloGuideSubMenu ? faChevronUp : faChevronDown} className="ml-3 text-purple800" />
                        </div>
                        {showVeloGuideSubMenu && (
                            <SubMenu items={veloGuideItems} />
                        )}
                    </div>
                    <NavLink to="/velovent-page">VeloVent</NavLink>
                </div>
                <Button 
                    isRedirect={true} 
                    redirectTo="/login" 
                    classname='bg-purple500 text-white font-medium text-xl py-2 px-10 rounded-[18px] hover:bg-purple700 transition-all duration-200 cursor-pointer'>
                    Masuk
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;