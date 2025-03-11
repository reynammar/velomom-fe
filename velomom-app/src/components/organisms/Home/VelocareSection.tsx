import { Link } from 'react-router-dom';
import icon from '../../../assets/images/illustrations velocare.svg'
import icon2 from '../../../assets/images/illustrations selfcare.svg'
import icon3 from '../../../assets/images/illustrations sharestory.svg'
import icon4 from '../../../assets/images/illustrations chat.svg'


const VeloCareSection = () => {
    return (
        <section className="w-full flex items-center py-16 px-[70px] bg-purple50 overflow-hidden gap-6">
            <div className="flex flex-col w-full gap-[92px]">
            {/* Div title */}
                <div className="flex flex-col justify-center text-center gap-6 text-purple700 w-full py-2.5">
                    <h1 className="font-bold text-4xl">Dapatkan dukungan emosional dengan VeloCare</h1>
                    <h5 className="font-medium text-[23px]">VeloCare menghadirkan Journaling, Self-care, Share Story, dan Professional Chat untuk mendukung ibu melewati baby blues dengan lebih tenang.</h5>
                </div>

                {/* Div Card */}
                <div className="flex flex-col justify-center items-center gap-[108px]">
                    <div className="flex justify-center items-center gap-6">
                        <Link to="/journaling" className='bg-white/30 hover:bg-pink-200/50 text-purple900 pt-[88px] pb-6 px-6 relative w-1/2 flex justify-center items-center flex-col gap-1 rounded-lg z-20 transition-all duration-400'>
                            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10">
                            </div>
                            <img src={icon} className="w-[120px] absolute -top-14 z-30" alt="" />
                            <h4 className="font-medium text-[32px]">Journaling</h4>
                            <h5 className="font-light text-2xl leading-9">Tuliskan perasaan dan pengalaman harianmu untuk membantu mengenali emosi, mengelola stres, dan melacak perkembangan diri selama masa pasca melahirkan</h5>
                        </Link>
                        <Link to="/journaling" className='bg-white/30 hover:bg-pink-200/50 text-purple900 pt-[88px] pb-6 px-6 relative w-1/2 flex justify-center items-center flex-col gap-1 rounded-lg z-20 transition-all duration-400'>
                            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10">
                            </div>
                            <img src={icon2} className="w-[120px] absolute -top-14 z-30" alt="" />
                            <h4 className="font-medium text-[32px]">Self-Care</h4>
                            <h5 className="font-light text-2xl leading-9">Dapatkan berbagai rekomendasi aktivitas sederhana yang mendukung kesejahteraan fisik dan mental, membantu ibu merasa lebih rileks dan nyaman</h5>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <Link to="/journaling" className='bg-white/30 hover:bg-pink-200/50 text-purple900 pt-[88px] pb-6 px-6 relative w-1/2 flex justify-center items-center flex-col gap-1 rounded-lg z-20 transition-all duration-400'>
                            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10">
                            </div>
                            <img src={icon3} className="w-[120px] absolute -top-14 z-30" alt="" />
                            <h4 className="font-medium text-[32px]">Share Story</h4>
                            <h5 className="font-light text-2xl leading-9">Bagikan kisah dan pengalaman pribadi dalam komunitas yang suportif, temukan dukungan serta inspirasi dari sesama ibu yang memahami perjalanan ini.</h5>
                        </Link>
                        <Link to="/journaling" className='bg-white/30 hover:bg-pink-200/50 text-purple900 pt-[88px] pb-6 px-6 relative w-1/2 flex justify-center items-center flex-col gap-1 rounded-lg z-20 transition-all duration-400'>
                            <div className="w-[145px] h-[145px] rounded-[50%] bg-white/30 bg-opacity-5 absolute -top-17 z-10">
                            </div>
                            <img src={icon4} className="w-[120px] absolute -top-14 z-30" alt="" />
                            <h4 className="font-medium text-[32px]">Professional Chat</h4>
                            <h5 className="font-light text-2xl leading-9">Konsultasi langsung dengan ahli untuk mendapatkan bimbingan emosional, saran profesional, dan solusi yang sesuai dengan kebutuhan ibu</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VeloCareSection