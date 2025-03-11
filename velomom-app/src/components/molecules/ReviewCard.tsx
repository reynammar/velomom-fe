import { Rate } from 'antd';

interface UserReviewCardProps {
    userName: string;
    userPhoto: string;
    rating: number;
    comment: string;
}

const UserReviewCard = ({ userName, userPhoto, rating, comment }: UserReviewCardProps) => {
    return (
        <div className="flex flex-col rounded-2xl p-4 gap-4 bg-white/60 w-full min-h-[214px] drop-shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-4">
                <img 
                    src={userPhoto} 
                    alt={userName}
                    className="w-[76px] h-[76px] object-cover rounded-full" 
                />
                <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-third">{userName}</h3>
                    <Rate disabled value={rating}/>
                </div>
            </div>
            <p className="text-secondary font-light text-[19px] leading-7 flex-1 text-justify">
                {comment}
            </p>
        </div>
    );
};

export default UserReviewCard;