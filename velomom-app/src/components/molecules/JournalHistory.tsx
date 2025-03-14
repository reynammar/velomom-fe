import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import JournalEntry from './JournalEntry';
import Button from "../atoms/Button";

interface JournalEntryProps {
    emoticon: string;
    emotion: string;
    date: string;
    fullDate: string;
    title: string;
    content: string;
}

interface JournalHistoryProps {
    entries: JournalEntryProps[];
}

const JournalHistory = ({ entries }: JournalHistoryProps) => {
    return (
        <div className="w-[70%] p-9 shadow-md rounded-3xl flex flex-col gap-[28px]">
            <div className="flex justify-between">
                <h3 className="font-semibold text-[38px] text-purple700">Riwayat Jurnalmu</h3>
                <Button classname="rounded-full px-4 bg-purple500 flex justify-center items-center text-white hover:bg-purple700 transition-all duration-300">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-3xl" />
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {entries.map((entry, index) => (
                    <JournalEntry key={index} entry={entry} />
                ))}
            </div>
            <div className="flex gap-4 items-center mt-6 justify-center">
                <FontAwesomeIcon icon={faChevronDown} className="text-2xl text-purple500 animate-bounce" />
                <Button classname="font-medium text-xl text-purple-900 hover:underline">
                    Lihat selengkapnya
                </Button>
            </div>
        </div>
    );
};

export default JournalHistory;