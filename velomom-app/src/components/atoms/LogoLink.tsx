import { Link } from 'react-router-dom';

interface LogoProps {
    src: string;
    alt: string;
}

const Logo = ({ src, alt }: LogoProps) => {
    return (
        <Link to="/home">
        <img src={src} alt={alt} className="h-14" />
        </Link>
    );
};

export default Logo;