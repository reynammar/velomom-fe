import { getArticles } from '../../../api/services/articles';
import image from '../../../assets/images/About.svg';
import icon from '../../../assets/images/list-icon.svg';

const AboutSection = () => {
    (async () => {
    try {
        const articles = await getArticles();
        console.log('Fetched Articles:', articles);
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
})();
    return (
        <section className="w-full h-[400px] flex justify-center items-center px-[70px] my-10 overflow-hidden gap-14" id='about'>
            <div className="flex flex-col w-[45%] gap-[28px]">
                <h2 className="font-semibold text text-5xl text-purple700">Apa itu VeloMom?</h2>
                <p className="text-purple900 font-light text-xl text-justify">
                    <span className="text-purple700 font-semibold">Velomom</span> menyediakan dukungan bagi ibu pasca melahirkan melalui fitur-fitur unggulan:
                    <ul className="list-none flex flex-col gap-4 mt-2">
                        <li className="flex">
                            <img src={icon} alt="Icon" className="h-5 w-5 mr-3 mt-1" />
                            <p><span className="text-purple700 font-semibold">VeloCare </span> menyediakan layanan emosional untuk mendukung kesehatan mental ibu.</p>
                        </li>
                        <li className="flex">
                            <img src={icon} alt="My Icon" className="h-5 w-5 mr-3 mt-1" />
                            <p><span className="text-purple700 font-semibold">VeloGuide</span> menyediakan konten edukatif seputar kesehatan mental dan perawatan bayi.</p>
                        </li>
                        <li className="flex">
                            <img src={icon} alt="My Icon" className="h-5 w-5 mr-3 mt-1" />
                            <p><span className="text-purple700 font-semibold">VeloVent</span> menghadirkan webinar interaktif seputar kehidupan ibu.</p>
                        </li>
                    </ul>
                </p>
            </div>

            <div className="relative w-[65%] py-4 flex justify-center items-center">
                <img src={image} alt="about"/>
            </div>
        </section>
    );
}

export default AboutSection;