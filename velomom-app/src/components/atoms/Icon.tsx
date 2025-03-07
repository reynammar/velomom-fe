import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IconProps = {
    icon: any;
    className?: string;
    link: string;
};

const Icon = ({ icon, className, link }: IconProps) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icon} className={className} />
        </a>
    );
};

export default Icon;