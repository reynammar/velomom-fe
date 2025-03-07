import JournalEntry from './JournalEntry';

interface JournalListProps {
    entries: {
        emoticon: string;
        date: { day: string; fullDate: string };
        judul: string;
        isi: string;
        emotion: string;
    }[];
}

const JournalList = ({ entries }: JournalListProps) => {
    return (
        <div className="flex gap-9 flex-wrap w-[50%]">
            {entries.map((entry, index) => (
                <JournalEntry key={index} {...entry} />
            ))}
        </div>
    );
};

export default JournalList;