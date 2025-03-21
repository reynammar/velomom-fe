// src/components/organisms/home/VelocareSection.tsx
import { Link } from 'react-router-dom';
import icon from '../../../assets/images/illustrations velocare.svg';
import icon2 from '../../../assets/images/illustrations selfcare.svg';
import icon3 from '../../../assets/images/illustrations sharestory.svg';
import icon4 from '../../../assets/images/illustrations chat.svg';

const VeloCareSection = () => {
    return (
        <section className="w-full flex items-center py-16 px-[70px] bg-purple50 overflow-hidden">
            <div className="flex flex-col w-full gap-[92px]">
                <div className="flex flex-col justify-center text-center gap-6 text-purple700 w-full py-2.5">
                    <h1 className="font-bold text-4xl">Dapatkan dukungan emosional dengan VeloCare</h1>
                    <h5 className="font-medium text-[23px]">
                        VeloCare menghadirkan Journaling, Self-care, Share Story, dan Professional Chat untuk mendukung ibu melewati baby blues dengan lebih tenang.
                    </h5>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-10">
                    <Card
                        to="/journaling"
                        icon={icon}
                        title="Journaling"
                        description="Tuliskan perasaan dan pengalaman harianmu untuk membantu mengenali emosi, mengelola stres, dan melacak perkembangan diri selama masa pasca melahirkan"
                    />
                    <Card
                        to="/selfcare"
                        icon={icon2}
                        title="Self-Care"
                        description="Dapatkan berbagai rekomendasi aktivitas sederhana yang mendukung kesejahteraan fisik dan mental, membantu ibu merasa lebih rileks dan nyaman"
                    />
                    <Card
                        to="/share-story"
                        icon={icon3}
                        title="Share Story"
                        description="Bagikan kisah dan pengalaman pribadi dalam komunitas yang suportif, temukan dukungan serta inspirasi dari sesama ibu yang memahami perjalanan ini."
                    />
                    <Card
                        to="/professional-chat"
                        icon={icon4}
                        title="Professional Chat"
                        description="Konsultasi langsung dengan ahli untuk mendapatkan bimbingan emosional, saran profesional, dan solusi yang sesuai dengan kebutuhan ibu"
                    />
                </div>
            </div>
        </section>
    );
};


interface CardProps {
    to: string,
    icon: string, 
    title: string, 
    description: string
}

const Card = ({ to, icon, title, description }: CardProps) => {
    return (
        <Link
            to={to}
            className="bg-white/30 hover:bg-pink-200/50 text-purple900 pt-[88px] pb-6 px-6 relative flex justify-center items-center flex-col gap-1 rounded-lg z-20 transition-all duration-400 mb-12"
        >
            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10"></div>
            <img src={icon} className="w-[120px] absolute -top-14 z-30" alt={title} />
            <h4 className="font-medium text-[32px]">{title}</h4>
            <h5 className="font-light text-2xl leading-9">{description}</h5>
        </Link>
    );
};

export default VeloCareSection;