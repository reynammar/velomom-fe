
interface GuideCardProps {
    imageURL: string;
    createdAt: string;
    title: string;
    summary: string;
}

const GuideCard = ({ imageURL, createdAt, title, summary }: GuideCardProps) => {
    return (
        <div className="flex flex-col justify-between gap-2 rounded-[22.5px] p-6 shadow-md relative hover:bg-purple50 transition-all duration-300 cursor-pointer">
            <img src={imageURL} alt={title} className="rounded-t-[22.5px] w-[372px] h-[152px] object-cover" />
            <div className="flex flex-col gap-1">
                <div>
                    <p className="font-medium text-[12px] text-grey500">{createdAt}</p>
                    <p className="font-semibold text-[18px] text-secondary leading-7">{title}</p>
                </div>
                <p className="text-[15px] leading-6 text-gray900">{summary}</p>
            </div>
        </div>
    );
};

export default GuideCard;