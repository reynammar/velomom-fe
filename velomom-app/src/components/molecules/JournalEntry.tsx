import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../atoms/forms/ButtonForm";

interface JournalEntryProps {
    emoticon: string;
    date: { day: string; fullDate: string };
    judul: string;
    isi: string;
    emotion: string;
}

const JournalEntry = ({ emoticon, date, judul, isi, emotion }: JournalEntryProps) => {
    return (
        <div className="py-4 px-7 rounded-3xl bg-purple50">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <img src={emoticon} alt={emotion} className="w-[124px]" />
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col gap-0.5 text-purple900">
                            <p className="font-light text-[16px]">{date.day},</p>
                            <h6 className="font-light text-xl">{date.fullDate}</h6>
                        </div>
                        <div className="bg-purple100 py-1 px-6 rounded-xl flex justify-center items-center font-light text-[18px]">{emotion}</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-purple900">
                    <h6 className="font-semibold text-xl">{judul}</h6>
                    <p className="font-light text-[15px]">{isi}</p>
                </div>
                <Button buttonType='button'>Lihat</Button>
            </div>
        </div>
    );
};

export default JournalEntry;