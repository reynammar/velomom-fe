import Button from "../atoms/Button";

interface JournalEntryProps {
    emoticon: string;
    emotion: string;
    date: string;
    fullDate: string;
    title: string;
    content: string;
}

const JournalEntry = ({ entry }: { entry: JournalEntryProps }) => {
    return (
        <div className="py-4 px-7 rounded-3xl bg-purple50">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <img src={entry.emoticon} alt={entry.emotion} className="w-[124px]" />
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0.5 text-purple900">
                            <p className="font-light text-[16px]">{entry.date}</p>
                            <h6 className="font-light text-xl">{entry.fullDate}</h6>
                        </div>
                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px] text-purple800">{entry.emotion}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-purple900">
                    <h6 className="font-semibold text-xl">{entry.title}</h6>
                    <p className="font-light text-[15px]">{entry.content}</p>
                </div>
                <Button buttonType='button' classname="bg-purple500 hover:bg-purple700 rounded-2xl py-3 px-6 w-full flex justify-center items-center text-white text-xl font-medium leading-text1 tracking-text1">
                    Lihat
                </Button>
            </div>
        </div>
    );
};

export default JournalEntry;