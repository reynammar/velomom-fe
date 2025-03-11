import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import mic from '../../../assets/images/mic.svg'
import Icon from '../../atoms/Icon'
import SearchBar from '../../molecules/SearchBar'
import image from '../../../assets/images/slider-image.jpg'
const VeloVent = () => {
    return(
        <div className="px-[70px] overflow-hidden pt-[90px] pb-24 flex flex-col gap-10 w-full">
            {/* Header */}
            <div className="w-full">
                <div className="flex flex-col">
                    <div className="flex gap-[200px] items-center">
                        <div className="flex flex-col gap-6">
                            <div className='flex flex-col gap-5'>
                                <h1 className='font-bold text-6xl text-purple500'>VeloVent</h1>
                                <p className='font-light text-[18px] text-purple900'>Velovent menghadirkan webinar dan diskusi interaktif seputar baby blues dan kesejahteraan ibu</p>
                            </div>
                            <SearchBar/>
                        </div>
                        <div className='w-[35%] justify-center relative overflow-hidden'>
                        <div className="flex p-20 justify-center z-20 relative">
                            <img src={mic} alt="mic image" className="relative z-30 w-16" />
                        </div>
                        <div className='absolute p-10 rounded-full bg-blue-300 top- right-3 z-10'>
                            <div className=' rounded-full bg-white top-20 z-10'>
                            </div>
                        </div>
                    </div>
                    </div>
                    <hr className="border-2 border-pinkprimary" />
                </div>
            </div>

            {/* Card & Aside*/}
            <div className='flex gap-6'>
                {/* Card */}
                <div className='flex flex-col gap-14'>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-semibold text-4xl text-purple700'>Diselenggarakan VeloVent</h2>
                        <div className='flex flex-col gap-12'>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-purple100 py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-[#CEB0FA] py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-primary' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-primary' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-primary' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-secondary tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-[#CEB0FA] py-1 px-6 rounded-xl w-[124px] h-9 text-purplesecondary font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <h2 className='font-semibold text-4xl text-purple700'>Event Lainnya</h2>
                        <div className='flex flex-col gap-12'>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-[#CEB0FA] py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-purple100 py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12 shadow-md">
                                <img src={image} alt="slider image" className="rounded-3xl w-[272px] h-96"/>
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-4xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[18px] leading-7">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-[#CEB0FA] py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-xl">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Aside */}
                <div className="w-[60%] flex gap-5 pl-7 border-l-2 border-pinkprimary ">
                    <div className="flex flex-col gap-4">
                        <h5 className="font-semibold text-4xl leading-[150%] text-purple700">Event Terdaftar</h5>
                        <div className='flex flex-col gap-5'>
                            <div className="bg-white flex items-center px-7 py-6 rounded-2xl gap-12 shadow-md">
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-2xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[15px] leading-[150%] line-clamp-2">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-purple100 py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white flex items-center px-7 py-6 rounded-2xl gap-12 shadow-md">
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-2xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[15px] leading-[150%] line-clamp-2">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className="bg-purple100 py-1 px-6 rounded-xl w-[124px] h-9 text-purple800 font-medium text-[18px] flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex gap-2">
                                            <Icon icon={faCalendarDays} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">Minggu, 22 Oktober 2025</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faClock} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">13.00 - 16.00</h6>
                                        </div>
                                        <div className="flex gap-2">
                                            <Icon icon={faLocationDot} className='text-purple500' link="" />
                                            <h6 className="font-medium text-[18px]">Online</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default VeloVent