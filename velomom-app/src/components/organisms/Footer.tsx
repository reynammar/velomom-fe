import logo from '../../assets/images/LogoNav.png';
import Logo from '../atoms/LogoLink';
import SocialLinks from '../molecules/SocialLinks';
import ContactInfo from '../molecules/ContactInfo';
import FooterLink from '../atoms/FooterLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    const pages = [
        { to: "/", label: "Home" },
        { to: "/journaling", label: "Journaling" },
        { to: "/selfcare", label: "Self-care" },
        { to: "/sharestory", label: "Share Story" },
        { to: "/profchat", label: "Professional Chat" },
        { to: "/artikel", label: "Artikel" },
        { to: "/video", label: "Video" },
        { to: "/velovent-page", label: "VeloVent" },
        { to: "/profile", label: "Profile" },
    ];

    return (
        <footer className="w-full bottom-0 left-0 z-40 flex items-center justify-between flex-wrap t-[72px] pt-[70px] px-[70px] gap-16 font-lexend bg-red50">
            <div className="flex justify-center gap-[100px]">
                <div className="flex flex-col gap-8 w-[50%]">
                    <div className="flex flex-col gap-4">
                        <Logo src={logo} alt="Logo" />
                        <p className='font-light text-[17px] leading-8'>
                            VeloMom adalah platform yang mendukung kesejahteraan emosional ibu. Kami berkomitmen membantu ibu melewati tantangan pascapersalinan melalui fitur inovatif dan berbasis empati.
                        </p>
                    </div>
                    <SocialLinks />
                </div>
                <div className='flex flex-col gap-4 w-[15%]'>
                    <h5 className="text-2xl text-purple700 font-semibold">PAGES</h5>
                    <div className="flex flex-col gap-4 text-xl">
                        {pages.map((page, index) => (
                            <FooterLink key={index} to={page.to}>{page.label}</FooterLink>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4 w-[35%]'>
                    <h5 className="text-2xl text-purple700 font-semibold">CONTACT</h5>
                    <ContactInfo />
                </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-5 text-purple900">
                <hr className="border-purple900 w-full border-1" />
                <div className="flex justify-center items-center gap-3 text-[16px]">
                    <FontAwesomeIcon icon={faCopyright} />
                    <p>Copyright 2025. VeloMom Center. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;