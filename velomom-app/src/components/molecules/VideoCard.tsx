import play from '../../assets/images/play.svg';

interface VideoCardProps {
    image: string;
    title: string;
    description: string;
}

const VideoCard = ({ image, title, description }: VideoCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-2 rounded-[22.5px] p-6 shadow-md relative">
            <img src={image} alt={title} className="rounded-[10px] w-full h-[222px] object-cover" />
            <div className="flex flex-col gap-1">
                <p className="font-semibold text-[18px] text-secondary leading-7">{title}</p>
                <p className="text-[15px] leading-6 text-[#666666]">{description}</p>
            </div>
            <div className="absolute top-20 left-[145px]">
                <img src={play} alt="play button" className="w-[93px]" />
            </div>
        </div>
    );
};

export default VideoCard;