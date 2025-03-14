import { faCalendarDays, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import Icon from "../../atoms/Icon"
import Button from "../../atoms/Button"
import featureimage from '../../../assets/images/eventdetail.png'

const EventDetail  = () => {
    return(
        <div className="px-primaryPad overflow-hidden pt-32 pb-24 flex w-full">
            <div className="flex flex-col gap-12 mt-12 w-[85%]">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-12">
                        <img src={featureimage} alt="" className="w-[284px] h-[396px] object-cover rounded-3xl"/>
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="font-semibold text-4xl leading-text1 tracking-text1 text-purple700">Membangun Rutinitas Self-care</h3>
                                <p className="font-light text-beforeXl leading-text1 tracking-text1 text-purple900">Pelajari bagaimana ibu dapat menyusun rutinitas self-care yang sederhana namun efektif untuk menjaga kesehatan fisik dan mental, meningkatkan kesejahteraan emosional, serta tetap produktif tanpa merasa terbebani oleh tugas sehari-hari.</p>
                            </div>
                            <div className="flex justify-center items-center py-1 px-6 rounded-xl bg-purple100 text-purple800 font-medium text-beforeXl w-32">Rp65.000</div>
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
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-3xl leading-text1 tracking-text1 text-purple700">Deskripsi Webinar</h4>
                        <p className="font-light text-beforeXl leading-text1 tracking-text1 text-purple900">Dalam webinar ini, psikolog keluarga dan praktisi kesehatan mental akan membahas pentingnya self-care, memberikan strategi membangun rutinitas yang realistis, serta berbagi teknik relaksasi yang bisa diterapkan sehari-hari.</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h4 className="font-bold text-3xl leading-text1 tracking-text1 text-purple700">Keuntungan</h4>
                        <ul className="list-disc ml-5 font-light text-beforeXl leading-text1 tracking-text1 text-purple900">
                            <li>Memahami pentingnya self-care tanpa merasa bersalah</li>
                            <li>Menemukan cara praktis merawat diri di tengah kesibukan</li>
                            <li>Mendapat tips langsung dari ahli untuk menjaga keseimbangan hidup</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button 
                        classname='bg-purple500 hover:bg-purple700 py-3 px-6 text-white rounded-2xl text-xl flex gap-2 w-80 justify-center items-center leading-text1 tracking-text1'
                        isRedirect={true} redirectTo="/"
                        >
                        Daftar Sekarang
                    </Button>
                </div>
            </div>

            <div className="hidden md:block w-0.5 bg-purple100 ml-9 mr-6"></div>

                <div className="w-[40%] flex gap-5">
                    <div className="flex flex-col gap-4">
                        <h5 className="font-semibold text-4xl leading-[150%] text-purple700">Event Terdaftar</h5>
                        <div className='flex flex-col gap-5'>
                            <div className="bg-white flex items-center px-7 py-6 rounded-2xl gap-12 shadow-md hover:bg-purple50 transition ease-in-out duration-300 cursor-pointer">
                                <div className="flex flex-col justify-center gap-3">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-bold text-2xl leading-10 text-purple900 tracking-tight">Cara mengelola Stres untuk para Ibu</h3>
                                        <h6 className="font-light text-[15px] leading-[150%] line-clamp-2">Pelajari cara mengatasi stres dan tekanan emosional setelah melahirkan dengan teknik relaksasi sederhana serta dukungan profesional untuk menjaga kesehatan mental ibu.</h6>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className="bg-purple100 py-1 px-4 rounded-xl  text-purple800 font-medium text-sm flex items-center justify-center">
                                        <h6>Rp65.000</h6>
                                        </div>
                                        <div className="bg-purple100 py-1 px-4 rounded-xl  text-purple800 font-medium text-sm flex items-center justify-center">
                                            <h6>Sisa kuota: 12</h6>
                                        </div>
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
    )
}

export default EventDetail