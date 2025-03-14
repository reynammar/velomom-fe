import JournalHeader from '../../molecules/JournalHeader';
import AddJournalButton from '../../molecules/AddJournalButton';
import JournalHistory from '../../molecules/JournalHistory';
import FamilySharing from '../../molecules/FamilySharing';
import emot1 from '../../../assets/images/Emotion.svg'
import emot2 from '../../../assets/images/Emotion2.svg'
import emot3 from '../../../assets/images/Emotion3.svg'
import emot4 from '../../../assets/images/Emotion4.svg'

const journalEntries = [
    {
        emoticon: emot1,
        emotion: 'Frustasi',
        date: 'Senin,',
        fullDate: '27 Juni 2025',
        title: 'Merasa Sangat Kewalahan',
        content: 'Hari ini rasanya benar-benar kacau. Si kecil rewel dari pagi...',
    },
    {
        emoticon: emot2,
        emotion: 'Sedih',
        date: 'Senin,',
        fullDate: '27 Juni 2025',
        title: 'Hari yang Penuh Tantangan',
        content: 'Aku merasa sedikit sedih hari ini. Ada banyak hal yang harus dilakukan...',
    },
    {
        emoticon: emot3,
        emotion: 'Biasa',
        date: 'Senin,',
        fullDate: '27 Juni 2025',
        title: 'Rutinitas Seperti Biasa',
        content: 'Hari ini berjalan seperti biasanya. Tidak ada hal yang terlalu sulit...',
    },
    {
        emoticon: emot4,
        emotion: 'Senang',
        date: 'Senin,',
        fullDate: '27 Juni 2025',
        title: 'Hari yang Lebih Baik',
        content: 'Hari ini cukup menyenangkan. Si kecil sempat tertawa beberapa kali...',
    },
];

const JournalSection = () => {
    return (
        <div className="px-[70px] overflow-hidden py-[120px] flex flex-col gap-5">
            <JournalHeader />
            <AddJournalButton />
            <div className="flex gap-8">
                <JournalHistory entries={journalEntries} />
                <FamilySharing />
            </div>
        </div>
    );
};

export default JournalSection;