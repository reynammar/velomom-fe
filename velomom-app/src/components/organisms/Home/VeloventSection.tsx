import Button from "../../atoms/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCalendarDays, faLocationDot, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import image from '../../../assets/images/slider-image.jpg'
import Icon from "../../atoms/Icon";

const VeloventSection = () => {
    return(
        <section className="w-full py-9 px-[70px] overflow-hidden gap-10 bg-gradient-to-b from-[#E6D4FF] via-[#E1CCFF] to-[#FCDBE7]">
            <div className="w-full flex flex-col gap-12">
                {/* Title Section */}
                <div className="w-full flex items-center justify-between">
                    <h2 className="w-[55%] font-semibold text-5xl text-third leading-14">Ikuti webinar menarik di VeloVent!</h2>
                    <Button classname="rounded-2xl py-3 px-6 text-white w-[220px] h-12 bg-primary" isRedirect={true} redirectTo="/login">
                        Selengkapnya
                    </Button>
                </div>
                {/* Content Slider */}
                <div className="flex flex-col justify-between items-center gap-11">
                    <div className="flex justify-between items-center gap-12">
                        <FontAwesomeIcon icon={faArrowLeft} className="border-[2px] border-primary rounded-full py-[7px] px-2 text-primary" />
                        <div className="bg-white flex items-center px-9 py-6 rounded-2xl gap-12">
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
                        <FontAwesomeIcon icon={faArrowRight} className="border-[2px] border-primary rounded-full py-[7px] px-2 text-primary" />
                    </div>
                    <div className="flex gap-3">
                        <FontAwesomeIcon icon={faCircle} className="w-6 text-primary" />
                        <FontAwesomeIcon icon={faCircle} className="w-6 text-pinkprimary" />
                        <FontAwesomeIcon icon={faCircle} className="w-6 text-pinkprimary" />
                        <FontAwesomeIcon icon={faCircle} className="w-6 text-pinkprimary" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default VeloventSection