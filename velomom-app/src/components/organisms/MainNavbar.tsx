import { useState } from 'react';
import Navbar from '../molecules/Navbar';
import image from '../../assets/images/LogoNav.png';

const MainNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <Navbar 
            isLoggedIn={isLoggedIn} 
            onLogin={handleLogin} 
            logoSrc={image}
        />
    );
};

export default MainNavbar;