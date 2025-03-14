import { Link } from 'react-router-dom';
import ArticleCard from '../../molecules/GuideCard';
import img from '../../../assets/images/category-card.png';
import img2 from '../../../assets/images/feature-image.png';

const ArticlePage = () => {
    const articles = [
            {
                image: img,
                date: 'Senin, 33 Mei 2025',
                title: 'Mengatasi Baby Blues dengan Dukungan yang Tepat',
                description: 'Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.',
            },
        ];

    return (
        <div className="overflow-hidden pt-20 pb-20 flex w-full flex-wrap">

            <div className="flex pr-[72px] w-full bg-gradient-to-b from-custom1 via-custom2 to-custom3 z-10 py-30 items-center relative">
                <div className="w-full relative mr-52"></div>
                <img src={img} alt="artikel-image" className='absolute top-20 left-18 w-[34.5rem] h-[33.5rem] object-cover rounded-lg' />
                <div className="flex flex-col gap-7 justify-center">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold leading-text2 tracking-text1 text-5xl text-purple700">Mengatasi Baby Blues dengan Dukungan yang Tepat</h2>
                        <h6 className="font-light text-xl leading-text1 tracking-text1 text-purple900">Baby blues bisa terasa berat, tetapi dengan dukungan yang tepat, ibu dapat melewatinya. Kenali tanda-tandanya dan temukan cara efektif untuk menghadapinya.</h6>
                    </div>
                    <p className="font-light text-base leading-text1 tracking-text1 ">Senin, 33 Mei 2025</p>
                </div>
            </div>


            <div className="flex w-full px-primaryPad">
                <div className="flex flex-1 gap-8 flex-col mt-24">
                    <div className='flex flex-col gap-8 font-light text-beforeXl leading-text1 tracking-text1 text-purple900 text-justify'>
                        <p>Menjadi ibu adalah pengalaman luar biasa, tetapi juga bisa menjadi tantangan emosional. Baby blues sering dialami ibu setelah melahirkan, ditandai dengan perubahan suasana hati, kecemasan, dan mudah menangis. Perubahan hormon, kelelahan, serta tekanan dalam menyesuaikan diri sebagai ibu baru sering kali menjadi penyebabnya. Meski umum terjadi dan dapat mereda dalam beberapa minggu, ibu tetap membutuhkan dukungan yang tepat agar tidak merasa sendirian.</p>
                        <p>Dukungan dari pasangan sangat penting dalam membantu ibu menghadapi baby blues. Pasangan bisa mendukung dengan mendengarkan tanpa menghakimi, membantu mengurus bayi, atau memberikan waktu istirahat bagi ibu. Hal sederhana seperti memberi perhatian dan menunjukkan kasih sayang dapat membuat ibu merasa lebih dihargai dan didukung. Dengan komunikasi yang baik, pasangan dapat menjadi sumber kekuatan utama bagi ibu di masa ini.</p>
                        <p>Selain pasangan, keluarga dan teman juga berperan dalam memberikan dukungan emosional. Mereka bisa membantu dengan mengasuh bayi sejenak, atau sekadar menjadi pendengar yang baik. Kehadiran orang-orang terdekat dapat membuat ibu merasa tidak sendirian dan lebih tenang dalam menjalani peran barunya.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-fit'>
                        <img src={img2} alt="featured-image" />
                        <p className='font-light text-beforebase1 leading-text2 tracking-text1'>sumber: cnn/today-news/family</p>
                    </div>
                    <div className='flex flex-col gap-8 font-light text-beforeXl leading-text1 tracking-text1 text-purple900 text-justify'>
                        <p>Bergabung dengan komunitas ibu baru juga bisa menjadi cara efektif dalam menghadapi baby blues. Dalam komunitas, ibu bisa berbagi pengalaman, mendapatkan tips, dan merasa lebih dipahami oleh sesama ibu yang mengalami hal serupa. Diskusi atau webinar tentang kesehatan mental ibu juga dapat memberikan wawasan baru dan membantu ibu menghadapi tantangan setelah melahirkan.</p>
                        <p>Selain dukungan eksternal, ibu juga perlu menjaga keseimbangan fisik dan mentalnya. Mengatur pola tidur, mengonsumsi makanan bergizi, serta melakukan aktivitas seperti journaling atau meditasi ringan dapat membantu mengelola emosi. Langkah kecil seperti mendengarkan musik atau berjalan santai juga bisa memberikan efek positif bagi kesejahteraan ibu.</p>
                        <p>Baby blues biasanya membaik dengan sendirinya, tetapi jika perasaan sedih semakin parah, ibu merasa sulit menjalani hari, atau muncul pikiran negatif yang mengganggu, sebaiknya segera mencari bantuan profesional. Konsultasi dengan psikolog atau konselor dapat memberikan solusi yang tepat. Dengan dukungan yang cukup, ibu dapat melewati masa ini dan menikmati perjalanan menjadi seorang ibu dengan lebih bahagia.</p>
                    </div>
                </div>

                <div className="hidden md:block w-0.5 bg-purple100 ml-20 mr-6"></div>

                <div className="w-1/3 flex flex-col gap-4 mt-24">
                    <h6 className='font-semibold text-xl text-purple900 leading-text1 tracking-text1'>Artikel Terbaru</h6>
                    <div className='flex flex-col gap-5'>
                        <Link to="">Mengapa Dukungan Emosional Penting bagi Ibu?</Link>
                        <hr className='border-[1px] border-purple100' />
                        <Link to="">Mengapa Dukungan Emosional Penting bagi Ibu?</Link>
                    </div>
                </div>
            </div>

            <div className='px-primaryPad flex flex-col gap-8 mt-16'>
                <div className='flex gap-6'>
                    <h2 className='font-bold text-5xl leading-text2 tracking-text1 text-purple700'>Artikel Lainnya</h2>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    {articles.map((article, index) => (
                        <ArticleCard 
                            key={index}
                            image={article.image}
                            date={article.date}
                            title={article.title}
                            description={article.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArticlePage;