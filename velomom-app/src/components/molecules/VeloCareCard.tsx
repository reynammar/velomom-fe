
interface VeloCareCardProps {
    icon: string;
    title: string;
    description: string;
}

const CareCard = ({ icon, title, description }: VeloCareCardProps) => {
    return (
        <div className="bg-white/30 text-purple900 pt-[88px] pb-6 px-6 relative w-1/2 flex justify-center items-center flex-col gap-1 rounded-lg z-20">
            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10"></div>
            <img src={icon} className="w-[120px] absolute -top-14 z-30" alt={title} />
            <h4 className="font-medium text-[32px]">{title}</h4>
            <h5 className="font-light text-2xl leading-9">{description}</h5>
        </div>
    );
};

export default CareCard;