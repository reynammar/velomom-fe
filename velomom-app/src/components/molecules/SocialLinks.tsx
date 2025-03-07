import { faLinkedin, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,} from '@fortawesome/free-regular-svg-icons'
import Icon from '../atoms/Icon';

const socialLinks = [
    { icon: faInstagram, link: "https://instagram.com", className: "text-primary text-xl hover:text-pink-500 transition duration-200" },
    { icon: faLinkedin, link: "https://linkedin.com", className: "text-primary text-xl hover:text-blue-500 transition duration-200" },
    { icon: faTiktok, link: "https://tiktok.com", className: "text-primary text-xl hover:text-blue-400 transition duration-200" },
    { icon: faYoutube, link: "https://youtube.com", className: "text-primary text-xl hover:text-gray-400 transition duration-200" },
    { icon: faEnvelope, link: "mailto:velomom@gmail.com", className: "text-primary text-xl hover:text-gray-400 transition duration-200" },
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