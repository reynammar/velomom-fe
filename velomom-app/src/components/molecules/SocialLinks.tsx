import { faLinkedin, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,} from '@fortawesome/free-regular-svg-icons'
import Icon from '../atoms/Icon';

const socialLinks = [
    { icon: faInstagram, link: "https://instagram.com", className: "text-purple500 text-xl hover:text-purple800 transition duration-200" },
    { icon: faLinkedin, link: "https://linkedin.com", className: "text-purple500 text-xl hover:text-purple800 transition duration-200" },
    { icon: faTiktok, link: "https://tiktok.com", className: "text-purple500 text-xl hover:text-purple800 transition duration-200" },
    { icon: faYoutube, link: "https://youtube.com", className: "text-purple500 text-xl hover:text-purple800 transition duration-200" },
    { icon: faEnvelope, link: "mailto:velomom@gmail.com", className: "text-purple500 text-xl hover:text-purple800 transition duration-200" },
];

const SocialLinks = () => {
    return (
        <div className="flex space-x-4 gap-8">
            {socialLinks.map((link, index) => (
                <Icon key={index} icon={link.icon} className={link.className} link={link.link} />
            ))}
        </div>
    );
};

export default SocialLinks;