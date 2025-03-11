import image from '../../../assets/images/About.svg';

const AboutSection = () => {
    return (
        <section className="w-full h-[400px] flex justify-center items-center px-[70px] my-10 overflow-hidden gap-14" id='about'>
            {/* Kolom Kiri */}
            <div className="flex flex-col w-[45%] gap-[28px]">
                <h2 className="font-semibold text text-5xl text-purple700">Apa itu VeloMom?</h2>
                <p className="text-purple900 font-light text-[17px] text-justify">
                    <span className="text-purple700">Velomom</span> menyediakan dukungan bagi ibu pasca melahirkan melalui VeloCare yang menawarkan layanan emosional, VeloGuide dengan informasi terpercaya seputar kesehatan mental dan perawatan bayi, serta VeloVent yang menghadirkan webinar seputar kehidupan ibu. Dengan Velomom, ibu dapat melewati baby blues dengan lebih tenang dan percaya diri.
                </p>
            </div>

            {/* Kolom Kanan */}
            <div className="relative w-[65%] py-4 flex justify-center items-center">
                <img src={image} alt="about"/>
            </div>
        </section>
    );
}

export default AboutSection;