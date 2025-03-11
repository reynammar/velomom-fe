import emoticon from '../../../assets/images/Emotion2.svg';
import emoticon2 from '../../../assets/images/Emotion4.svg';
import emoticon3 from '../../../assets/images/Emotion.svg';
import JournalCard from '../../molecules/JournalCard';
import JournalContent from '../../molecules/JournalDetailContent';
import Button from '../../atoms/Button';

const JournalDetail = () => {
    return (
        <div className="overflow-hidden flex pt-20 w-full">
            <div className="flex flex-col py-[60px] px-10 gap-8">
                <h4 className="font-semibold text-[32px] text-purple700">Jurnalmu yang Lain</h4>
                <div className="flex flex-col gap-5">
                    <JournalCard
                        emoticon={emoticon}
                        date="Senin, 27 Juni 2025"
                        title="Hari yang Penuh Tantangan"
                        description="Aku merasa sedikit sedih hari ini. Ada banyak hal yang.."
                        mood="Sedih"
                    />
                    <JournalCard
                        emoticon={emoticon2}
                        date="Senin, 27 Juni 2025"
                        title="Momen Bahagia Sederhana"
                        description="Hari ini cukup menyenangkan. Si kecil tertawa begitu..."
                        mood="Bahagia"
                    />
                </div>
            </div>
            <div className='flex flex-col gap-[100px] w-[70%] mx-20 my-12'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex gap-8'>
                            <img src={emoticon3} alt="frustation emoticon" className='w-[200px] h-[200px]' />
                            <div className='flex flex-col gap-1 text-purple700'>
                                <h4 className='font-medium text-3xl'>Senin, 27 Juni 2025</h4>
                                <h4 className='font-bold text-5xl leading-[120%]'>Merasa Sangat Kewalahan</h4>
                            </div>
                        </div>
                        <div className='flex justify-center items-center bg-purple100 px-3 py-1 rounded-xl font-medium text-2xl w-[200px] h-11 text-purple800'>
                            Frustasi
                        </div>
                    </div>
                    <JournalContent 
                        title="Ceritamu" 
                        content="Hari ini rasanya benar-benar kacau. Si kecil rewel dari pagi, aku bahkan belum sempat duduk tenang sejak bangun tidur. Setiap kali aku mencoba menaruhnya di kasur, dia langsung menangis lagi. Aku gendong, aku nyanyikan lagu, aku coba apa saja, tapi tetap saja dia gelisah. Aku bahkan belum makan siang, apalagi mandi. Badanku pegal, kepalaku pening, dan aku merasa benar-benar sendirian menghadapi semua ini. Aku tahu dia tidak bermaksud menyulitkanku, tapi aku kelelahan. Aku ingin ada yang menggantikanku sebentar, setidaknya lima menit saja supaya aku bisa menarik napas. Tapi tidak ada. Aku sendirian di rumah, dan waktu terasa berjalan sangat lambat." 
                    />
                    <JournalContent 
                        title="Perasaanmu" 
                        content="Aku nggak tahu. Aku cuma merasa capek dan ingin menangis. Aku nggak mau dibilang harus sabar atau harus kuat, karena hari ini rasanya aku nggak bisa. Aku cuma berharap besok akan lebih baik, atau setidaknya aku bisa tidur nyenyak malam ini." 
                    />
                </div>
                <div className='flex justify-end w-full'>
                    <Button buttonType='button' classname='border-[1px] border-purple500 rounded-[16px] py-3 px-6 font-medium text-xl w-[228px] text-purple500 hover:bg-purple500 hover:text-white'>
                        Hapus
                    </Button>
                </div>  
            </div>
        </div>
    );
}

export default JournalDetail;