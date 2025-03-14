import play from '../../assets/images/play.svg';

interface VideoCardProps {
    thumbnail: string;
    title: string;
    description: string;
}

const VideoCard = ({ thumbnail, title, description }: VideoCardProps) => {
    return (
        <div className="flex flex-col gap-2 rounded-[22.5px] p-6 shadow-md relative hover:bg-purple50 transition-all duration-300 cursor-pointer h-full">
            {/* Thumbnail */}
            <div className="relative">
                <img src={thumbnail} alt={title} className="rounded-[10px] w-full h-[222px] object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={play} alt="play button" className="w-[93px]" />
                </div>
            </div>

            {/* Konten */}
            <div className="flex flex-col flex-grow">
                <p className="font-semibold text-[18px] text-purple900 leading-7 mb-1">{title}</p>
                <p className="text-[15px] leading-6 text-gray900 line-clamp-2 text-justify">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default VideoCard;
