import img from '../../../assets/images/HeroImage.png';
import image from '../../../assets/images/star.svg';
import Button from '../../atoms/Button';
import CircleBackground from '../../atoms/CircleBackground';
import FloatObject from '../../atoms/FloatObject';

const HeroSection = () => {
    return (
        <section className="w-full h-[652px] flex items-center px-primaryPad bg-purple50 overflow-hidden">
            <div className="flex flex-col w-1/2 mt-20 gap-[38px]">
                <div className="flex flex-col justify-center items-center text-purple800 z-10 gap-[24px]">
                    <h1 className="font-bold text-5xl leading-14">Teman Ibu di Masa Pasca Melahirkan</h1>
                    <p className="font-medium text-md leading-8">
                        Velomom hadir untuk memberikan informasi, komunitas, dan dukungan emosional bagi ibu yang menghadapi baby blues.
                    </p>
                </div>

                <div className="flex items-center h-full">
                    <Button classname='flex justify-center items-center rounded-[16px] border-[1px] border-purple500 text-purple500 font-medium text-xl py-3 px-6 hover:bg-purple500 hover:text-white transition-all duration-300' buttonType='button' 
                    isRedirect={true}
                    redirectTo='#about'>
                        Mulai Sekarang
                    </Button>
                </div>
            </div>
            <div className="flex justify-center items-end h-full w-1/2 relative">
                <CircleBackground classname="w-[700px] h-[700px]" />
                <CircleBackground classname="w-[560px] h-[560px]" />
                <CircleBackground classname="w-[430px] h-[430px]" />

                <img src={img} alt="Your Image" className="w-[75%] h-[90%] z-10 ml-20" />
                <FloatObject classname="top-20 left-96 w-[52px]" image={image}/>
                <FloatObject classname="top-52 left-41 w-[36px]" image={image}/>
                <FloatObject classname="top-65 left-16 w-[34px]" image={image}/>
            </div>

        </section>
    );
};

export default HeroSection;