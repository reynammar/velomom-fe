import icon from '../../../assets/images/clipboard.svg'
import icon2 from '../../../assets/images/emotion-stage2.svg'
import icon3 from '../../../assets/images/checklist.svg'
import icon4 from '../../../assets/images/finish.svg'
import emoticon from '../../../assets/images/Emotion5.svg';
import img from '../../../assets/images/artikel.jpg'
import Button from '../../atoms/Button'
import JournalContent from '../../molecules/JournalDetailContent'
import { Link } from 'react-router-dom';

const TambahJournal3 = () => {
  return (
    <div className='w-full flex pr-primaryPad'>
        {/* Sidebar */}
        <div className="flex flex-col py-14 px-10 gap-8 mt-20 shadow-sidebar">
            {/* Breadcrumbs */}
            <div className="flex flex-col gap-10 relative">
                <div className='border-b-8 border-grey100 w-44 transform rotate-90 absolute top-[155px] right-[150px] z-10'></div>
                <div className='border-b-8 border-purple500 w-64 transform rotate-90 absolute top-[130px] right-[110px] z-20'></div>
                {/* step 1 */}
                <div className="flex pr-2 pl-8 gap-4 items-center z-20">
                    <div className="bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
                        <img src={icon} alt="clipboard-icon" />
                    </div>
                    <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tulis jurnalmu</h6>
                </div>
                {/* step 2 */}
                <div className="flex pr-2 pl-8 gap-4 items-center z-20">
                    <div className="bg-purple500 active:bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
                        <img src={icon2} alt="emotion-icon" />
                    </div>
                    <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Tingkat Emosimu</h6>
                </div>
                {/* step 3 */}
                <div className="flex pr-2 pl-8 gap-4 items-center z-20">
                    <div className="bg-purple500 active:bg-purple500 w-20 h-20 flex justify-center items-center rounded-full">
                        <img src={icon3} alt="checklist-icon" />
                    </div>
                    <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Selesai</h6>
                </div>
            </div>
        </div>

        {/* Form step 3 */}
        <div className='flex flex-col mt-32 mb-10 ml-28 gap-11 w-[60%]'>
            <div className='flex px-36 h-48 rounded-3xl bg-gradient-to-b from-custom1 via-custom2 to-custom3'>
                <div className='flex gap-9 items-center'>
                    <img src={icon4} alt="finish" className='w-28' />
                    <h2 className='font-semibold text-before5xl leading-text2 tracking-text1 text-purple800'>Jurnal Selesai!</h2>
                </div>
            </div>
            <div className='flex flex-col gap-8 py-7 px-8 rounded-3xl shadow-sm'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-8'>
                                        <div className='flex flex-col gap-6'>
                                            <div className='flex gap-8'>
                                                <img src={emoticon} alt="frustation emoticon" className='w-[200px] h-[200px]' />
                                                <div className='flex flex-col gap-1 text-purple700'>
                                                    <h4 className='font-medium text-3xl'>Selasa, 28 Juni 2025</h4>
                                                    <h4 className='font-bold text-5xl leading-[120%]'>Momen Bahagia Sederhana</h4>
                                                </div>
                                            </div>
                                            <div className='flex justify-center items-center bg-purple100 px-3 py-1 rounded-xl font-medium text-2xl w-[200px] h-11 text-purple800'>
                                                Bahagia
                                            </div>
                                        </div>
                                        <JournalContent 
                                            title="Ceritamu" 
                                            content="Hari ini adalah hari yang sangat membahagiakan untukku. Si kecil bangun dengan senyum lebar dan langsung merentangkan tangannya ke arahku, seolah sudah tidak sabar untuk dipeluk. Sejak pagi, dia begitu ceria, tertawa ketika aku menggelitik perutnya, bertepuk tangan saat aku menyanyikan lagu favoritnya. Aku jadi lupa kalau tadi malam sempat kurang tidur, karena melihat wajahnya yang bahagia rasanya lebih dari cukup untuk menghilangkan lelah. Siang ini, dia berhasil berdiri sendiri lebih lama dari biasanya. Aku langsung bertepuk tangan dan memberi semangat, dan dia tertawa sambil berusaha lagi. Aku tidak pernah menyangka bahwa momen sesederhana ini bisa membuatku begitu bahagia." 
                                        />
                                        <JournalContent 
                                            title="Perasaanmu" 
                                            content="Hari ini aku benar-benar menikmati setiap detik bersamanya. Aku merasa hangat, penuh, dan begitu bersyukur. Aku ingin menyimpan momen ini selamanya di hatiku, karena aku tahu waktu akan berlalu cepat, dan aku ingin mengingat betapa indahnya hari ini." 
                                        />
                                    </div>
                </div>
                <div className='flex justify-end'>
                    <Button 
                    classname='bg-purple500 py-3 px-6 text-white rounded-2xl text-xl flex gap-2 w-56 justify-center items-center leading-text1 tracking-text1'
                    isRedirect={true} redirectTo="/"
                    >
                        Bagikan
                    </Button>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h3 className='font-semibold text-4xl leading-text1 tracking-text1 text-purple700'>Rekomendasi aktivitas Self-Care</h3>
                <div className='grid grid-cols-2 gap-5'>
                    <Link to='/'>
                        <div className='flex flex-col p-6 gap-3 rounded-lg bg-purple50 shadow-sm'>
                            <img src={img} alt="" />
                            <div className='flex flex-col gap-1'>
                                <h6 className='font-semibold text-xl leading-text1 tracking-text1 text-purple900'>Jalan Pagi</h6>
                                <p className='font-light text-base leading-text1 tracking-text1 text-gray900'>Kegiatan sederhana yang menyegarkan tubuh, meningkatkan energi, dan membantu ibu merasa lebih positif.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TambahJournal3