
interface JournalContentProps {
    title: string;
    content: string;
}

const JournalContent = ({ title, content }: JournalContentProps) => {
    return (
        <div className='flex flex-col gap-2 font-inter'>
            <h6 className='text-purple700 font-bold text-2xl tracking-wide'>{title}</h6>
            <p className='font-medium text-[17px] text-purple900 text-justify leading-[150%]'>{content}</p>
        </div>
    );
};

export default JournalContent;