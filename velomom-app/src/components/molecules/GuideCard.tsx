import play from '../../assets/images/play.svg';    

interface GuideCardProps {
    image: string;
    date: string;
    title: string;
    description: string;
}

const GuideCard = ({ image, date, title, description }: GuideCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-2 rounded-[22.5px] p-6 shadow-md relative">
            <img src={image} alt={title} className="rounded-t-[22.5px] w-[372px] h-[152px]" />
            <div className="flex flex-col gap-1">
                <div>
                    <p className="font-medium text-[12px] text-grey500">{date}</p>
                    <p className="font-semibold text-[18px] text-secondary leading-7">{title}</p>
                </div>
                <p className="text-[15px] leading-6 text-gray900">{description}</p>
            </div>
        </div>
    );
};

export default GuideCard;