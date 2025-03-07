import Button from '../atoms/forms/ButtonForm'

interface JournalCardProps {
    emoticon: string;
    date: string;
    title: string;
    description: string;
    mood: string;
}

const JournalCard = ({ emoticon, date, title, description, mood }: JournalCardProps) => {
    return (
        <div className="py-4 px-7 rounded-3xl bg-secondarywhite">
            <div className="flex flex-col gap-4 rounded-2xl">
                <div className="flex gap-4 items-center">
                    <img src={emoticon} alt={`${mood} emoticon`} className='w-[124px] h-[124px]' />
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-0.5 text-secondary'>
                            <p className='font-light text-[16px]'>{date.split(',')[0]},</p>
                            <h6 className='font-light text-[18px]'>{date.split(',')[1]}</h6>
                        </div>
                        <div className='flex justify-center items-center bg-pinkprimary px-5 py-1 rounded-xl font-light text-[14px]'>
                            {mood}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 text-secondary'>
                    <h6 className='font-semibold text-xl'>{title}</h6>
                    <p className='font-light text-[13px] tracking-tight line-clamp-2'>{description}</p>
                </div>
                <div>
                    <Button buttonType='button'>Lihat</Button>
                </div>
            </div>
        </div>
    );
};

export default JournalCard;