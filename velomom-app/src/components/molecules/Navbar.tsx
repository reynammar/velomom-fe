import { useState } from 'react';
import NavLink from '../atoms/NavLink';
import Logo from '../atoms/LogoLink';
import Button from '../atoms/Button';
import SubMenu from '../atoms/SubMenu';
import { useScroll } from "../../hooks/useScroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
        { to: '/artikel', label: 'Artikel' },
        { to: '/video', label: 'Video' },
    ];

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between transition-all duration-300 py-3 px-[70px] font-lexend shadow-md ${
                isScrolled ? "bg-primarywhite shadow-lg" : "bg-primarywhite"
            }`}
        >
            <Logo src={logoSrc} alt="Logo" />
            <div className="flex justify-center items-center gap-3 relative">
                <div className="flex mx-6 gap-12">
                    <NavLink to="/">Home</NavLink>
                    <div className="relative">
                        <div
                            className="flex items-center cursor-pointer"
                            onMouseEnter={() => setShowVeloCareSubMenu(true)}
                            onMouseLeave={() => setShowVeloCareSubMenu(false)}
                        >
                            <NavLink to="/">VeloCare</NavLink>
                            <FontAwesomeIcon icon={faChevronDown} className="ml-3 text-purplesecondary" />
                        </div>
                        {showVeloCareSubMenu && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                <SubMenu items={veloCareItems} />
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <div
                            className="flex items-center cursor-pointer"
                            onMouseEnter={() => setShowVeloGuideSubMenu(true)}
                            onMouseLeave={() => setShowVeloGuideSubMenu(false)}
                        >
                            <NavLink to="/#">VeloGuide</NavLink>
                            <FontAwesomeIcon icon={faChevronDown} className="ml-3 text-purplesecondary" />
                        </div>
                        {showVeloGuideSubMenu && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                                <SubMenu items={veloGuideItems} />
                            </div>
                        )}
                    </div>
                    <NavLink to="/velovent">VeloVent</NavLink>
                </div>
                <Button isRedirect={true} redirectTo="/login" classname='bg-primary text-white font-medium text-xl py-2 px-10 rounded-[18px] hover:bg-purple-600 transition-all duration-200 cursor-pointer'>
                    Masuk
                </Button>
                
            </div>
        </nav>
    );
};

export default Navbar;